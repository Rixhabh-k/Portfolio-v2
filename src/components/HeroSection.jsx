import { useEffect, useState } from "react";
import RishabhImg from "../assets/rishabh-potrait.png";

const getWeatherDescription = (code) => {
  if (code === 0) return "Clear sky";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code >= 45 && code <= 48) return "Foggy";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";

  return "Unknown";
};

const HeroSection = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=28.5355&longitude=77.3910&current=temperature_2m,weather_code&timezone=Asia%2FKolkata"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await res.json();

        setWeather({
          temperature: data.current.temperature_2m,
          description: getWeatherDescription(data.current.weather_code),
        });
      } catch (error) {
        console.error("Weather fetch failed:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero-header">
        <h1>Front Page</h1>
        <h1>Filed under: Open Investigations</h1>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-left">
          <p className="hero-top-p">Case No. 43 — Findings Published</p>

          <h1>
            A developer who enjoys building things, breaking things, and
            figuring out how they work.
          </h1>

          <div className="intro-text">
            <p>
              Rishabh is a developer focused on building thoughtful digital experiences, combining frontend development, UI/UX, and problem-solving with a growing foundation across the modern web stack.
            </p>
          </div>

          <div className="small-info">
            <p>
  By <span>The Investigation Desk ·</span> Reporting from Noida,
  following the subject's work across design & development
</p>
          </div>

          <div className="action-btns">
            <a href="#work">Read the Work</a>
            <a href="#contact">Get In Touch</a>
          </div>

          <div className="hero-stats">
            <div className="stats">
              <h1>No. 43</h1>
              <p>Edition · first printing</p>
            </div>

            <div className="stats">
              {weather ? (
                <>
                  <h1>{Math.round(weather.temperature)}°C</h1>
                  <p>Noida · {weather.description}</p>
                </>
              ) : (
                <>
                  <h1>--°C</h1>
                  <p>Noida · Loading weather...</p>
                </>
              )}
            </div>

            <div className="stats">
              <h1>Global</h1>
              <p>Circulation · remote-friendly</p>
            </div>

            <div className="stats">
              <h1>Late Final</h1>
              <p>Ships when it's ready</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <img src={RishabhImg} alt="Rishabh Portrait" />
          </div>

          <div className="image-title">
            <p>
              <span>Pictured:</span> the subject, in his natural habitat.
            </p>
          </div>

          <div className="article-body">
            <p>
              He enjoys turning ideas into things people can actually use. As a
              web developer, he works across the stack — from React interfaces
              to APIs, authentication, and databases.
            </p>

            <p>
              His work sits between design and engineering. He cares about how
              products look, move, and work underneath. He builds, works with
              clients, and keeps sharpening his craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;