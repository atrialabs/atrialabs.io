import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Logo: React.FC = () => {
  return (
    <svg className={styles.logo} viewBox="0 0 100 100">
      <polyline points="0,12 0,100 89,100 68,80 20,80 20,32" fill="#ba4666" />
      <polyline fill="#ba4666" points="0,0 100,0 100,100 80,80 80,20 20,20" />
    </svg>
  );
};

const Header: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <div className={styles.spacer}>
          <Link href="/">
            <a className={styles.brandingbox}>
              <Logo />
              <span className={styles.branding}>Atria Labs</span>
            </a>
          </Link>
          <div className={styles.menu}>
            <Link href="/essays">
              <a className={styles.menuItem}>Essays</a>
            </Link>
            <Link href="/contact">
              <a className={styles.menuItem}>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
