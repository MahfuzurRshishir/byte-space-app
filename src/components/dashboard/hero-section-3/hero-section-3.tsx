import HeroSection3Text from "@/components/dashboard/hero-section-3/hero-section-3-text";
import HeroSection3Visual from "@/components/dashboard/hero-section-3/hero-section-3-visual";

export default function HeroSection3() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          py-12  px-4
          min-[560px]:py-14  min-[560px]:px-8
          min-[720px]:py-16  min-[720px]:px-12
          min-[980px]:px-16
          min-[1200px]:px-[120px]
          min-[1440px]:px-[120px]
          flex flex-col gap-8
          min-[480px]:gap-10
          min-[640px]:gap-12
          min-[980px]:flex-row min-[980px]:items-center min-[980px]:gap-8
          min-[1080px]:gap-10
          min-[1200px]:gap-12
        "
      >
        {/* Left — text + stats */}
        <div className="w-full min-[980px]:flex-1">
          <HeroSection3Text />
        </div>

        {/* Right — student visual */}
        <div
          className="
            w-full
            mt-16
            min-[480px]:mt-12
            min-[640px]:mt-0
            min-[980px]:flex-1
          "
        >
          <HeroSection3Visual />
        </div>
      </div>
    </section>
  );
}
