import React from "react";
import styles from "./Carousel.module.css";

const photos = [
  "/assets/images/carousel/photo-1.jpg",
  "/assets/images/carousel/photo-2.jpg",
  "/assets/images/carousel/photo-3.jpg",
  "/assets/images/carousel/photo-4.jpg",
];

const Carousel: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {[...photos, ...photos, ...photos].map((photo, index) => (
            <img key={`${photo}-${index}`} src={photo} className={styles.carouselItem} alt={`our-photo-${index}`} />
          ))}
        </div>
      </div>
      <div className={styles.overlayText}>we are getting married</div>
    </div>
  );
};

export default Carousel;
