import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Adrian Germeck</h3>
            <p>M.Sc. Software Engineer</p>
          </div>
          
          <div className={styles.section}>
            <h4>Kontakt</h4>
            <p>adrian.germeck@example.com</p>
            <p>+49 (0) 123 456789</p>
          </div>
          
          <div className={styles.section}>
            <h4>Links</h4>
            <div className={styles.links}>
              <Link href="/impressum" className={styles.link}>Impressum</Link>
              <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Adrian Germeck. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;