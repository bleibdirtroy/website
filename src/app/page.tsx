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
          <h1 className="text-3xl font-bold text-center mb-8">Über mich</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Als M.Sc. Software Engineer bringe ich Leidenschaft für moderne Webentwicklung mit. 
              Spezialisiert auf React, Next.js und TypeScript entwickle ich innovative Lösungen 
              für komplexe Herausforderungen. Entdecken Sie meine Projekte und Fähigkeiten.
            </p>
          </div>
        </section>

        <Projects />
      </div>
      <Footer />
    </>
  );
}
