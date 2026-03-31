import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { SocialShare } from '@/components/social-share';
import { SubscriptionForm } from '@/components/subscription-form';

export function FinalCtaSection() {
  return (
    <section className="w-full relative py-20 sm:py-32 overflow-hidden bg-white mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">


        {/* Main CTA card */}
        <ScrollAnimator variant="zoom-in" duration={800}>
          <div className="mb-20">
            <h2 className="text-3xl capitalize sm:text-4xl md:text-[44px] font-semibold mb-6 text-[#1A1A1A] tracking-tight font-playfair leading-tight">
              Ready to join the elite?
            </h2>

            <p className="text-[20px] text-[#333333] mb-12 max-w-2xl mx-auto leading-relaxed font-inter font-normal">
              Apply now and become a founding partner at Mélange Rwanda.
            </p>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-5 h-auto text-[16px] font-montserrat font-medium tracking-wider shadow-2xl transition-all hover:scale-105"
            >
              <a href="#current-openings">
                APPLY NOW
              </a>
            </Button>
          </div>
        </ScrollAnimator>

        {/* Social share + subscription */}
        <ScrollAnimator variant="fade-up" delay={150} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 pt-16 border-t border-slate-100">

            {/* Social Share */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-[18px] text-[#333333] font-semibold leading-relaxed font-inter">
                Know someone who would be a perfect fit? Share this page.
              </p>
              <SocialShare className="justify-center md:justify-start flex-wrap gap-4" />
            </div>

            {/* Subscription Form */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-[18px] text-[#333333] font-semibold leading-relaxed font-inter">
                Or join our mailing list for future openings:
              </p>
              <SubscriptionForm />
            </div>
          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}
