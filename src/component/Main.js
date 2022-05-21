import React from "react";
import styles from "./css/main.module.css";
import Hero from "./Hero";
import DetailCards from "./Detail";
import DetailImages from "./DetailImages";
import MiniSlider from "./MiniSlider";
function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <MiniSlider />
        <DetailImages />
        <DetailCards />
      </div>
    </main>
  );
}

export default Main;
