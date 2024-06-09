import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <nav className={styles.nav}>
        <a href="/">
          <img src="/assets/amazon_logo.png" width="100" alt="Amazon Logo" />
        </a>
        <div className={styles.navCountry}>
          <img
            src="/assets/location_icon.png"
            height="20"
            alt="Location Icon"
          />
          <div className={styles.navText}>
            <p>Deliver to</p>
            <h1>United Kingdom</h1>
          </div>
        </div>
        <div className={styles.navSearch}>
          <div className={styles.navSearchCategory}>
            <p>All</p>
            <img
              src="/assets/dropdown_icon.png"
              height="12"
              alt="Dropdown Icon"
            />
          </div>
          <input
            type="text"
            className={styles.navSearchInput}
            placeholder="Search Amazon"
          />
          <img
            src="/assets/search_icon.png"
            className={styles.navSearchIcon}
            alt="Search Icon"
          />
        </div>
        <div className={styles.navLanguage}>
          <img src="/assets/us_flag.png" width="25px" alt="US Flag" />
          <p>EN</p>
          <img
            src="/assets/dropdown_icon.png"
            width="8px"
            alt="Dropdown Icon"
          />
        </div>
        <div
          className={`${styles.navText} ${
            dropdownOpen ? styles.dropdownOpen : ""
          }`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {user ? (
            <div>
              <p>Hello, {user.username}</p>
              <h1>
                Account & Lists{" "}
                <img
                  src="/assets/dropdown_icon.png"
                  width="8px"
                  alt="Dropdown Icon"
                />
              </h1>
              {dropdownOpen && (
                <div className={styles.dropdownContainer}>
                  <ul className={styles.dropdown}>
                    <li>
                      <Link to="/orders">Your Orders</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Your Wish List</Link>
                    </li>
                    <li onClick={handleLogout} className={styles.logout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <p>
              Hello,{" "}
              <Link to="/login" className={styles.link}>
                Sign In
              </Link>
            </p>
          )}
        </div>
        <div className={styles.navText}>
          <p>Return</p>
          <h1>& Orders</h1>
        </div>
        <a href="/" className={styles.navCart}>
          <img src="/assets/cart_icon.png" width="35px" alt="Cart Icon" />
          <h4>Cart</h4>
        </a>
      </nav>
      <div className={styles.navBottom}>
        <div>
          <img src="/assets/menu_icon.png" width="25px" alt="Menu Icon" />
          <p>ALL</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </div>
  );
};

export default Header;
