import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface Step {
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  {
    title: 'Apply',
    description: 'Submit your application through our form.',
  },
  {
    title: 'Get vetted',
    description: 'We verify skills and professionalism via tests, interviews, and references.',
  },
  {
    title: 'Get matched',
    description: 'We connect you with vetted clients — you set terms and keep 100% of earnings.',
  },
];

export function HowItWorksSection({ data }: { data?: any }) {
  const steps = data?.steps?.length > 0 ? data.steps : defaultSteps;
  const imageUrl = data?.image ? urlFor(data.image).url() : '/10.png';
  const sectionTitle = data?.title || 'Our partnership model: how it works';

  return (
    <section
      id="how-it-works"
      className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <ScrollAnimator variant="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#1A1A1A] tracking-tight capitalize font-playfair leading-tight">
              {sectionTitle}
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Steps Side */}
          <div className="space-y-12 relative">
            {/* Connecting line */}
            <div className="absolute left-[47px] top-10 bottom-10 w-0.5 bg-primary/20 hidden sm:block" />

            {steps.map((step: any, index: number) => {
              return (
                <ScrollAnimator
                  key={index}
                  variant="fade-right"
                  delay={index * 150}
                  duration={700}
                >
                  <div className="relative z-10 flex items-start gap-8 group">
                    <div className="w-24 h-24 shrink-0 bg-white rounded-[24px] shadow-sm border border-slate-100 flex items-center justify-center text-primary transition-all duration-300 relative">
                      <span className="text-4xl font-bold font-montserrat">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl sm:text-[24px] font-bold text-[#1A1A1A] mb-3 transition-colors font-montserrat">
                        {step.title}
                      </h4>
                      <p className="text-[18px] text-[#333333] leading-relaxed font-normal font-inter">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimator>
              );
            })}
          </div>

          {/* Visual Anchor Side */}
          <ScrollAnimator variant="fade-left" duration={900}>
            <div className="relative h-[450px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt="Professional partnership process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}
