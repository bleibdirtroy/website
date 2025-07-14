import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projekte</h2>
      <div className={styles.kanbanBoard}>
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>Innovation</h3>
          <div className={`${styles.stickyNote} ${styles.yellow}`}>
            <h4 style={{ color: '#ffffff', fontWeight: '700' }}>Allin.ai - Poker KI System</h4>
            <p style={{ color: '#ffffff', opacity: 1, fontWeight: '500' }}>
              IoT-Projekt an der TH Rosenheim: Spielkarten werden zwischen zwei Pokerspielern fotografiert und durch Microsoft Custom Vision erkannt. 
              Die KI berechnet kontinuierlich Gewinnwahrscheinlichkeiten und zeigt diese über eine Web-Oberfläche an. 
              Ein innovatives Beispiel für Computer Vision in Gaming-Anwendungen.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Microsoft Azure</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Custom Vision</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>IoT</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Web Interface</span>
            </div>
          </div>
        </div>
        
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>Praxis</h3>
          <div className={`${styles.stickyNote} ${styles.green}`}>
            <h4 style={{ color: '#ffffff', fontWeight: '700' }}>Scan2Cook - BSH Hausgeräte GmbH</h4>
            <p style={{ color: '#ffffff', opacity: 1, fontWeight: '500' }}>
              Industrieprojekt mit BSH Hausgeräte in Kooperation mit der TH Rosenheim. 
              Die Smartphone-App nutzt OCR-Technologie, um Zubereitungshinweise von Fertigprodukten zu scannen und 
              automatisch Home Connect Backöfen zu konfigurieren. Ein praktisches Beispiel für Smart Kitchen Integration 
              und benutzerfreundliche IoT-Lösungen.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>OCR</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Home Connect</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Smartphone App</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Smart Kitchen</span>
            </div>
          </div>
        </div>
        
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>Big Data & ML</h3>
          <div className={`${styles.stickyNote} ${styles.purple}`}>
            <h4 style={{ color: '#ffffff', fontWeight: '700' }}>Predictive Maintenance System</h4>
            <p style={{ color: '#ffffff', opacity: 1, fontWeight: '500' }}>
              Masterprojekt in IT-Infrastrukturen an der Hochschule München. 
              Analyse großer Datensätze zur Erkennung potenzieller Geräteausfälle in Rechenzentren. 
              Umfasst Datenaufbereitung, Normalisierung und Labeling mit Python Keras für präzise Ausfallprognosen. 
              Visualisierung zukünftiger Systemausfälle durch Machine Learning-Clustering.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Python</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Keras</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Data Science</span>
              <span className={styles.tag} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '1px solid #ffffff' }}>Clustering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;