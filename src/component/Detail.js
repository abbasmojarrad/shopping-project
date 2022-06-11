import React from "react";
//css
import styles from "./css/detail.module.css";
//component
import Card from "./DetailCard";
const Detail = () => {
  return (
    <section className={styles.detailscard}>
      <h2 className={styles.detailsheading}>How Purse Works</h2>
      <div className={styles.cards}>
        <Card
          style={styles.card}
          headingNumber="1"
          heading="Find Your Fave"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis
            deleniti molestiae, illum quas voluptatibus."
        />
        <Card
          style={styles.card}
          headingNumber="2"
          heading="Own The Moment"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis
            deleniti molestiae, illum quas voluptatibus."
        />
        <Card
          style={styles.card}
          headingNumber="3"
          heading="Decide Your Way"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis
            deleniti molestiae, illum quas voluptatibus."
        />
        <Card
          style={styles.card}
          headingNumber="4"
          heading="Receive Your Purse"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis
            deleniti molestiae, illum quas voluptatibus."
        />
      </div>
    </section>
  );
}

export default Detail;
