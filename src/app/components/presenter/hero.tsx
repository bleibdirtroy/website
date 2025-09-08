"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollIndicator(scrollPosition < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 -mt-16 md:-mt-20">
      {/* Dotted Background */}
      <div 
        className="absolute inset-0 opacity-10 -z-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 -z-10 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      
      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:gap-20 xl:gap-24">
        {/* Image Container - Links positioniert */}
        <div className="relative md:order-1">
          <Image
            src="/me.jpg"
            alt="Adrian Germeck"
            width={500}
            height={500}
            quality={85}
            placeholder="blur"
            blurDataURL="/me_blur.webp"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover border-8 md:border-[12px] lg:border-[15px] border-gray-500 shadow-[12px_12px_0_theme(colors.orange.500)] md:shadow-[16px_16px_0_theme(colors.orange.500)] lg:shadow-[20px_20px_0_theme(colors.orange.500)]"
          />
        </div>
        
        {/* Text Container - Rechts vom Bild */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:order-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">Adrian</h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold -mt-3 sm:-mt-4 md:-mt-6 lg:-mt-8 xl:-mt-10 underline decoration-orange-500 decoration-8 md:decoration-[12px] lg:decoration-[15px] xl:decoration-[18px] underline-offset-4 md:underline-offset-6 lg:underline-offset-8 xl:underline-offset-10">Germeck</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mt-3 md:mt-6 lg:mt-8">M.Sc. Software Engineer</h2>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 text-sm animate-bounce">
          <div className="w-5 h-5 border-r-2 border-b-2 border-orange-500 transform rotate-45 mb-2"></div>
          <span className="hidden sm:inline">Scroll down</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
