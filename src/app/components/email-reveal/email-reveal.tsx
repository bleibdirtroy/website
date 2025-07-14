"use client";

import { useState } from "react";
import styles from "./email-reveal.module.css";

const EmailReveal = ({ label = "E-Mail anzeigen" }: { label?: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRevealed(true);
  };

  if (isRevealed) {
    return (
      <a href="mailto:adrian.germeck@mailbox.org" className={styles.emailLink}>
        adrian.germeck@mailbox.org
      </a>
    );
  }

  return (
    <button 
      type="button"
      onClick={handleClick} 
      className={styles.revealButton}
      aria-label="E-Mail-Adresse anzeigen"
    >
      {label}
    </button>
  );
};

export default EmailReveal;