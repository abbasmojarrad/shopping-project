import React from "react";
//css
import styles from "./css/detailimages.module.css";
const DetailImages = () =>{
  return (
    <section className={styles.detailimages}>
      <div className={styles.boxcontainer}>
        <div className={styles.box1}></div>
      </div>
      <div className={styles.boxcontainer}>
        <div className={styles.box2}></div>
      </div>
      <div className={styles.boxcontainer}>
        <div className={styles.box3}></div>
      </div>
    </section>
  );
}

export default DetailImages;
