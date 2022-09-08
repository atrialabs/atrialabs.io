import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>© Atria Labs</div>
    </div>
  );
};

export default Footer;
