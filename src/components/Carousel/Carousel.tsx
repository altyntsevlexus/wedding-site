import React from "react";
import styles from "./Carousel.module.css";

const grayShades = [
  "#4A4A4A", // Darker gray
  "#5C5C5C", // Dark gray
  "#6E6E6E", // Medium gray
  "#808080", // Light gray
  "#929292", // Lighter gray
];

// Create a seamless loop by duplicating the shades array
const allShades = [
  ...grayShades,
  ...grayShades,
  ...grayShades,
  ...grayShades,
  ...grayShades,
  ...grayShades,
]; // 6 copies for smoother looping

const Carousel: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {allShades.map((shade, index) => (
          <div
            key={`${shade}-${index}`}
            className={styles.carouselItem}
            style={{ backgroundColor: shade }}
          />
        ))}
      </div>
      <div className={styles.overlayText}>we are getting married</div>
    </div>
  );
};

export default Carousel;
