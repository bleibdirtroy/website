const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projekte</h2>
      
      {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3+ columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        
        {/* Innovation & KI Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-700 text-center pb-3 border-b-2 border-gray-200">
            Innovation & KI
          </h3>
          
          {/* Allin.ai */}
          <div className="bg-yellow-200 text-yellow-900 p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-300 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Allin.ai - Poker KI System</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              IoT-Projekt an der TH Rosenheim: Spielkarten werden zwischen zwei Pokerspielern fotografiert und durch Microsoft Custom Vision erkannt. 
              Die KI berechnet kontinuierlich Gewinnwahrscheinlichkeiten und zeigt diese über eine Web-Oberfläche an.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Microsoft Azure</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Custom Vision</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">IoT</span>
            </div>
          </div>
          
          {/* AI-Integration Platform */}
          <div className="bg-blue-500 text-blue-900 p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-blue-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">AI-Integration Platform</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Integration von KI-Lösungen wie OpenAI in Entwicklungsworkflows bei TARA Systems. 
              Entwicklung von AI-Assistenten für Code-Reviews, automatisierte Dokumentation und intelligente Fehleranalyse.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">OpenAI</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Code Review</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Automation</span>
            </div>
          </div>
        </div>
        
        {/* Enterprise & Mobile Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-700 text-center pb-3 border-b-2 border-gray-200">
            Enterprise & Mobile
          </h3>
          
          {/* Scan2Cook */}
          <div className="bg-green-400 text-green-900 p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Scan2Cook - BSH Hausgeräte</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Industrieprojekt mit BSH: Smartphone-App nutzt OCR-Technologie zum Scannen von Zubereitungshinweisen 
              und konfiguriert automatisch Home Connect Backöfen.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">OCR</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Smart Kitchen</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Mobile App</span>
            </div>
          </div>
          
          {/* Flutter Enterprise App */}
          <div className="bg-orange-400 text-orange-900 p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-orange-500 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Flutter Enterprise App</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Skalierbare Flutter-Anwendung für große Nutzerbasis bei econix GmbH. 
              Plattformübergreifende App mit Real-time Synchronisation und offline-fähigen Features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Flutter</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Cross-Platform</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Enterprise</span>
            </div>
          </div>
        </div>
        
        {/* Data & Analytics Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-700 text-center pb-3 border-b-2 border-gray-200">
            Data & Analytics
          </h3>
          
          {/* Predictive Maintenance */}
          <div className="bg-purple-500 text-purple-900 p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-purple-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Predictive Maintenance System</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Masterprojekt: Analyse großer Datensätze zur Erkennung potenzieller Geräteausfälle in Rechenzentren. 
              Machine Learning-Clustering mit Python Keras für präzise Ausfallprognosen.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Python</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Keras</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">ML</span>
            </div>
          </div>
          
          {/* Mediaplayer Testsystem */}
          <div className="bg-pink-500 text-pink-900 p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-pink-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Mediaplayer Testsystem</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Masterarbeit: Entwicklung eines Testsystems für Mediaplayer zur Analyse des Verhaltens 
              verschiedener Player in kritischen Fehlerszenarien mit automatisierten Testläufen.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Testing</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Automation</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Performance</span>
            </div>
          </div>
        </div>
        
        {/* DevOps & IoT Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-700 text-center pb-3 border-b-2 border-gray-200">
            DevOps & IoT
          </h3>
          
          {/* CI/CD Pipeline */}
          <div className="bg-teal-500 text-teal-900 p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-teal-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">CI/CD Pipeline Migration</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Migration der Versionskontrolle und Implementierung moderner CI/CD Pipelines mit Jenkins und GitLab 
              bei TARA Systems für verbesserte Entwicklungseffizienz.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Jenkins</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">GitLab</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">DevOps</span>
            </div>
          </div>
          
          {/* IoT Management */}
          <div className="bg-indigo-500 text-indigo-900 p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-indigo-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">IoT Management Plattform</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Bachelorarbeit: Umfassende IoT Management Plattform für Sensorknoten und Edge Devices 
              mit zentraler Verwaltung, Real-time Monitoring und Analytics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">IoT</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Edge Computing</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Real-time</span>
            </div>
          </div>
        </div>
        
        {/* Enterprise Solutions Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-700 text-center pb-3 border-b-2 border-gray-200">
            Enterprise Solutions
          </h3>
          
          {/* Penetrationtest Tool */}
          <div className="bg-red-500 text-red-900 p-6 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-red-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Penetrationtest-Tool</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Management-Tool für Penetrationstests bei link protect GmbH. 
              Digitale Organisation und Erstellung von Dokumenten mit Markdown und LaTeX Integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Security</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">LaTeX</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Markdown</span>
            </div>
          </div>
          
          {/* Oracle APEX Tools */}
          <div className="bg-cyan-500 text-cyan-900 p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[200px] relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-600 transform rotate-45 -translate-x-1 -translate-y-1"></div>
            <h4 className="text-white font-bold text-lg mb-3">Oracle APEX Tools</h4>
            <p className="text-white opacity-90 text-sm mb-4 leading-relaxed">
              Audi AG Praktikum: Entwicklung mehrerer Oracle APEX Projekte für interne Prozesse. 
              Interaktive Dashboards und verbesserte Visualisierungsmasken mit modernen Web-Technologien.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Oracle APEX</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">SQL</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs border border-white/50">Dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;