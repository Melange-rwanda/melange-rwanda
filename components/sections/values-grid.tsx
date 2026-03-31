"use client";
import { ScrollAnimator } from '@/components/scroll-animator';
import { useState } from 'react';
import {
  Calendar,
  TrendingUp,
  Handshake,
  Gem,
  BookOpen,
  ShieldCheck,
  Unplug,
  Leaf,
} from 'lucide-react';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TabData {
  id: string;
  label: string;
  values: ValueCard[];
}

const tabsData: TabData[] = [
  {
    id: 'growth-opportunity',
    label: 'Growth & Opportunity',
    values: [
      { icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Long-Term Benefits', description: 'We are building for the long haul. You grow with us from initial projects to ongoing client work.' },
      { icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Growth Opportunities', description: 'As we win clients, your role, project volume, and earnings grow too.' },
      { icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Fair, Project-Based Pay', description: 'You are compensated for each project. When we succeed, you succeed.' },
      { icon: <Gem className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Selective Network', description: 'We are building a small, elite team. You\'ll work alongside top performers.' },
    ],
  },
  {
    id: 'excellence-impact',
    label: 'Excellence & Impact',
    values: [
      { icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Training & Development', description: 'Structured training to meet global standards and advance your skills.' },
      { icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Quality Without Compromise', description: 'Every deliverable meets North American professional standards.' },
      { icon: <Unplug className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Cultural Bridge', description: 'Our founder splits time between Canada and Rwanda. You\'re part of one team.' },
      { icon: <Leaf className="w-6 h-6 sm:w-7 sm:h-7" />, title: 'Sustainable Impact', description: 'Building long-term wealth and capabilities for Rwandans through direct global participation.' },
    ],
  },
];

export function ValuesGridSection() {
  const [activeTab, setActiveTab] = useState('growth-opportunity');

  return (
    <section
      id="values"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title - Centered as specified */}
        <ScrollAnimator variant="fade-up" duration={700}>
          <h2 className="text-center text-[44px] font-semibold text-[#1A1A1A] tracking-tight font-playfair mb-16 capitalize">
            Why Join Our Founding Team?
          </h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <ScrollAnimator variant="fade-right" duration={700}>
            <div>
              <p className="text-base sm:text-lg text-[#333333] font-inter leading-relaxed mb-4">
                Our mission is to create sustainable, impactful opportunities for exceptional Rwandan talent, 
                delivering world-class value to our North American clients. We believe lasting impact is achieved 
                through meaningful work, integrating local expertise with global opportunities.
              </p>
              <p className="text-base sm:text-lg text-[#333333] font-inter leading-relaxed">
                'Mélange' means a harmonious mixture of diverse elements—Rwandan talent meets global opportunities 
                and local excellence drives our success.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Side - Tabs and Values with Icons */}
          <div>
            {/* Tabs */}
            <ScrollAnimator variant="fade-left" duration={700} delay={100}>
              <div className="flex gap-8 border-b border-slate-200 mb-8">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-lg sm:text-xl font-semibold transition-colors duration-200 font-montserrat ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollAnimator>

            {/* Values Grid - 2x2 layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {tabsData
                .find((tab) => tab.id === activeTab)
                ?.values.map((value, index) => (
                  <ScrollAnimator
                    key={index}
                    variant="fade-up"
                    delay={150 + index * 100}
                    duration={600}
                  >
                    <div className="group">
                      {/* Icon and Title - side by side */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                        <h3 className="text-[20px] font-semibold text-[#1A1A1A] font-montserrat group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-[16px] text-[#333333] font-inter leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </ScrollAnimator>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}