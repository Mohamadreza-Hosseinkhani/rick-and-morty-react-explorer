import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import "./heder.scss";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState("search in");

  const handleElementClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const updatePlaceholder = () => {
    if (window.innerWidth >= 1024) {
      setPlaceholder("Character, episode, location...");
    } else {
      setPlaceholder("search in");
    }
  };

  useEffect(() => {
    // Set the initial placeholder based on the current window width
    updatePlaceholder();

    // Add event listener for window resize
    window.addEventListener("resize", updatePlaceholder);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updatePlaceholder);
    };
  }, []);

  return (
    <header className="haeder">
      <a href="/" className="haeder__logo haeder__logo--desktop">
        <img src="/logo.png" alt="logo" loading="lazy" />
      </a>

      <form className="header__form">
        <input
          type="search"
          placeholder={placeholder}
          value={inputValue}
          onChange={() => setInputValue(event.target.value)}
          ref={inputRef}
          className="header__form__input"
        />

        <button type="submit" className="header__form__search-icon">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m26.708 25.293-6.26-6.258a11.014 11.014 0 1 0-1.413 1.414l6.258 6.258a1 1 0 0 0 1.415-1.415M3 12a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9" />
          </svg>
        </button>

        <div
          onClick={handleElementClick}
          className={clsx(
            "haeder__logo haeder__logo--mobile",
            inputValue ? "hide" : ""
          )}
        >
          <img src="/logo.png" alt="logo" loading="lazy" />
        </div>
      </form>
    </header>
  );
};

export default Header;