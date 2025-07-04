import styles from "./datenschutz.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Adrian Germeck. Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/datenschutz',
  },
};

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
          
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
            gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu 
            weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im 
            Impressum angegebenen Adresse an uns wenden.
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
          
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Die Datenverarbeitung dient der Bereitstellung der Website und der Funktionalität 
            dieser Seite. Außerdem nutzen wir Ihre Daten zur Analyse des Nutzerverhaltens, um 
            unser Angebot zu verbessern.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Hosting</h2>
          <p>
            Diese Website (adriangermeck.de) wird bei folgendem Anbieter gehostet:
          </p>
          <h3>Oracle Cloud Infrastructure</h3>
          <p>
            Diese Website wird auf einem Virtual Private Server (VPS) der Oracle Corporation 
            im Rahmen des &quot;Always Free Tier&quot; gehostet. Der Server befindet sich im Oracle 
            Rechenzentrum in Frankfurt, Deutschland. Die personenbezogenen Daten, die auf 
            dieser Website erfasst werden, werden auf den Servern von Oracle gespeichert.
          </p>
          <p>
            Oracle Corporation<br/>
            500 Oracle Parkway<br/>
            Redwood Shores, CA 94065<br/>
            USA<br/>
            <strong>Serverstandort:</strong> Frankfurt, Deutschland
          </p>
          <p>
            Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
            Website generiert werden, handeln. Die Datenverarbeitung erfolgt auf Grundlage von 
            Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einer 
            zuverlässigen Darstellung unserer Website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Analyse-Tools</h2>
          <h3>Rybbit Analytics</h3>
          <p>
            Diese Website nutzt Rybbit, ein selbst gehostetes Analyse-Tool, um Besucherdaten 
            zu erfassen und zu analysieren. Rybbit wird auf unserem eigenen Server 
            (rybbit.696887.xyz) betrieben und speichert keine Daten bei Drittanbietern.
          </p>
          <p>
            Erfasste Daten umfassen:
          </p>
          <ul className={styles.list}>
            <li>Anonymisierte IP-Adressen</li>
            <li>Besuchte Seiten und Verweildauer</li>
            <li>Referrer-URLs</li>
            <li>Browser- und Geräteinformationen</li>
            <li>Betriebssystem</li>
          </ul>
          <p>
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
            aufgrund unseres berechtigten Interesses an der Analyse des Nutzerverhaltens 
            zur Optimierung unserer Website. Alle Daten werden ausschließlich auf unserem 
            eigenen Server in Deutschland gespeichert und nicht an Dritte weitergegeben.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Server-Log-Dateien</h2>
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
          <h2>6. Ihre Rechte</h2>
          <h3>Auskunftsrecht</h3>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
          </p>
          
          <h3>Recht auf Berichtigung, Löschung und Einschränkung</h3>
          <p>
            Sie haben das Recht, die Berichtigung unrichtiger personenbezogener Daten zu verlangen. 
            Außerdem haben Sie das Recht auf Löschung Ihrer personenbezogenen Daten oder 
            Einschränkung der Verarbeitung.
          </p>
          
          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
            eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
            gängigen, maschinenlesbaren Format aushändigen zu lassen.
          </p>
          
          <h3>Widerspruchsrecht</h3>
          <p>
            Werden Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß 
            Art. 6 Abs. 1 lit. f DSGVO verarbeitet, haben Sie das Recht, gegen die Verarbeitung 
            Ihrer personenbezogenen Daten Widerspruch einzulegen.
          </p>
          
          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
            einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
            ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Speicherdauer</h2>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
            oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
            sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
            personenbezogenen Daten haben.
          </p>
          <h3>Spezifische Speicherfristen</h3>
          <ul className={styles.list}>
            <li><strong>Server-Log-Dateien:</strong> 7 Tage</li>
            <li><strong>Rybbit Analytics:</strong> 2 Jahre</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
            daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an 
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- oder TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns 
            übermitteln, nicht von Dritten mitgelesen werden.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Kontakt und Verantwortlichkeit</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Adrian Germeck<br/>
            Kontaktdaten entnehmen Sie bitte dem Impressum dieser Website.
          </p>
          <p>
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;