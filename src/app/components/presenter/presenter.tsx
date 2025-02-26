import Image from "next/image";
import styles from "./presenter.module.css";

const Presenter = () => {
  return (
    <div className={styles.dottedBackground}>
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
    </div>
  );
};

export default Presenter;
