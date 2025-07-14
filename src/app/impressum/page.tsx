import styles from "./impressum.module.css";
import { Metadata } from "next";
import EmailReveal from "../components/email-reveal/email-reveal";
import Footer from "../components/footer/footer";

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
    <div className="dottedBackground">
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impressum
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white/60 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Angaben gemäß § 5 TMG</h2>
                <p className="text-gray-700">
                  Adrian Germeck<br />
                  Ahornstraße 5g<br />
                  85614 Kirchseeon<br />
                  Deutschland
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Kontakt</h2>
                <p className="text-gray-700">
                  E-Mail: <EmailReveal /><br />
                  Website: adriangermeck.de
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Berufsbezeichnung</h2>
                <p className="text-gray-700">
                  Software Engineer (M.Sc.)<br />
                  Verliehen in: Deutschland
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Redaktionell verantwortlich</h2>
                <p className="text-gray-700">
                  Adrian Germeck<br />
                  Ahornstraße 5g<br />
                  85614 Kirchseeon<br />
                  Deutschland
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Haftungsausschluss</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-medium text-gray-800">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als 
                  Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich.
                </p>
                <p>
                  Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, 
                  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                  Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Haftung für Links</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                  Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                  Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige 
                  Links umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Urheberrecht</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden 
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Datenschutz</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website verwendet keine Cookies 
                  und sammelt keine personenbezogenen Daten. Es werden keine Tracking-Tools oder Analytics-Dienste 
                  eingesetzt. Ihre Privatsphäre wird respektiert.
                </p>
                <p>
                  Bei der Kontaktaufnahme per E-Mail werden Ihre Angaben zur Bearbeitung der Anfrage und für den 
                  Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hosting</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Diese Website wird extern gehostet. Der Hoster erhebt in sogenannten Logfiles folgende Daten, 
                  die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten Website (Referrer), 
                  die besuchten Unterseiten, das Datum und die Uhrzeit der Anfrage, die übertragene Datenmenge, 
                  der Zugriffsstatus und verwendete Webbrowser.
                </p>
                <p>
                  Dies ist erforderlich, um die Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. 
                  Dies entspricht meinem berechtigten Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;