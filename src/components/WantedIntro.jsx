import { useEffect, useRef, useState } from "react";
import "../styles/wanted-intro.css";

/*
  Intro loader: a blurred newspaper with a magnifying glass for a cursor.
  The lens shows the paper sharp. When it reaches the "Wanted" notice in the
  centre it locks on, the poster stamps in, and the lens expands to reveal the page.

  Plays once per browser session. Skipped for visitors who prefer reduced motion.
*/

const STORAGE_KEY = "wanted-intro-seen";

const COLUMNS = 5;
const BLOCKS_PER_COLUMN = 5;
const LINE_WIDTHS = [100, 100, 72, 100, 88, 100, 64, 100, 94, 80];
const BLOCK_SIZES = [9, 6, 11, 7, 8, 10];

// on touch devices (and desktop visitors who never move the mouse) the glass searches on its own
const AUTO_PATH = [
  { x: 0.2, y: 0.32 },
  { x: 0.42, y: 0.74 },
  { x: 0.78, y: 0.3 },
  { x: 0.5, y: 0.5 },
];
const AUTO_SEGMENT_MS = 1100;
const IDLE_BEFORE_AUTO_MS = 7000;
const STAMP_HOLD_MS = 1700;
const REVEAL_MS = 950;

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const shouldShowIntro = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    return !sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
};

const Paper = () => (
  <div className="wi-paper">
    {Array.from({ length: COLUMNS }, (_, col) => (
      <div className="wi-column" key={col}>
        {Array.from({ length: BLOCKS_PER_COLUMN }, (_, block) => {
          const size = BLOCK_SIZES[(col * BLOCKS_PER_COLUMN + block) % BLOCK_SIZES.length];

          return (
            <div className="wi-block" key={block}>
              <span className="wi-heading" />
              {Array.from({ length: size }, (_, line) => (
                <span
                  className="wi-line"
                  key={line}
                  style={{
                    width: `${LINE_WIDTHS[(col * 7 + block * 3 + line) % LINE_WIDTHS.length]}%`,
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    ))}

    <div className="wi-notice">
      <p>Wanted</p>
      <h2>Rishabh Kharwar</h2>
      <span />
    </div>
  </div>
);

const WantedIntro = () => {
  const [visible, setVisible] = useState(shouldShowIntro);
  const [phase, setPhase] = useState("search"); // search → stamp → reveal
  const rootRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    const root = rootRef.current;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const radius = window.innerWidth < 600 ? 74 : 84;

    const pos = { x: window.innerWidth * 0.18, y: window.innerHeight * 0.38 };
    const target = { ...pos };

    let currentPhase = "search";
    let locked = false;
    let auto = isTouch;
    let autoStart = performance.now();
    let autoFrom = { ...pos };
    let revealStart = 0;
    let raf = 0;
    let idleTimer = 0;
    let stampTimer = 0;

    const setVar = (name, value) => root.style.setProperty(name, value);

    const startAuto = () => {
      auto = true;
      autoStart = performance.now();
      autoFrom = { ...pos };
    };

    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(startAuto, IDLE_BEFORE_AUTO_MS);
    };

    const autoTarget = (now) => {
      const points = [
        autoFrom,
        ...AUTO_PATH.map((p) => ({ x: p.x * window.innerWidth, y: p.y * window.innerHeight })),
      ];
      const elapsed = (now - autoStart) / AUTO_SEGMENT_MS;
      const segment = Math.min(Math.floor(elapsed), points.length - 2);
      const t = Math.min(ease(elapsed - segment), 1);
      const from = points[segment];
      const to = points[segment + 1];

      return { x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t };
    };

    const beginReveal = () => {
      if (currentPhase === "reveal") return;

      clearTimeout(stampTimer);
      currentPhase = "reveal";
      revealStart = performance.now();
      setPhase("reveal");
    };

    const finish = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // storage unavailable: the intro simply plays again next time
      }

      setVisible(false);
    };

    const tick = (now) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      if (currentPhase === "reveal") {
        const t = Math.min((now - revealStart) / REVEAL_MS, 1);
        const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

        setVar("--hole", `${radius + ease(t) * maxRadius}px`);

        if (t === 1) {
          finish();
          return;
        }
      } else {
        if (locked) {
          target.x = cx;
          target.y = cy;
        } else {
          if (auto) Object.assign(target, autoTarget(now));

          if (Math.hypot(pos.x - cx, pos.y - cy) < radius * 0.75) locked = true;
        }

        const smoothing = locked ? 0.12 : 0.2;
        pos.x += (target.x - pos.x) * smoothing;
        pos.y += (target.y - pos.y) * smoothing;

        if (locked && currentPhase === "search" && Math.hypot(pos.x - cx, pos.y - cy) < 0.5) {
          currentPhase = "stamp";
          setPhase("stamp");
          stampTimer = setTimeout(beginReveal, STAMP_HOLD_MS);
        }

        setVar("--x", `${pos.x}px`);
        setVar("--y", `${pos.y}px`);
      }

      raf = requestAnimationFrame(tick);
    };

    const handleMove = (e) => {
      if (isTouch || locked) return;

      auto = false;
      target.x = e.clientX;
      target.y = e.clientY;
      resetIdle();
    };

    revealRef.current = beginReveal;
    setVar("--r", `${radius}px`);
    setVar("--hole", `${radius}px`);
    setVar("--x", `${pos.x}px`);
    setVar("--y", `${pos.y}px`);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("pointermove", handleMove);
    if (!isTouch) resetIdle();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      clearTimeout(stampTimer);
      window.removeEventListener("pointermove", handleMove);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div ref={rootRef} className={`wanted-intro is-${phase}`} aria-hidden="true">
      {/* blurred paper */}
      <div className="wi-layer wi-layer-blur">
        <Paper />
      </div>

      <div className="wi-spot" />

      {/* sharp, slightly magnified paper — only visible through the lens */}
      <div className="wi-layer wi-lens-view">
        <div className="wi-zoom">
          <Paper />
        </div>
      </div>

      <div className="wi-glass">
        <div className="wi-glass-body" />
      </div>

      {/* the poster that pops once the subject is found */}
      {phase !== "search" && (
        <div className="wi-poster">
          <p className="wi-poster-kicker">Wanted</p>
          <p className="wi-poster-sub">For questioning about the web</p>
          <h2>Rishabh Kharwar</h2>
          <p className="wi-poster-role">Web Developer · Designer</p>

          <dl>
            <div>
              <dt>Last seen</dt>
              <dd>Noida, India</dd>
            </div>
            <div>
              <dt>Reward</dt>
              <dd>One Coffee</dd>
            </div>
          </dl>

          <span className="wi-poster-stamp">Found</span>
        </div>
      )}

      <p className="wi-hint">Take the glass — find the subject</p>

      <button type="button" className="wi-skip" onClick={() => revealRef.current?.()}>
        Skip intro →
      </button>
    </div>
  );
};

export default WantedIntro;
