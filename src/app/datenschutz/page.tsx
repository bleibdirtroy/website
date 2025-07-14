import { Metadata } from "next";
import Footer from "../components/footer/footer";

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
    <div className="dottedBackground">
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Datenschutzerklärung
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Datenschutz auf einen Blick</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Allgemeine Hinweise</h3>
                  <p className="text-gray-700">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie meine Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                    Diese Website sammelt bewusst nur minimal notwendige Daten.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Datenerfassung auf dieser Website</h3>
                  <p className="text-gray-700">
                    Diese Website erfasst automatisch bestimmte Informationen durch Ihren Browser 
                    (Server-Log-Dateien) und nutzt ein selbst gehostetes Analytics-Tool (Rybbit) 
                    zur Analyse des Nutzerverhaltens. Es werden keine Cookies gesetzt und keine 
                    Daten an Drittanbieter weitergegeben.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Ihre Rechte</h3>
                  <p className="text-gray-700">
                    Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung 
                    der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit 
                    und Widerspruch gegen die Verarbeitung. Bei Fragen wenden Sie sich an die im 
                    Impressum angegebene Kontaktadresse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Verantwortliche Stelle</h2>
              <p className="text-gray-700 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  Adrian Germeck<br/>
                  Ahornstraße 5g<br/>
                  85614 Kirchseeon<br/>
                  Deutschland
                </p>
              </div>
              <p className="text-gray-700">
                Verantwortliche Stelle ist die natürliche Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Hosting und Server-Log-Dateien</h2>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">Oracle Cloud Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  Diese Website wird auf einem Virtual Private Server der Oracle Corporation 
                  gehostet. Der Server befindet sich im Oracle Rechenzentrum in Frankfurt, Deutschland.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    Oracle Corporation<br/>
                    500 Oracle Parkway<br/>
                    Redwood Shores, CA 94065, USA<br/>
                    <strong>Serverstandort:</strong> Frankfurt, Deutschland
                  </p>
                </div>
                
                <h3 className="text-lg font-medium mb-3 text-gray-800">Automatisch erfasste Daten</h3>
                <p className="text-gray-700 mb-3">
                  Bei jedem Aufruf dieser Website werden automatisch folgende Informationen erfasst:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                  <li>Name Ihres Access-Providers</li>
                </ul>
                <p className="text-gray-700">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br/>
                  <strong>Zweck:</strong> Gewährleistung eines störungsfreien Verbindungsaufbaus und einer ordnungsgemäßen Nutzung der Website<br/>
                  <strong>Speicherdauer:</strong> 7 Tage
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Web-Analytics mit Rybbit</h2>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">Rybbit Analytics (Selbst gehostet)</h3>
                <p className="text-gray-700 mb-4">
                  Diese Website nutzt Rybbit, ein datenschutzfreundliches, selbst gehostetes 
                  Web-Analytics-Tool. Rybbit läuft auf meinem eigenen Server (rybbit.696887.xyz) 
                  in Deutschland und gibt keine Daten an Dritte weiter.
                </p>
                
                <p className="text-gray-700 mb-3"><strong>Erfasste Daten:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                  <li>Anonymisierte IP-Adressen (die letzten 8 Bit werden entfernt)</li>
                  <li>Besuchte Seiten und Verweildauer</li>
                  <li>Referrer-URLs (von welcher Website Sie kamen)</li>
                  <li>Browser- und Geräteinformationen (anonymisiert)</li>
                  <li>Betriebssystem</li>
                  <li>Ungefähre geografische Lage (nur Land)</li>
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Datenschutz-Features von Rybbit:</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Keine Cookies erforderlich</li>
                    <li>Vollständige IP-Anonymisierung</li>
                    <li>Keine Personenverfolgung über mehrere Websites</li>
                    <li>100% DSGVO-konform</li>
                    <li>Alle Daten bleiben in Deutschland</li>
                  </ul>
                </div>
                
                <p className="text-gray-700">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br/>
                  <strong>Zweck:</strong> Analyse des Nutzerverhaltens zur Optimierung der Website<br/>
                  <strong>Speicherdauer:</strong> 24 Monate<br/>
                  <strong>Widerspruch:</strong> Sie können der Erfassung durch Rybbit widersprechen, indem Sie JavaScript in Ihrem Browser deaktivieren.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Kontaktaufnahme</h2>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">E-Mail-Kontakt</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie mir per E-Mail Fragen stellen, werden Ihre Angaben inklusive der von 
                  Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei mir gespeichert.
                </p>
                <p className="text-gray-700">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br/>
                  <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage<br/>
                  <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, maximal 2 Jahre<br/>
                  <strong>Datenweitergabe:</strong> Ihre Daten werden nicht an Dritte weitergegeben
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Ihre Rechte</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Auskunftsrecht</h3>
                  <p className="text-gray-700">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                    Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Recht auf Berichtigung, Löschung und Einschränkung</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, die Berichtigung unrichtiger personenbezogener Daten zu verlangen. 
                    Außerdem haben Sie das Recht auf Löschung Ihrer personenbezogenen Daten oder 
                    Einschränkung der Verarbeitung.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                    eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem 
                    gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Widerspruchsrecht</h3>
                  <p className="text-gray-700">
                    Werden Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß 
                    Art. 6 Abs. 1 lit. f DSGVO verarbeitet, haben Sie das Recht, gegen die Verarbeitung 
                    Ihrer personenbezogenen Daten Widerspruch einzulegen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-gray-700">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                    einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, 
                    ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Speicherdauer und Löschung</h2>
              <p className="text-gray-700 mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                wurde, verbleiben Ihre personenbezogenen Daten bei mir, bis der Zweck für die 
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                personenbezogenen Daten habe (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
              </p>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-800">Spezifische Speicherfristen</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Server-Log-Dateien:</strong> 7 Tage (automatische Löschung)</li>
                  <li><strong>Rybbit Analytics Daten:</strong> 24 Monate (automatische Löschung)</li>
                  <li><strong>E-Mail-Korrespondenz:</strong> Bis zur vollständigen Bearbeitung, maximal 2 Jahre</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. SSL-/TLS-Verschlüsselung</h2>
              <p className="text-gray-700 mb-4">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an mich als Seitenbetreiber 
                senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an 
                dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-gray-700">
                Wenn die SSL- oder TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an mich 
                übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Widerspruch gegen Werbe-E-Mails</h2>
              <p className="text-gray-700">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien 
                wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich 
                rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, 
                etwa durch Spam-E-Mails, vor.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Kontakt zum Datenschutzverantwortlichen</h2>
              <p className="text-gray-700 mb-4">
                Für Fragen zum Datenschutz, zur Ausübung Ihrer Rechte oder bei Beschwerden wenden Sie sich an:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  Adrian Germeck<br/>
                  Ahornstraße 5g<br/>
                  85614 Kirchseeon<br/>
                  Deutschland<br/>
                  E-Mail: Kontaktdaten entnehmen Sie bitte dem Impressum
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Stand dieser Datenschutzerklärung:</strong> {new Date().toLocaleDateString('de-DE')}
              </p>
              <p className="text-gray-700">
                Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen 
                in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die 
                neue Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;