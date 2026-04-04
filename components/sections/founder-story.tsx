import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function FounderStorySection({ data }: { data?: any }) {
  const title = data?.title || 'OUR FOUNDER';
  const name = data?.name || 'Eloi XXXXX, Founder';
  const description1 = data?.description1 || 'As the founder, I split my time between Canada and Rwanda to harness the immense potential of Rwandan talent. My background in HR Management and Culinary Arts, combined with deep experience in the Canadian funding ecosystem, drives our mission at Mélange Rwanda.';
  const description2 = data?.description2 || "When you join this team, you're not working for a distant company. You're partnering with me as we build something lasting together.";
  const calloutTitle = data?.calloutTitle || 'Sustainable Scaling';
  const calloutText = data?.calloutText || 'Growth is funded by revenue. We build a business that lasts—together.';
  const imageUrl = data?.image ? urlFor(data.image).url() : '/founder2.jpg';

  return (
    <section
      id="story"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A7B4B]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A7B4B]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title - Centered */}
        <ScrollAnimator variant="fade-up" duration={700}>
          <h2 className="text-center text-[44px] font-semibold text-[#1A1A1A] tracking-tight font-playfair mb-16">
            {title}
          </h2>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column – left */}
          <ScrollAnimator variant="fade-right" duration={900}>
            <div className="relative h-[500px] md:h-[650px] w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-[#1A7B4B]/20 rounded-3xl transform -rotate-3 scale-105 opacity-50 blur-sm transition-transform hover:-rotate-6" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover-lift">
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                  <p className="text-white font-semibold text-[24px] tracking-wide drop-shadow-md font-montserrat">
                    {name}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Text Column – right */}
          <ScrollAnimator variant="fade-left" duration={800} delay={150}>
            <div className="space-y-8 max-w-[700px] mx-auto lg:mx-0">
              {/* Founder Quote/Body */}
              <div className="space-y-6">
                <ScrollAnimator variant="fade-up" delay={200} duration={600}>
                  <p className="text-[18px] text-[#333333] font-inter leading-relaxed">
                    {description1}
                  </p>
                </ScrollAnimator>

                <ScrollAnimator variant="fade-up" delay={320} duration={600}>
                  <p className="text-[18px] text-[#333333] font-inter leading-relaxed">
                    {description2}
                  </p>
                </ScrollAnimator>
              </div>

              {/* Callout Box - Optional, kept for additional context */}
              <ScrollAnimator variant="zoom-in" delay={450} duration={700}>
                <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-md hover-lift">
                  <p className="text-sm text-primary font-bold mb-3 tracking-widest uppercase font-montserrat">{calloutTitle}</p>
                  <p className="text-slate-800 font-semibold text-lg sm:text-xl leading-snug font-inter">
                    {calloutText}
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}