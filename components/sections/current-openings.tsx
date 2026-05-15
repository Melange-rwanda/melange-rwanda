// components/sections/current-openings.tsx
import { ScrollAnimator } from '@/components/scroll-animator';
import { JobTable, Job } from '@/components/job-table';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export default async function CurrentOpeningsSection({
  initialJobs,
  generalApplication
}: {
  initialJobs?: Job[],
  generalApplication?: { link?: string; description?: string }
}) {
  let jobs: Job[] = initialJobs || [];
  let error: string | null = null;

  if (!initialJobs) {
    try {
      const query = `*[_type == "job"]{ title, company, location, type, link, roleDescription }`;
      jobs = await client.fetch(query);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      error = 'Failed to load jobs';
    }
  }

  return (
    <section
      id="current-openings"
      className="w-full bg-white relative pb-16 sm:pb-24 lg:pb-32 overflow-hidden"
    >
      {/* Header image with scroll animation */}
      <ScrollAnimator variant="zoom-out" duration={900}>
        <div className="relative h-[300px] w-full mb-16 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
            alt="Colleagues collaborating"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <ScrollAnimator variant="fade-down" duration={700} delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold mb-4 text-white drop-shadow-md font-playfair tracking-tight">
                Now hiring: founding team
              </h2>
            </ScrollAnimator>
            <ScrollAnimator variant="fade-up" duration={600} delay={350}>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-inter font-normal drop-shadow-md">
                We're assembling an exceptional team of freelancers for exciting projects. Click below for the full job details. </p>
            </ScrollAnimator>
          </div>
        </div>
      </ScrollAnimator>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Job table – zooms in with proper scrolling */}
        <ScrollAnimator variant="zoom-in" duration={800} delay={100}>
          <div className="bg-white rounded-[40px] shadow-2xl border border-slate-50 p-6 sm:p-10 lg:p-16 mb-8 -mt-32 relative z-10">
            {error ? (
              <p className="text-red-500 text-center py-8 font-inter">{error}</p>
            ) : (
              <JobTable jobs={jobs} />
            )}
          </div>
        </ScrollAnimator>

        {/* CTA – slides up */}
        <ScrollAnimator variant="fade-up" duration={700} delay={200}>
          <div className="text-center mt-16 sm:mt-24 px-4">
            <p className="text-[18px] text-[#333333] font-normal font-inter mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-wrap">
              {generalApplication?.description || "Not seeing your exact role? If you have exceptional skills in writing, research, design, or operations that don't fit these exact descriptions, we still want to hear from you."}
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full font-montserrat font-medium text-[16px] px-5 py-3 h-auto tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <a href={generalApplication?.link || "/"} target="_blank" rel="noopener noreferrer">
                SUBMIT GENERAL APPLICATION
              </a>
            </Button>
          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}