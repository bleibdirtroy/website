"use client";

import Image from "next/image";
import { useState } from "react";

const LightBulb = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Image
      src={darkMode ? "/lightbulb-off.svg" : "/lightbulb-on.svg"}
      alt={darkMode ? "lightbulb off" : "lightbulb on"}
      onClick={() => setDarkMode(!darkMode)}
      width={80}
      height={80}
      style={{ transform: "rotate(180deg)" }}
    />
  );
};

export default LightBulb;
