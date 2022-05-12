import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSproutDisc } from "react-icons/gi";
import styles from "./nav.module.css";
function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <i> <GiSproutDisc style={{color:"#06D6A0"}} /></i>
        </div>
        <div className={styles.menu__warper}>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.shop}>
          <i >
            <HiOutlineShoppingCart  />
            {/* <span className={styles.counter}>0</span> */} 
          </i>
          <span className={styles.basket} >basket</span>
        
        </div>
      </div>
    </nav>
  );
}

export default Nav;
