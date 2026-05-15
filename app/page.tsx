import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero';
import { MissionSection } from '@/components/sections/mission';
import { MelangeDescriptionSection } from '@/components/sections/melange-description';
import { ValuesGridSection } from '@/components/sections/values-grid';
import { FounderStorySection } from '@/components/sections/founder-story';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';
import CurrentOpeningsSection from '@/components/sections/current-openings';
import { client } from '@/sanity/lib/client';
import { ParallaxSection } from '@/components/sections/parallax';
import { FaqsSection } from '@/components/sections/faqs';

export default async function Home() {
  const query = `{
    "hero": *[_type == "hero"][0] {
      ...,
      "videoUrl": videoFile.asset->url
    },
    "mission": *[_type == "mission"][0],
    "about": *[_type == "about"][0],
    "story": *[_type == "story"][0],
    "process": *[_type == "process"][0],
    "parallax": *[_type == "parallax"][0],
    "values": *[_type == "values"][0],
    "jobs": *[_type == "job"],
    "faqs": *[_type == "faq"]
  }`;

  const data = await client.fetch(query);

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection data={data.hero} />
      <MissionSection data={data.mission} />
      <MelangeDescriptionSection data={data.about} />
      <CurrentOpeningsSection initialJobs={data.jobs} />
      <ParallaxSection data={data.parallax} />
      <ValuesGridSection data={data.values} />
      <FounderStorySection data={data.story} />
      <HowItWorksSection data={data.process} />
      <FaqsSection faqs={data.faqs} />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
