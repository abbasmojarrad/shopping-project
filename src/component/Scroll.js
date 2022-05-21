import React from "react";
import styles from './css/scroll.module.css';
function Scroll() {
  const handleScroll = () => {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div onClick={handleScroll} className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown}></div>
        <div className={styles.chevrondown}></div>
      </div>
    </div>
  );
}

export default Scroll;
