const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-primary-900">Meine Projekte</h2>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto">
          Eine Auswahl meiner wichtigsten Projekte aus den Bereichen KI, Enterprise-Entwicklung, 
          IoT und Data Analytics
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Featured Projects - Highlighted Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary-800">
            ⭐ Highlight-Projekte
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Allin.ai - Featured */}
            <div className="group bg-gradient-to-br from-primary-700 to-primary-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Allin.ai - Poker KI System</h4>
                  <span className="text-primary-300 text-sm">TH Rosenheim • IoT & Machine Learning</span>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Innovatives IoT-System mit Computer Vision: Spielkarten werden fotografiert, durch Microsoft Custom Vision erkannt 
                und KI berechnet kontinuierlich Gewinnwahrscheinlichkeiten für Pokerspieler in Echtzeit.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Microsoft Azure</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Custom Vision</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">IoT</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Real-time AI</span>
              </div>
              <div className="text-white/80 text-sm">
                📊 Echtzeitanalyse • 🎯 Computer Vision • ☁️ Cloud Integration
              </div>
            </div>

            {/* Scan2Cook - Featured */}
            <div className="group bg-gradient-to-br from-accent-600 to-accent-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Scan2Cook - BSH Hausgeräte</h4>
                  <span className="text-accent-200 text-sm">Industrieprojekt • Smart Kitchen</span>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Praxisnahe Mobile App für BSH: OCR-Technologie scannt Zubereitungshinweise auf Verpackungen 
                und konfiguriert automatisch Home Connect Backöfen - Smart Kitchen der Zukunft.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">OCR</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Smart Kitchen</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Mobile App</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">IoT Integration</span>
              </div>
              <div className="text-white/80 text-sm">
                🏭 Industriepartner • 📸 Text Recognition • 🏠 Home Automation
              </div>
            </div>
          </div>
        </div>

        {/* Current Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary-800">
            💼 Aktuelle Tätigkeit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* AI Integration */}
            <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary-600">🧠</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-900">KI-Integration bei TARA Systems</h4>
                  <span className="text-primary-600 text-sm font-medium">Software Engineer</span>
                </div>
              </div>
              <p className="text-primary-600 mb-4">
                Integration von OpenAI und anderen KI-Tools in Entwicklungsworkflows. Automatisierte Code-Reviews, 
                intelligente Dokumentation und KI-gestützte Fehleranalyse.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-sm">OpenAI API</span>
                <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-sm">DevOps</span>
                <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-sm">Automation</span>
              </div>
            </div>

            {/* Flutter Development */}
            <div className="bg-white border-l-4 border-accent-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <span className="text-accent-600">📱</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-900">Flutter Enterprise App</h4>
                  <span className="text-accent-600 text-sm font-medium">Team Lead & Developer</span>
                </div>
              </div>
              <p className="text-primary-600 mb-4">
                Leitung eines kleinen Teams zur Entwicklung einer skalierbaren Flutter-Anwendung 
                mit Real-time Features und offline-fähigen Komponenten.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent-50 text-accent-700 px-2 py-1 rounded text-sm">Flutter</span>
                <span className="bg-accent-50 text-accent-700 px-2 py-1 rounded text-sm">Cross-Platform</span>
                <span className="bg-accent-50 text-accent-700 px-2 py-1 rounded text-sm">Team Lead</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary-800">
            🎓 Akademische Projekte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Predictive Maintenance */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-600">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-600 text-sm">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">Predictive Maintenance</h4>
              </div>
              <p className="text-sm text-primary-600 mb-2 font-medium">Masterprojekt</p>
              <p className="text-primary-600 text-sm mb-4">
                Machine Learning System zur Vorhersage von Geräteausfällen in Rechenzentren 
                durch Analyse großer Datensätze mit Python und Keras.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Keras</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">ML</span>
              </div>
            </div>

            {/* Mediaplayer Testing */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-accent-600 text-sm">🧪</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">Mediaplayer Testsystem</h4>
              </div>
              <p className="text-sm text-accent-600 mb-2 font-medium">Masterarbeit</p>
              <p className="text-primary-600 text-sm mb-4">
                Automatisiertes Testsystem zur Analyse des Verhaltens verschiedener 
                Mediaplayer in kritischen Fehlerszenarien.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Testing</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Automation</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Performance</span>
              </div>
            </div>

            {/* IoT Management */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-600 text-sm">🌐</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">IoT Management Platform</h4>
              </div>
              <p className="text-sm text-primary-600 mb-2 font-medium">Bachelorarbeit</p>
              <p className="text-primary-600 text-sm mb-4">
                Zentrale Verwaltungsplattform für IoT-Geräte mit Real-time Monitoring, 
                Edge Computing und Analytics-Dashboard.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">IoT</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Edge Computing</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary-800">
            🏢 Branchenerfahrung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CI/CD Migration */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary-600">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-600 text-sm">🔄</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">CI/CD Pipeline Migration</h4>
              </div>
              <p className="text-sm text-primary-600 mb-2 font-medium">TARA Systems</p>
              <p className="text-primary-600 text-sm mb-4">
                Modernisierung der Versionskontrolle und Implementierung effizienter 
                CI/CD Pipelines mit Jenkins und GitLab.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Jenkins</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">GitLab</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">DevOps</span>
              </div>
            </div>

            {/* Security Tools */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-error-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-error-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-error-600 text-sm">🔒</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">Penetrationtest-Tool</h4>
              </div>
              <p className="text-sm text-error-600 mb-2 font-medium">link protect GmbH</p>
              <p className="text-primary-600 text-sm mb-4">
                Management-Tool für Penetrationstests mit digitaler Organisation 
                und automatisierter Dokumentenerstellung.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Security</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">LaTeX</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Automation</span>
              </div>
            </div>

            {/* Oracle APEX */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-accent-600 text-sm">📈</span>
                </div>
                <h4 className="text-lg font-semibold text-primary-900">Oracle APEX Dashboards</h4>
              </div>
              <p className="text-sm text-accent-600 mb-2 font-medium">Audi AG Praktikum</p>
              <p className="text-primary-600 text-sm mb-4">
                Entwicklung interaktiver Dashboards und Visualisierungstools 
                für interne Unternehmensprozesse.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Oracle APEX</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">SQL</span>
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">Dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
