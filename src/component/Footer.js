import React from "react";
//css
import styles from "./css/footer.module.css";

const Footer=() =>{
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialmedia}>
          <p>instagram</p>
          <p>telegram </p>
          <p>youtube </p>
        </div>
        <div>
          <p> copy right term of service </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
