import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollIndicator(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroSection}>
      <Image
        className={styles.image}
        src="/me.jpg"
        alt="Adrian Germeck"
        width={500}
        height={500}
        quality={85}
        placeholder="blur"
        blurDataURL="/me_blur.webp"
      />
      <div className={styles.textContainer}>
        <h1>Adrian</h1>
        <h1>Germeck</h1>
        <h2>M.Sc. Software Engineer</h2>
      </div>
      {showScrollIndicator && (
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
          <span>Scroll down</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
