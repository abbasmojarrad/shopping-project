import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//css
import styles from "./css/nav.module.css";
//icon
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiSproutDisc } from "react-icons/gi";
import { GrMenu } from "react-icons/gr";
//component
import MobileNav from "./MobileNav";

//context
import { CartContext } from "../context/CartContextProvider";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state] = useContext(CartContext);
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

              {state.itemCount > 0 && (
                <span className={styles.counter}>{state.itemCount}</span>
              )}
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
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Nav;
