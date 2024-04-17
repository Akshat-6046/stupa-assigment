import React, { useContext } from "react";
import styles from "./styles.module.css";

// USING THEME CONTEXT TO SWITCH DARK, LIGHT MODES
import contextTheme from "../../utils/context"; 

export default function Home() {
  const { theme } = useContext(contextTheme);

  return (
    <div
      className={`${styles.mainBody} ${
        theme === "dark" ? styles.bodyDark : ""
      }`}
    >
      <div className={styles.text} data-content="DOG">
        DOG
      </div>
      <div className={styles.image} />
    </div>
  );
}
