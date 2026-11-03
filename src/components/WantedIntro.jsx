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
// if nobody steers the glass, it starts searching on its own
const IDLE_BEFORE_AUTO_MS = { mouse: 7000, touch: 4000 };
const STAMP_HOLD_MS = 1700;
const REVEAL_MS = 950;

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// any phone/tablet, including Android browsers that don't report `hover: none`
const isTouchDevice = () =>
  window.matchMedia("(hover: none), (pointer: coarse)").matches || navigator.maxTouchPoints > 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

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
  const [isTouch] = useState(isTouchDevice);
  const [phase, setPhase] = useState("search"); // search → stamp → reveal
  const rootRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    const root = rootRef.current;
    const small = root.clientWidth < 600;
    const radius = small ? 80 : 84;

    // measure the intro itself: on phones window.innerHeight differs from the fixed layer while the URL bar shows
    const size = { w: root.clientWidth, h: root.clientHeight };

    const pos = { x: size.w * 0.18, y: size.h * 0.38 };
    const target = { ...pos };

    let currentPhase = "search";
    let locked = false;
    let auto = false;
    let dragFrom = null; // last finger position while dragging
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
      idleTimer = setTimeout(startAuto, IDLE_BEFORE_AUTO_MS[isTouch ? "touch" : "mouse"]);
    };

    const autoTarget = (now) => {
      const points = [
        autoFrom,
        ...AUTO_PATH.map((p) => ({ x: p.x * size.w, y: p.y * size.h })),
      ];
      // rAF timestamps can be a hair older than performance.now(): never go below 0
      const elapsed = Math.max(0, (now - autoStart) / AUTO_SEGMENT_MS);
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
      const cx = size.w / 2;
      const cy = size.h / 2;

      if (currentPhase === "reveal") {
        const t = clamp((now - revealStart) / REVEAL_MS, 0, 1);
        const maxRadius = Math.hypot(size.w, size.h);

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

        const smoothing = locked ? 0.12 : dragFrom ? 0.35 : 0.2;
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

    // mouse: the glass follows the cursor
    // finger: drag anywhere on the screen and the glass moves by the same amount,
    // so the finger never covers the lens
    const handleDown = (e) => {
      if (locked || e.pointerType === "mouse" || e.target.closest(".wi-skip")) return;

      auto = false;
      clearTimeout(idleTimer);
      dragFrom = { x: e.clientX, y: e.clientY };
      target.x = pos.x;
      target.y = pos.y;
    };

    const handleMove = (e) => {
      if (locked) return;

      if (e.pointerType === "mouse") {
        auto = false;
        target.x = e.clientX;
        target.y = e.clientY;
        resetIdle();
      } else if (dragFrom) {
        target.x = clamp(target.x + e.clientX - dragFrom.x, 0, size.w);
        target.y = clamp(target.y + e.clientY - dragFrom.y, 0, size.h);
        dragFrom = { x: e.clientX, y: e.clientY };
      }
    };

    const handleUp = () => {
      if (!dragFrom) return;

      dragFrom = null;
      if (!locked) resetIdle();
    };

    const handleResize = () => {
      size.w = root.clientWidth;
      size.h = root.clientHeight;
      setVar("--w", `${size.w}px`);
      setVar("--h", `${size.h}px`);
    };

    revealRef.current = beginReveal;
    handleResize();
    setVar("--r", `${radius}px`);
    setVar("--zoom", small ? "1" : "1.12");
    setVar("--hole", `${radius}px`);
    setVar("--x", `${pos.x}px`);
    setVar("--y", `${pos.y}px`);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    root.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    window.addEventListener("resize", handleResize);
    resetIdle();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      clearTimeout(stampTimer);
      root.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible, isTouch]);

  if (!visible) return null;

  return (
    <div ref={rootRef} className={`wanted-intro is-${phase}`} aria-hidden="true">
      {/* blurred paper */}
      <div className="wi-layer wi-layer-blur">
        <Paper />
      </div>

      <div className="wi-vignette" />
      <div className="wi-spot" />

      {/* the glass carries a sharp, magnified copy of the paper, counter-moved so it lines up.
          Everything moves with transforms only, so it stays smooth on phones. */}
      <div className="wi-glass">
        <div className="wi-glass-body">
          <div className="wi-lens">
            <div className="wi-lens-paper">
              <Paper />
            </div>
          </div>
        </div>
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

      <p className="wi-hint">
        {isTouch ? "Drag the glass — find the subject" : "Take the glass — find the subject"}
      </p>

      <button type="button" className="wi-skip" onClick={() => revealRef.current?.()}>
        Skip intro →
      </button>
    </div>
  );
};

export default WantedIntro;
