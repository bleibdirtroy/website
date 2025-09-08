"use client";

import { useState } from "react";

const EmailReveal = ({ label = "E-Mail anzeigen" }: { label?: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRevealed(true);
  };

  if (isRevealed) {
    return (
      <a 
        href="mailto:adrian.germeck@mailbox.org" 
        className="text-accent-400 hover:text-accent-300 font-semibold transition-colors duration-300 hover:underline"
      >
        adrian.germeck@mailbox.org
      </a>
    );
  }

  return (
    <button 
      type="button"
      onClick={handleClick} 
      className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-3 py-2 rounded-md text-sm font-semibold cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 md:px-4 md:text-base"
      aria-label="E-Mail-Adresse anzeigen"
    >
      {label}
    </button>
  );
};

export default EmailReveal;