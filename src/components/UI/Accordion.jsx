import { useEffect, useState } from "react";
import faq from "../../api/faq.json";
import { FAQ } from "../Layout/FAQ";

export const Accordion = () => {
  const [data, setData] = useState([]); // State for FAQ data
  const [activeId, setActiveId] = useState(false); // Track active FAQ by ID
  const [theme, setTheme] = useState("default"); // State for theme

  useEffect(() => {
    setData(faq); // Load FAQ data
  }, []);

  // Function to toggle the active FAQ
  const handleToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  // Function to change the theme
  const changeTheme = (newTheme) => {
    // Remove existing theme classes
    document.body.classList.remove("hacker-theme-1", "hacker-theme-2");
    // Add the new theme class
    if (newTheme !== "default") {
      document.body.classList.add(newTheme);
    }
    // Update the theme state
    setTheme(newTheme);
  };

  return (
    <>
      <h1>React & Javascript Questions</h1>

      {/* Theme Switcher Buttons */}
      <div className="theme-switcher">
        <button
          onClick={() => changeTheme("default")}
          className={theme === "default" ? "active-btn" : ""}
        >
          Default Theme
        </button>
        <button
          onClick={() => changeTheme("hacker-theme-1")}
          className={theme === "hacker-theme-1" ? "active-btn" : ""}
        >
          Neon Purple Theme
        </button>
        <button
          onClick={() => changeTheme("hacker-theme-2")}
          className={theme === "hacker-theme-2" ? "active-btn" : ""}
        >
          Neon Red Theme
        </button>
      </div>

      {/* FAQ Accordion */}
      <ul className="section-accordion">
        {data &&
          data.map((curElem) => {
            const { id } = curElem;
            return (
              <FAQ
                key={id}
                curData={curElem}
                isActive={activeId === id}
                onToggle={() => handleToggle(id)}
              />
            );
          })}
      </ul>
    </>
  );
};