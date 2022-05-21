import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSproutDisc } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import styles from "./css/nav.module.css";
import MobileNav from "./MobileNav";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
            <i className={styles.carticon}>
              <HiOutlineShoppingCart />
              {/* <span className={styles.counter}>0</span> */}
            </i>

            <span className={styles.basket}>Cart </span>
          </Link>
          <div className={styles.mobilemenu}>
            <i className={styles.menuicon}>
              <GrMenu onClick={() => setIsOpen(true)} />
            </i>
          </div>
        </div>
      </div>
      {isOpen && <MobileNav  setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Nav;
