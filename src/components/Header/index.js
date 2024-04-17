import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // REACT LINKS TO NAVIGATE WITHOUT PAGE RELOAD
import { HEADER_MAPPING } from "../../utils/header-constants"; // CONFIG FOR NAVIGATION BAR
import styles from "./styles.module.css";
import ToggleButton from "../ToggleButton"; // THEME TOGGLE BUTTON
import contextTheme from "../../utils/context";

function Header() {
  const { pathname } = useLocation(); // USING HOOK TO GET PATHNAME FROM URL
  const { theme } = useContext(contextTheme);
  return (
    <div
      className={`${styles.headerMain} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.headerBar}>
        {HEADER_MAPPING.map((item) => {
          const LogoComponent = item.logo;
          return (
            <Link
              key={item.title}
              to={item.routeParam}
              style={{ textDecoration: "none" }}
            >
              <div
                className={
                  pathname === item.routeParam
                    ? styles.activeItem
                    : styles.headerItem
                }
              >
                <div className={styles.headerLogo}>
                  <LogoComponent />
                </div>
                <div className={styles.headerTitle}>{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}

export default Header;
