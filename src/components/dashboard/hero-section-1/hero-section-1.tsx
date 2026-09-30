import HeroSection1Headline from "@/components/dashboard/hero-section-1/hero-section-1-headline";
import HeroSection1Search from "@/components/dashboard/hero-section-1/hero-section-1-search";
import HeroSection1Visual from "@/components/dashboard/hero-section-1/hero-section-1-visual";
import { CardCourse, CardProgress, CardStudents } from "@/components/dashboard/hero-section-1/hero-section-1-cards";

export default function HeroSection1() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-primary">
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* ── Max-width container — ornaments + content  */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 min-h-screen flex flex-col items-center overflow-hidden">

        {/*  Ornaments  */}

        {/* Blob green — far left center */}
        <img
          src="/ornaments/ornament-blob-green-left.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ left: "-65px", top: "100px", width: "386.79px", height: "386.79px" }}
        />

        {/* Wave white — left middle */}
        <img
          src="/ornaments/ornament-wave-white-left.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none rotate-180"
          style={{ left: "200px", top: "365px", width: "175.81px", height: "175.81px" }}
        />

        {/* Ring white — bottom left */}
        <img
          src="/ornaments/ornament-ring-white-left.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-15"
          style={{ left: "4px", top: "582px", width: "342px", height: "342px" }}
        />

        {/* Cylinder green — top right */}
        <img
          src="/ornaments/ornament-cylinder-green-right.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ right: "-60px", top: "100px", width: "371.82px", height: "371.83px" }}
        />

        {/* Triangle white — right middle */}
        <img
          src="/ornaments/ornament-triangle-white-right.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ left: "1050px", top: "365px", width: "188px", height: "188px" }}
        />

        {/* Wave white — bottom right */}
        <img
          src="/ornaments/ornament-wave-white-right.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ right: "18px", top: "582px", width: "331.53px", height: "331.53px" }}
        />

        {/* ── Main content  */}

        {/* Headline + subtext */}
        <div className="mt-20 w-full flex justify-center">
          <HeroSection1Headline />
        </div>

        {/* Search bar */}
        <div className="mt-8 w-full flex justify-center">
          <HeroSection1Search />
        </div>

        {/* Hero visual — green circle + student image */}
        <div className="mt-12 w-full flex justify-center">
          <HeroSection1Visual />
        </div>

        {/* ── Stat Cards  */}
        <CardCourse />
        <CardProgress />
        <CardStudents />

      </div>
    </section>
  );
}
