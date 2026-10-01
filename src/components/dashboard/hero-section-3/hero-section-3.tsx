import HeroSection3Text from "@/components/dashboard/hero-section-3/hero-section-3-text";
import HeroSection3Visual from "@/components/dashboard/hero-section-3/hero-section-3-visual";

export default function HeroSection3() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Top-left green radial glow blob
          Figma (1440px): 1137×1137, top: -466px, left: -152px
          Scales fluidly below 1440px, capped at Figma values above
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width:  "min(78.96vw, 1137px)",
          height: "min(78.96vw, 1137px)",
          left:   "max(-10.56vw, -152px)",
          top:    "max(-32.36vw, -466px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.4) 0%, rgba(203,252,1,0.092) 53%, rgba(203,252,1,0.024) 75%, rgba(203,252,1,0) 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top-right blue radial glow blob
          Figma (1440px): 1137×1137, top: -458px, left: 811px
          Scales fluidly below 1440px, capped at Figma values above
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width:  "min(78.96vw, 1137px)",
          height: "min(78.96vw, 1137px)",
          left:   "min(56.32vw, 811px)",
          top:    "max(-31.81vw, -458px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.08) 0%, rgba(0,59,226,0.0184) 53%, rgba(0,59,226,0.0048) 75%, rgba(0,59,226,0) 100%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="
          mx-auto w-full max-w-[1440px]
          py-20   px-4
          min-[560px]:py-10  min-[560px]:px-8
          min-[720px]:py-14  min-[720px]:px-12
          min-[980px]:px-16
          min-[1200px]:px-[120px]
          min-[1440px]:px-[120px]
          min-[1440px]:py-38
          flex flex-col gap-6
          min-[480px]:gap-8
          min-[640px]:gap-10
          min-[980px]:flex-row min-[980px]:items-center min-[980px]:gap-8
          min-[1080px]:gap-10
          min-[1200px]:gap-12
        "
      >
        {/* Left — text + stats */}
        <div className="w-full min-[980px]:flex-1 order-2 min-[980px]:order-1">
          <HeroSection3Text />
        </div>

        {/* Right — student visual */}
        <div
          className="
            w-full
            mt-6
            min-[480px]:mt-8
            min-[640px]:mt-0
            min-[980px]:flex-1
            order-1 min-[980px]:order-2
          "
        >
          <HeroSection3Visual />
        </div>
      </div>
    </section>
  );
}
