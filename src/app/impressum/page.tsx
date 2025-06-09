import styles from "./impressum.module.css";
import { Metadata } from "next";
import EmailReveal from "../components/email-reveal/email-reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Adrian Germeck, M.Sc. Software Engineer.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/impressum',
  },
};

const Impressum = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Impressum</h1>
        
        <section className={styles.section}>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Adrian Germeck<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: <EmailReveal /><br />
            Website: www.adrian-germeck.com
          </p>
        </section>

        <section className={styles.section}>
          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Software Engineer (M.Sc.)<br />
            Verliehen in: Deutschland
          </p>
        </section>

        <section className={styles.section}>
          <h2>Redaktionell verantwortlich</h2>
          <p>
            Adrian Germeck<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section className={styles.section}>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
            verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
            Links umgehend entfernen.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
            Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden 
            Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;