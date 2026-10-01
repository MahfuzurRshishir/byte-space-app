import { CardStudents } from "@/components/dashboard/hero-section-1/hero-section-1-cards";
import { CardTotalRevenue, CardYearToDate } from "./hero-section-3-stat-cards";

export default function HeroSection3Visual2() {
  return (
    <div className="relative w-full flex justify-center min-[980px]:justify-start">

      {/* Green radial glow blob — sits behind the girl image at all breakpoints */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute rounded-full z-[1]
          -left-[144px] top-[50px]   w-[336px]  h-[336px]
          min-[640px]:-left-[216px]  min-[640px]:top-[76px]  min-[640px]:w-[504px]  min-[640px]:h-[504px]
          min-[1440px]:-left-[389px] min-[1440px]:top-[202px] min-[1440px]:w-[672px] min-[1440px]:h-[672px]
        "
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.138) 53%, rgba(203,252,1,0.036) 75%, rgba(203,252,1,0) 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Total Revenue card — top-right, positioned absolutely */}
      <CardTotalRevenue />

      {/* Year to Date card — bottom-right, positioned absolutely */}
      <CardYearToDate />

      {/* Happy Students card — bottom-left, positioned absolutely (reused from hero-section-1) */}
      <CardStudents />

      {/* Girl avatar — normal flow, drives container height */}
      <img
        src="/img-hero-frame-3.svg"
        alt="Girl with digital experience"
        className="
          relative z-[2] max-w-full object-contain
          w-[240px]
          min-[480px]:w-[290px]
          min-[640px]:w-[340px]
          min-[860px]:w-[390px]
          min-[980px]:w-[330px]
          min-[1080px]:w-[370px]
          min-[1200px]:w-[440px]
          min-[1440px]:w-[520px]
          max-w-[577px]
        "
      />

      {/* Ornament — right edge of girl image */}
      <img
        src="/ornaments/hero-section-3/ornament-wave-white-left.svg"
        alt="" aria-hidden="true"
        className="
          hidden min-[640px]:block
          absolute pointer-events-none z-[4]
          bottom-[50%]
          top-auto
          right-[calc(50%-135px)]
          min-[480px]:right-[calc(50%-158px)]
          min-[640px]:right-[calc(50%-183px)]
          min-[860px]:right-[calc(50%-208px)]
          min-[980px]:right-[70px]
          min-[1080px]:right-[80px]
          min-[1200px]:right-[90px]
          min-[1360px]:right-[100px]
          min-[1440px]:right-[110px]
          w-[50px]
          min-[480px]:w-[60px]
          min-[640px]:w-[75px]
          min-[860px]:w-[90px]
          min-[980px]:w-[120px]
          min-[1080px]:w-[140px]
          min-[1200px]:w-[160px]
          min-[1360px]:w-[180px]
          min-[1440px]:w-[196px]
        "
      />

    </div>
  );
}
