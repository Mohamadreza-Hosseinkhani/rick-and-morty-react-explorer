import { useState, useEffect } from "react";
import { IMAGE_PATHS } from "/src/constants/image";
import { SunIcon, MoonIcon } from "/src/constants/Icon";
import clsx from "clsx";

import "./hero.scss";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const imgUrl = isDarkMode ? IMAGE_PATHS.dark : IMAGE_PATHS.light;

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__content__haeding">
          Find out everything in one <span>Place.</span>
        </h1>

        <p className="hero__content__text">
          Characters, locations, episodes and more.
        </p>

        <ul className="hero__content__list">
          <li>+800 Characters</li>
          <li>+120 location</li>
          <li>+50 episodes</li>
        </ul>

        <div className="hero__theme-btns">
          <button
            className={clsx(
              "theme-btns__btn",
              "theme-btns__btn--dark",
              isDarkMode ? "active-theme" : ""
            )}
          >
            <span className="theme-btns__btn__icon">
              <MoonIcon />
            </span>
            <span className="theme-btns__btn__text">Dark</span>
          </button>

          <button
            className={clsx(
              "theme-btns__btn",
              "theme-btns__btn--light",
              !isDarkMode ? "active-theme" : ""
            )}
          >
            <span className="theme-btns__btn__icon">
              <SunIcon />
            </span>
            <span className="theme-btns__btn__text">Light</span>
          </button>
        </div>

        <p className="hero__theme-text">
          To change the theme, simply adjust the theme settings on your device.
        </p>
      </div>

      <div className="hero__image">
        <img src={imgUrl} alt="rick image" loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;
