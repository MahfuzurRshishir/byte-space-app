import HeroSection3 from "@/components/dashboard/hero-section-3/hero-section-3";
import HeroSection3Part2 from "@/components/dashboard/hero-section-3/hero-section-3-part-2";

export default function HeroSection3Wrapper() {
  return (
    <div className="w-full bg-[#FAFAFA] overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden">

        {/* Mid-left blue radial glow blob
            Figma (1440px): 1137×1137, top: 183px, left: -508px
            Below 980px: shifted down by 20% of blob height (extra 15.79vw)
        */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute rounded-full
            top-[28.5vw]
            min-[980px]:top-[min(12.71vw,183px)]
          "
          style={{
            width:  "min(78.96vw, 1137px)",
            height: "min(78.96vw, 1137px)",
            left:   "max(-35.28vw, -508px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.16) 0%, rgba(0,59,226,0.0368) 53%, rgba(0,59,226,0.0096) 75%, rgba(0,59,226,0) 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Bottom-right blue radial glow blob
            Figma (1440px): 1137×1137, top: 788px, left: 722px
            Anchored to bottom-right so it stays correct at all screen sizes
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            width:  "min(78.96vw, 1137px)",
            height: "min(78.96vw, 1137px)",
            right:  "max(-29.1vw, -419px)",
            bottom: "max(-36.46vw, -525px)",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.24) 0%, rgba(0,59,226,0.0552) 53%, rgba(0,59,226,0.0144) 75%, rgba(0,59,226,0) 100%)",
            filter: "blur(40px)",
          }}
        />

        <HeroSection3 />
        <HeroSection3Part2 />
      </div>
    </div>
  );
}
