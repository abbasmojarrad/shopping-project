import React from "react";
import styles from './scroll.module.css';
function Scroll() {
  return (
    <div className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown}></div>
        <div className={styles.chevrondown}></div>
      </div>
    </div>
  );
}

export default Scroll;
