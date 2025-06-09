import styles from "./datenschutz.module.css";

const Datenschutz = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        
        <section className={styles.section}>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Datenerfassung auf dieser Website</h2>
          <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          
          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
            Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
            durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
            Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
            Website generiert werden, handeln.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in 
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
            Dies sind:
          </p>
          <ul className={styles.list}>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;