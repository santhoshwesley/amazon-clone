import React, { useRef, useEffect } from "react";
import styles from "./ProductSlider.module.css";

const ProductSlider = ({ title, products }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    };
    scrollContainer.addEventListener("wheel", handleWheel);
    return () => scrollContainer.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={styles.productSliderPrice}>
      <h2>{title}</h2>
      <div className={styles.products} ref={scrollContainerRef}>
        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <div className={styles.productImgContainer}>
              <img src={product.imgSrc} alt={`Product ${index}`} />
            </div>
            {product.offer && product.offerType && (
              <div className={styles.productOffer}>
                <p>{product.offer}</p>
                <span>{product.offerType}</span>
              </div>
            )}
            {product.price && product.listPrice && (
              <p className={styles.productPrice}>
                $ <span>{product.price}</span> List Price: ${product.listPrice}
              </p>
            )}
            <h4>{product.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
