import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      const imgs = document.querySelectorAll(`.${styles.slider} img`);
      imgs.forEach((img, index) => {
        img.style.display = index === currentIndex ? "block" : "none";
      });
    };
    changeSlide();
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.control_prev} onClick={prevSlide}>
        ❮
      </div>
      <div className={styles.control_next} onClick={nextSlide}>
        ❯
      </div>
      <ul>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Hero;
