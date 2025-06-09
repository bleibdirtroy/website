import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projekte</h2>
      <div className={styles.kanbanBoard}>
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>In Planung</h3>
          <div className={`${styles.stickyNote} ${styles.yellow}`}>
            <h4>E-Commerce Platform</h4>
            <p>Eine moderne E-Commerce Lösung mit React und Node.js</p>
            <div className={styles.tags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Node.js</span>
              <span className={styles.tag}>MongoDB</span>
            </div>
          </div>
          <div className={`${styles.stickyNote} ${styles.blue}`}>
            <h4>Mobile App</h4>
            <p>Cross-platform mobile Anwendung mit React Native</p>
            <div className={styles.tags}>
              <span className={styles.tag}>React Native</span>
              <span className={styles.tag}>TypeScript</span>
            </div>
          </div>
        </div>
        
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>In Entwicklung</h3>
          <div className={`${styles.stickyNote} ${styles.green}`}>
            <h4>Portfolio Website</h4>
            <p>Persönliche Website mit modernem Design und Animationen</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>Tailwind CSS</span>
              <span className={styles.tag}>Framer Motion</span>
            </div>
          </div>
          <div className={`${styles.stickyNote} ${styles.pink}`}>
            <h4>Task Management Tool</h4>
            <p>Produktivitäts-App für Teams und Einzelpersonen</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Vue.js</span>
              <span className={styles.tag}>Firebase</span>
            </div>
          </div>
        </div>
        
        <div className={styles.kanbanColumn}>
          <h3 className={styles.kanbanColumnTitle}>Abgeschlossen</h3>
          <div className={`${styles.stickyNote} ${styles.purple}`}>
            <h4>Weather Dashboard</h4>
            <p>Wetter-App mit detaillierten Vorhersagen und Karten</p>
            <div className={styles.tags}>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>API Integration</span>
              <span className={styles.tag}>Charts.js</span>
            </div>
          </div>
          <div className={`${styles.stickyNote} ${styles.orange}`}>
            <h4>Blog CMS</h4>
            <p>Content Management System für Blogger und Autoren</p>
            <div className={styles.tags}>
              <span className={styles.tag}>PHP</span>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;