import HeroSection2Header from "@/components/dashboard/hero-section-2/hero-section-2-header";
import HeroSection2Chips from "@/components/dashboard/hero-section-2/hero-section-2-chips";
import HeroSection2Cards from "@/components/dashboard/hero-section-2/hero-section-2-cards";
import HeroSection2Categories from "@/components/dashboard/hero-section-2/hero-section-2-categories";

export default function HeroSection2() {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          py-12  px-4
          min-[560px]:py-14  min-[560px]:px-8
          min-[720px]:py-16  min-[720px]:px-12
          min-[980px]:py-18  min-[980px]:px-16
          min-[1200px]:py-20 min-[1200px]:px-[120px]
          min-[1440px]:py-24 min-[1440px]:px-[120px]
          flex flex-col items-center gap-8
          min-[640px]:gap-10
          min-[1200px]:gap-12
        "
      >
        <HeroSection2Header />
        <HeroSection2Chips />
        <HeroSection2Cards />
        <HeroSection2Categories />
      </div>
    </section>
  );
}
