import { FC } from 'react';
import { Calendar, MapPin, Building, GraduationCap, Code, Users } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  type: 'work' | 'education' | 'project';
  isLeft?: boolean;
}

const TimelineItem: FC<TimelineItemProps> = ({ 
  date, 
  title, 
  company, 
  location, 
  description, 
  type, 
  isLeft = false 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'work':
        return <Building className="w-6 h-6 text-white" />;
      case 'education':
        return <GraduationCap className="w-6 h-6 text-white" />;
      case 'project':
        return <Code className="w-6 h-6 text-white" />;
      default:
        return <Users className="w-6 h-6 text-white" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'project':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative flex items-center mb-8 md:mb-12">
      {/* Content Left */}
      <div className={`flex-1 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'} ${isLeft ? 'md:order-1' : 'md:order-3'} ml-8 md:ml-0`}>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
          <div className="flex items-center mb-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
            {location && (
              <>
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                <span>{location}</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          {company && (
            <p className="text-lg font-semibold text-blue-600 mb-3">{company}</p>
          )}
          <div 
            className="text-gray-600 prose prose-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>

      {/* Icon - Always centered */}
      <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 md:order-2 flex items-center justify-center z-20">
        <div className={`w-12 h-12 rounded-full ${getTypeColor()} flex items-center justify-center shadow-lg`}>
          {getIcon()}
        </div>
      </div>

      {/* Spacer for opposite side on desktop */}
      <div className={`flex-1 hidden md:block ${isLeft ? 'md:order-3' : 'md:order-1'}`}></div>
    </div>
  );
};

export default function Lebenslauf() {
  const timelineData = [
    {
      date: "09.2024 - heute",
      title: "Software Engineer",
      company: "TARA Systems GmbH",
      location: "München",
      description: "Verantwortlich für die Qualitätssicherung mithilfe von Jenkins und GitLab Pipelines, um eine zuverlässige und effiziente Softwareentwicklung zu gewährleisten. Durch die Integration von künstlicher Intelligenz wie OpenAI in Abläufe, ermögliche ich es meinen Kollegen Verständnis und Effizienz zu steigern. Mit einem kleinen Team entwickle ich eine Flutter-Anwendung mit verschiedenen plattformspezifischen Zugriffen.",
      type: "work" as const
    },
    {
      date: "11.2020 - 08.2024",
      title: "Freelancer",
      company: "",
      location: "",
      description: `Als Software-Entwickler und DevOps Spezialist tätig für:
      <ul class="mt-2">
        <li><strong>Link Protect GmbH:</strong> 08.2021 - 08.2024: Full Stack Anwendung, Agil und Kundennah</li>
        <li><strong>TARA Systems GmbH:</strong> 09.2022 - 08.2024: Umstieg der Versionskontrolle, Planung und Qualitätssicherung</li>
        <li><strong>econix GmbH:</strong> 11.2020 - 04.2021 und 08.2023 - 08.2024: Mobile Anwendung für große Nutzerzahl</li>
      </ul>
      <p class="mt-2">Zeitmanagement, Finanzplanung und direkter Kundenaustausch standen neben der Arbeit an den Projekten im Mittelpunkt.</p>`,
      type: "work" as const
    },
    {
      date: "03.2021 - 03.2024",
      title: "Master of Science",
      company: "Hochschule München",
      location: "Software Engineering",
      description: `<ul>
        <li><strong>Abschlussnote:</strong> 1,4</li>
        <li><strong>Masterarbeitsnote:</strong> 1,0</li>
        <li><strong>Masterarbeitsthema:</strong> Entwicklung eines Testsystems für Mediaplayer: Analyse und Vergleich des Verhaltens von Playern in verschiedenen Fehlerszenarien</li>
        <li><strong>Vorlesungen:</strong> Datenanalyse, Deep Learning, Cloud Computing, Softwaresicherheit, Qualitätsmanagement, Advanced Software Engineering, Quantensoftwareentwicklung</li>
      </ul>`,
      type: "education" as const
    },
    {
      date: "10.2019 - 09.2020",
      title: "Werkstudent",
      company: "link protect GmbH",
      location: "Raum München",
      description: "Entwicklung eines Penetrationtest-Management-Tools, welches zum digitalen Ordnen und Erstellen von Penetrationtest-Dokumenten genutzt wird. Durch Markdown und Latex können benutzerfreundlich Berichte erstellt werden.",
      type: "work" as const
    },
    {
      date: "09.2018 - 03.2019",
      title: "Praktikant",
      company: "Audi AG",
      location: "Baden-Württemberg",
      description: "Die agile Softwareentwicklung mit Scrum umfasste die selbstständige Planung und Umsetzung mehrerer Softwareprojekte mithilfe von Oracle Application Express. Dabei wurden Kenntnisse in SQL, PL/SQL, JavaScript, HTML und CSS vertieft, Anforderungen analysiert, wöchentliche Termine mit Fachbereichen abgestimmt, die Projektdokumentation überwacht und verwaltet sowie der Rollout einer neuen Visualisierungsmaske unterstützt.",
      type: "work" as const
    },
    {
      date: "11.2017 - 08.2018",
      title: "Werkstudent",
      company: "Extedo GmbH",
      location: "Raum München",
      description: "Entwicklung diverser Java-Applikationen zur Automatisierung von Prozessen in Confluence, einschließlich eines Blueprints für Change Control-Seiten und eines Tools für Customer Satisfaction Survey Emails. Zusätzlich wurden Hilfsprogramme für die Automatisierung von Reports erstellt.",
      type: "work" as const
    },
    {
      date: "03.2017 - 03.2021",
      title: "Bachelor of Science",
      company: "TH Rosenheim",
      location: "Software Engineering",
      description: `<ul>
        <li><strong>Abschlussnote:</strong> 2,0</li>
        <li><strong>Bachelorarbeitsnote:</strong> 1,3</li>
        <li><strong>Bachelorarbeitsthema:</strong> Konzeption und Entwicklung einer Internet-of-Things (IoT) Management Plattform für Sensorknoten und intelligente Edge Devices</li>
      </ul>`,
      type: "education" as const
    },
    {
      date: "Masterstudium",
      title: "Datenaufbereitung und Clustering",
      company: "",
      location: "Hochschule München",
      description: "Um potenzielle Ausfälle bestimmter Geräte in einem Rechenzentrum zu erkennen, wurde eine Analyse großer Datensätze durchgeführt. Im ersten Schritt wurden die Daten aufbereitet und bereinigt. Anschließend wurden die Werte normalisiert und mithilfe von Python Keras gelabelt. Dadurch konnten Prognosen über mögliche zukünftige Ausfälle erstellt und visualisiert werden.",
      type: "project" as const
    },
    {
      date: "Bachelorstudium",
      title: "Scan2Cook",
      company: "",
      location: "TH Rosenheim",
      description: "Scan2Cook ist eine Smartphone-App, die dem Nutzer die Arbeit in der Küche erleichtert. Mithilfe von Optischer Zeichenerkennung (OCR) können Sie beispielsweise den Zubereitungshinweis einer Fertigpizza scannen, um Ihren Home Connect Backofen automatisch auf den Zubereitungsprozess (Temperatur, Modus, Zeit) einzustellen. <em>Projekt mit der BSH Hausgeräte GmbH</em>",
      type: "project" as const
    },
    {
      date: "Bachelorstudium",
      title: "Allin.ai",
      company: "",
      location: "TH Rosenheim",
      description: "Spielkarten werden innerhalb eines Pokerspiels zwischen zwei Spielern fotografiert und von einer Microsoft KI-Schnittstelle (Custom Vision) erkannt. Im Laufe des Spiels werden die Spielkarten immer wieder fotografiert, mithilfe der Microsoft Azure Cloud gelabelt und die jeweilige Gewinnwahrscheinlichkeit für die Spieler berechnet. Diese werden auf einer Weboberfläche angezeigt.",
      type: "project" as const
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              Mein Lebenslauf
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Ein Überblick über meinen beruflichen Werdegang, meine Ausbildung und ausgewählte Projekte
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Berufserfahrung</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Ausbildung</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Projekte</span>
            </div>
          </div>

          {/* Timeline Line */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 z-10"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  {...item}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Kernkompetenzen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "TypeScript", level: 4 },
                { name: "Flutter", level: 5 },
                { name: "Docker", level: 4 },
                { name: "Linux", level: 5 },
                { name: "KI/AI", level: 4 },
                { name: "SQL", level: 4 },
                { name: "Jenkins", level: 4 },
                { name: "Python", level: 3 }
              ].map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 rounded-lg p-4 hover:bg-blue-50 transition-colors duration-300">
                    <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                            i < skill.level 
                              ? 'bg-blue-500 group-hover:bg-blue-600' 
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}