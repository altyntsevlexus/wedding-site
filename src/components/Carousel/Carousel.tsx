import React, { useEffect, useRef } from "react";
import styles from "./Carousel.module.css";

const grayShades = [
  "#4A4A4A", // Darker gray
  "#5C5C5C", // Dark gray
  "#6E6E6E", // Medium gray
  "#808080", // Light gray
  "#929292", // Lighter gray
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let currentScroll = 0;

    const scroll = () => {
      currentScroll += 0.3;

      if (currentScroll >= carousel.scrollWidth / 2) {
        currentScroll = 0;
      }

      if (carousel) {
        carousel.scrollLeft = currentScroll;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {[...grayShades, ...grayShades].map((shade, index) => (
          <div key={`${shade}-${index}`} className={styles.carouselItem} style={{ backgroundColor: shade }} />
        ))}
      </div>
      <div className={styles.overlayText}>we are getting married</div>
    </div>
  );
};

export default Carousel;
