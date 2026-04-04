import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function MelangeDescriptionSection({ data }: { data?: any }) {
  // Use data from Sanity with fallback values
  const title = data?.title || 'What is Mélange?';
  const card1Title = data?.card1Title || 'A Mélange, not a marketplace';
  const card1Description = data?.card1Description || 'We are not a platform where you bid against hundreds for projects. We are building something different: a curated freelance team where Rwandan professionals and North American standards blend into something entirely new.';
  const card2Title = data?.card2Title || 'Why "Mélange"?';
  const card2Description = data?.card2Description || '\'Mélange\' means a thoughtful mixture of different elements. That\'s exactly what we are building: Rwandan Talent + Global Opportunity and North American Standards + Local Excellence.';
  const imageUrl = data?.image ? urlFor(data.image).url() : '/2.jpg';

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Green container that holds all the data */}
        <div className="bg-primary p-8 md:p-12 lg:p-16">
          <div className="text-center mb-16 sm:mb-20">
            <ScrollAnimator variant="fade-down" duration={700}>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-slate-800 tracking-tight font-playfair">
                {title}
              </h2>
            </ScrollAnimator>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Visual Anchor Column - Circular Image */}
            <div className="lg:col-span-2 flex justify-center">
              <ScrollAnimator variant="fade-right" duration={800}>
                <div className="group relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl hover-lift border-4 border-white ring-4 ring-white/20">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                </div>
              </ScrollAnimator>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-3 space-y-8">
              <ScrollAnimator variant="fade-left" duration={800} delay={100}>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight font-montserrat">
                    {card1Title}
                  </h3>
                  <p className="text-[18px] text-white font-normal font-inter leading-relaxed">
                    {card1Description}
                  </p>
                </div>
              </ScrollAnimator>

              <ScrollAnimator variant="fade-left" duration={800} delay={250}>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight font-montserrat">
                    {card2Title}
                  </h3>
                  <p className="text-[18px] text-white/90 font-normal font-inter leading-relaxed">
                    {card2Description}
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}