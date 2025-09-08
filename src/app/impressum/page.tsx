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
      <div className="min-h-screen py-16 px-4 md:py-20 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-8 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-primary-900 md:text-4xl md:mb-12">
              Impressum
            </h1>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-accent-500 md:p-6">
                <h2 className="text-lg font-semibold mb-3 text-primary-900 md:text-xl md:mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-primary-700 leading-relaxed">
                  Adrian Germeck<br />
                  Ahornstraße 5g<br />
                  85614 Kirchseeon<br />
                  Deutschland
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-accent-500 md:p-6">
                <h2 className="text-lg font-semibold mb-3 text-primary-900 md:text-xl md:mb-4">Kontakt</h2>
                <p className="text-primary-700 leading-relaxed">
                  E-Mail: <EmailReveal /><br />
                  Website: adriangermeck.de
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-accent-500 md:p-6">
                <h2 className="text-lg font-semibold mb-3 text-primary-900 md:text-xl md:mb-4">Berufsbezeichnung</h2>
                <p className="text-primary-700 leading-relaxed">
                  Software Engineer (M.Sc.)<br />
                  Verliehen in: Deutschland
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-accent-500 md:p-6">
                <h2 className="text-lg font-semibold mb-3 text-primary-900 md:text-xl md:mb-4">Redaktionell verantwortlich</h2>
                <p className="text-primary-700 leading-relaxed">
                  Adrian Germeck<br />
                  Ahornstraße 5g<br />
                  85614 Kirchseeon<br />
                  Deutschland
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 space-y-6 md:p-8 md:space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-900 md:text-2xl">Haftungsausschluss</h2>
              <div className="space-y-4 text-primary-700">
                <h3 className="text-base font-medium text-primary-800 md:text-lg">Haftung für Inhalte</h3>
                <p className="leading-relaxed">
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als 
                  Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich.
                </p>
                <p className="leading-relaxed">
                  Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, 
                  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                  Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-900 md:text-2xl">Haftung für Links</h2>
              <div className="space-y-4 text-primary-700">
                <p className="leading-relaxed">
                  Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                  Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="leading-relaxed">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                  Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige 
                  Links umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-900 md:text-2xl">Urheberrecht</h2>
              <div className="space-y-4 text-primary-700">
                <p className="leading-relaxed">
                  Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="leading-relaxed">
                  Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden 
                  Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-900 md:text-2xl">Datenschutz</h2>
              <div className="space-y-4 text-primary-700">
                <p className="leading-relaxed">
                  Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website verwendet keine Cookies 
                  und sammelt keine personenbezogenen Daten. Es werden keine Tracking-Tools oder Analytics-Dienste 
                  eingesetzt. Ihre Privatsphäre wird respektiert.
                </p>
                <p className="leading-relaxed">
                  Bei der Kontaktaufnahme per E-Mail werden Ihre Angaben zur Bearbeitung der Anfrage und für den 
                  Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary-900 md:text-2xl">Hosting</h2>
              <div className="space-y-4 text-primary-700">
                <p className="leading-relaxed">
                  Diese Website wird extern gehostet. Der Hoster erhebt in sogenannten Logfiles folgende Daten, 
                  die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten Website (Referrer), 
                  die besuchten Unterseiten, das Datum und die Uhrzeit der Anfrage, die übertragene Datenmenge, 
                  der Zugriffsstatus und verwendete Webbrowser.
                </p>
                <p className="leading-relaxed">
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