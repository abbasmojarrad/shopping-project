import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSproutDisc } from "react-icons/gi";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";
function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <i>
              <GiSproutDisc style={{ color: "#06D6A0" }} />
            </i>
          </Link>
        </div>
        <div className={styles.menu__warper}>
          <ul className={styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/product">Shop</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <div className={styles.shop}>
        <Link to="/cart">
             <i>
            <HiOutlineShoppingCart />
            {/* <span className={styles.counter}>0</span> */}
          </i>
            
          <span className={styles.basket}>Cart </span>
        </Link>
       
        </div>
      </div>
    </nav>
  );
}

export default Nav;
