import HeroSection1 from "@/components/dashboard/hero-section-1/hero-section-1";
import HeroSection1Logos from "@/components/dashboard/hero-section-1/hero-section-1-logos";
import HeroSection2 from "@/components/dashboard/hero-section-2/hero-section-2";
import HeroSection3 from "@/components/dashboard/hero-section-3/hero-section-3";
import HeroSection3Part2 from "@/components/dashboard/hero-section-3/hero-section-3-part-2";
import HeroSection4 from "@/components/dashboard/hero-section-4/hero-section-4";
import HeroSection4Testimonials from "@/components/dashboard/hero-section-4/hero-section-4-testimonials";

export default function DashboardPage() {
  return (
    <>
      <HeroSection1 />
      <HeroSection1Logos />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSection3Part2 />
      <HeroSection4 />
      <HeroSection4Testimonials />
    </>
  );
}
