"use client";

import Hero from "./components/presenter/hero";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="dottedBackground">
        <div id="home">
          <Hero></Hero>
        </div>
        
        {/* Über mich Section */}
        <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Über mich</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Hier können Sie Informationen über sich selbst hinzufügen. Beschreiben Sie Ihren Hintergrund, 
              Ihre Erfahrungen und was Sie antreibt.
            </p>
          </div>
        </section>

        <Projects />
      </div>
      <Footer />
    </>
  );
}
