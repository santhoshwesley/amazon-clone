import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <img src="./assets/amazon_logo.png" width="100" alt="" />
        <p>@ 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Footer;
