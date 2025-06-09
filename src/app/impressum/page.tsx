import styles from "./impressum.module.css";

const Impressum = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Impressum</h1>
        
        <section className={styles.section}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Adrian Germeck<br />
            M.Sc. Software Engineer<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: adrian.germeck@example.com
          </p>
        </section>

        <section className={styles.section}>
          <h2>Redaktionell verantwortlich</h2>
          <p>
            Adrian Germeck<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
        </section>

        <section className={styles.section}>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;