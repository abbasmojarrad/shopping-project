import React from "react";
import styles from "./hero.module.css";
import shopImg from "../assets/img/shop.png";
import bubble from "../assets/img/bubble.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import Scrolldown from "./Scroll";
function Hero() {
 
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <img className={styles.heroimage} src={shopImg} alt="shopping img" />
        <img className={styles.bubble} src={bubble} alt="bubble img" />
      </div>

      <div className={styles.right}>
        <h2>
          <span className={styles.spanshop}>Shopping</span> <br /> online now
        </h2>
        <Button />
        <button className={styles.signupbtn}>
          <Link to="/signup">
            <span className={styles.text}>Join Us</span>
            <span>Sign Up</span>
          </Link>
        </button>
      </div>
      <div className={styles.scrolldown}>
        <Scrolldown  />
      </div>
    </div>
  );
}

export default Hero;
