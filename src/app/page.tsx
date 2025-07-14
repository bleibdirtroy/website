import Hero from "./components/presenter/hero";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adrian Germeck",
            "jobTitle": "Software Engineer",
            "description": "M.Sc. Software Engineer spezialisiert auf moderne Webentwicklung",
            "url": "https://adrian-germeck.com",
            "knowsAbout": [
              "React", "Next.js", "TypeScript", "JavaScript", "Node.js"
            ]
          })
        }}
      />
      <div className="dottedBackground">
        <div id="home">
          <Hero></Hero>
        </div>
        
        {/* Über mich Section */}
        <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Über mich</h1>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
                Als M.Sc. Software Engineer verfüge ich über umfangreiche Erfahrungen in der Entwicklung, 
                Konzeption, Planung und Wartung von Software - sowohl in großen als auch in kleineren Unternehmen. 
                Durch meine schnelle Einarbeitung in interne Softwarestrukturen kann ich mit meinem Wissen 
                und meinen Erfahrungen schnell bei kritischen Themen mitreden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Derzeit arbeite ich bei <strong>TARA Systems GmbH</strong> als Software Engineer, wo ich 
                mich auf Qualitätssicherung mit Jenkins und GitLab Pipelines fokussiere und durch die 
                Integration von KI-Technologien wie OpenAI die Effizienz meines Teams steigere. 
                Parallel entwickle ich mit einem kleinen Team eine Flutter-Anwendung.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durch mein hobbymäßiges Programmieren und Self-Hosting lerne ich kontinuierlich moderne 
                Technologien kennen, um neue und bestehende Prozesse zu optimieren. Meine Leidenschaft 
                gilt insbesondere TypeScript, Flutter, Docker und der agilen Softwareentwicklung.
              </p>
            </div>
          </div>
        </section>

        <Projects />
      </div>
      <Footer />
    </>
  );
}
