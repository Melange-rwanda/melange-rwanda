import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function MissionSection({ data }: { data?: any }) {
  const title = data?.title || 'Our mission';
  const description = data?.description || 'Our mission is to create sustainable, high-impact opportunities for exceptional Rwandan talent while delivering world-class value to North American clients. We believe the most powerful way to create lasting  through meaningful work—blending local excellence with global opportunity.';
  const imageUrl = data?.image ? urlFor(data.image).url() : '/graduate.jpg';

  return (
    <section
      id="mission"
      className="w-full py-12 sm:py-16 lg:py-24 px-0 bg-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A7B4B]/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
  
      <div className="w-full mx-auto">
        {/* Text section - centered above images */}
        <ScrollAnimator variant="fade-up" duration={800} delay={150} className="mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#1A1A1A] tracking-tight leading-tight font-playfair capitalize">
              {title}
            </h2>
            <p className="text-[18px] text-[#333333] leading-relaxed font-normal font-inter max-w-[800px] mx-auto">
              {description}
            </p>
          </div>
        </ScrollAnimator>

        {/* Single Mission Image - centered and reduced size on larger devices */}
        <ScrollAnimator variant="fade-up" duration={800} delay={300}>
          <div className="flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-[900px] lg:max-w-[800px] xl:max-w-[700px] aspect-[16/9] rounded-[10px] overflow-hidden shadow-2xl mx-auto">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 800px, 700px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}