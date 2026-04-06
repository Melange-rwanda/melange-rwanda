"use client";

import { ScrollAnimator } from '@/components/scroll-animator';
import { useState } from 'react';

interface ValueCard {
  title: string;
  description: string;
  id?: string;
  _key?: string;
}

interface ValuesGridProps {
  data?: {
    title?: string;
    description1?: string;
    description2?: string;
    cards?: ValueCard[];
  };
}

// Fallback data
const defaultValues: ValueCard[] = [
  { title: 'Long-Term Benefits', description: 'We are building for the long haul. You grow with us from initial projects to ongoing client work.', id: 'long-term' },
  { title: 'Growth Opportunities', description: 'As we win clients, your role, project volume, and earnings grow too.', id: 'growth-opp' },
  { title: 'Fair, Project-Based Pay', description: 'You are compensated for each project. When we succeed, you succeed.', id: 'fair-pay' },
  { title: 'Selective Network', description: 'We are building a small, elite team. You\'ll work alongside top performers.', id: 'selective' },
  { title: 'Training & Development', description: 'Structured training to meet global standards and advance your skills.', id: 'training' },
  { title: 'Quality Without Compromise', description: 'Every deliverable meets North American professional standards.', id: 'quality' },
  { title: 'Cultural Bridge', description: 'Our founder splits time between Canada and Rwanda. You\'re part of one team.', id: 'cultural' },
  { title: 'Sustainable Impact', description: 'Building long-term wealth and capabilities for Rwandans through direct global participation.', id: 'sustainable' },
];

export function ValuesGridSection({ data }: ValuesGridProps) {
  // Track which value is expanded (by id or _key). null means none expanded.
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const displayTitle = data?.title || "Why Join Our Founding Team?";
  const displayDesc1 = data?.description1 || "Our mission is to create sustainable, impactful opportunities for exceptional Rwandan talent, delivering world-class value to our North American clients. We believe lasting impact is achieved through meaningful work, integrating local expertise with global opportunities.";
  const displayDesc2 = data?.description2 || "'Mélange' means a harmonious mixture of diverse elements—Rwandan talent meets global opportunities and local excellence drives our success.";
  const displayValues = data?.cards || defaultValues;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="values"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <ScrollAnimator variant="fade-up" duration={700}>
          <h2 className="text-center text-[44px] font-semibold text-[#1A1A1A] tracking-tight font-playfair mb-16 capitalize">
            {displayTitle}
          </h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <ScrollAnimator variant="fade-right" duration={700}>
            <div>
              <p className="text-base sm:text-lg text-[#333333] font-inter leading-relaxed mb-4">
                {displayDesc1}
              </p>
              <p className="text-base sm:text-lg text-[#333333] font-inter leading-relaxed">
                {displayDesc2}
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Side - All 8 Values as Expandable Cards */}
          <div>
            <div className="grid grid-cols-1 gap-0">
              {displayValues.map((value, index) => {
                const cardId = value._key || value.id || `value-${index}`;
                const isExpanded = expandedId === cardId;
                return (
                  <ScrollAnimator
                    key={cardId}
                    variant="fade-up"
                    delay={100 + (index % 4) * 50}
                    duration={600}
                  >
                    <div
                      className="group p-2 transition-all duration-300 cursor-pointer bg-white border-b border-slate-100 last:border-b-0"
                      onClick={() => toggleExpand(cardId)}
                    >
                      {/* Header: Black Left Triangle and Title */}
                      <div className="flex items-start">
                        {/* Black left triangle icon */}
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                          >
                            <path d="M0 0 L12 6 L0 12 Z" fill="#1A1A1A" />
                          </svg>
                        </div>
                        <h3 className="text-[18px] font-semibold text-[#1A1A1A] font-montserrat group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                      </div>

                      {/* Expandable Description */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-48 mt-3 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <p className="text-[17px] text-[#444444] font-inter leading-relaxed pl-[22px]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimator>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}