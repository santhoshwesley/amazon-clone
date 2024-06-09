import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ title, items, className }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.boxRow}>
        {items.map((item, index) => (
          <div key={index} className={styles.boxCol}>
            <h3>{item.title}</h3>
            <img src={item.imgSrc} alt={item.title} />
            <a href={item.link}>Shop more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Card;
