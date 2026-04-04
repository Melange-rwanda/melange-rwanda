'use client';

import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection({ data }: { data?: any }) {
  const title = "THIS IS MÉLANGE. JOIN RWANDA'S ELITE.";
  const subtitle = "Become a founding freelance partner and provide world-class services to North American clients. Multiple positions available.";
  const videoUrl = data?.videoUrl || "/rwanda.mp4";
  const buttonText = "VIEW OPENINGS →";

  // African pattern images array
  const africanPatterns = [
    "/africanbar2.png",
    "/africanbar2.png",
    "/africanbar2.png",
    "/africanbar2.png",
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          key={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        <ScrollAnimator variant="fade-up" duration={800} threshold={0}>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-playfair mb-6 leading-[1.2]">
            {title}
          </h1>
        </ScrollAnimator>

        <ScrollAnimator variant="fade-up" duration={800} delay={200} threshold={0}>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto font-inter font-normal leading-relaxed mb-12">
            {subtitle}
          </p>
        </ScrollAnimator>

        <ScrollAnimator variant="fade-up" duration={800} delay={400} threshold={0}>
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-montserrat font-medium px-10 sm:px-12 py-5 md:py-7 text-base sm:text-lg tracking-wider rounded-full border-none transition-all shadow-xl hover:scale-105 hover:shadow-2xl"
            onClick={() => {
              const element = document.getElementById('current-openings');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {buttonText}
          </Button>
        </ScrollAnimator>
      </div>

      {/* Scroll Indicator - Perfectly centered and properly aligned */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => {
          const element = document.getElementById('mission');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-montserrat font-medium group-hover:text-white/90 transition-colors">
          SCROLL
        </span>
        <ChevronDown className="text-white/70 w-5 h-5 group-hover:text-white/90 transition-colors group-hover:translate-y-1 transition-transform" />
      </div>

      {/* African Culture Pattern Strip - Fixed, no animation */}
      <div className="absolute bottom-0 left-0 right-0 z-15 w-full flex justify-center items-center">
        <div className="flex items-center justify-center gap-0">
          {/* Repeat images to cover full width */}
          {[...Array(12)].map((_, idx) => (
            <div key={`pattern-${idx}`} className="flex-shrink-0">
              <img
                src={africanPatterns[idx % africanPatterns.length]}
                alt="African cultural pattern"
                className="h-[40px] lg:h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}