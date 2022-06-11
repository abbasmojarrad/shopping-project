import React from "react";
import { Link } from "react-router-dom";
//css
import styles from "./css/mobilenav.module.css";

const MobileNav = ({ setIsOpen }) =>{
  return (
    <div className={styles.mobilemenu__container}>
      <div onClick={() => setIsOpen(false)}>close menu</div>
      <ul className={styles.mobilemenu}>
        <li>
          <Link onClick={() => setIsOpen(false)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} to="/product">
            Shop
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
