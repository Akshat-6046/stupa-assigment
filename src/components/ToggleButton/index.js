import React, { useContext } from "react";
import styles from "./styles.module.css";
import { GiNightSleep } from "react-icons/gi";
import { HiSun } from "react-icons/hi";
import contextTheme from "../../utils/context";

export default function ToggleButton() {
  const { theme, toggleTheme } = useContext(contextTheme);
  // USED TO TOGGLE BETWWEN DARK AND LIGHT THEMES AND REFLECT CHANGES IN OVERALL PROJECT
  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${
        theme === "dark" ? styles.toggleButtonDark : ""
      }`}
      title={`turn on ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <HiSun size="20px" /> : <GiNightSleep size="20px" />}
    </button>
  );
}
