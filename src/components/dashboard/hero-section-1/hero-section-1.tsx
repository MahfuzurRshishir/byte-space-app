import HeroSection1Headline from "@/components/dashboard/hero-section-1/hero-section-1-headline";
import HeroSection1Search from "@/components/dashboard/hero-section-1/hero-section-1-search";
import HeroSection1Visual from "@/components/dashboard/hero-section-1/hero-section-1-visual";

export default function HeroSection1() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
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

      {/*  Max-width container — ornaments + content  */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center overflow-hidden">

        {/*  Ornaments — hidden below 450px  */}

        {/* Blob green — left edge */}
        <img
          src="/ornaments/hero-section-1/ornament-blob-green-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none left-[-65px] top-[11%]
            w-[108px] h-[108px]
            min-[480px]:w-[128px] min-[480px]:h-[128px]
            min-[560px]:w-[151px] min-[560px]:h-[151px]
            min-[640px]:w-[170px] min-[640px]:h-[170px]
            min-[720px]:w-[194px] min-[720px]:h-[194px]
            min-[860px]:w-[232px] min-[860px]:h-[232px]
            min-[980px]:w-[263px] min-[980px]:h-[263px]
            min-[1080px]:w-[290px] min-[1080px]:h-[290px]
            min-[1200px]:w-[321px] min-[1200px]:h-[321px]
            min-[1360px]:w-[364px] min-[1360px]:h-[364px]
            min-[1440px]:w-[387px] min-[1440px]:h-[387px]
          "
        />

        {/* Wave white — left interior ~14%, top 40% */}
        <img
          src="/ornaments/hero-section-1/ornament-wave-white-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none z-1 rotate-180 left-[14%]
            top-[48%]
            min-[640px]:top-[44%]
            min-[720px]:top-[40%]
            w-[49px] h-[49px]
            min-[480px]:w-[58px] min-[480px]:h-[58px]
            min-[560px]:w-[69px] min-[560px]:h-[69px]
            min-[640px]:w-[77px] min-[640px]:h-[77px]
            min-[720px]:w-[88px] min-[720px]:h-[88px]
            min-[860px]:w-[106px] min-[860px]:h-[106px]
            min-[980px]:w-[120px] min-[980px]:h-[120px]
            min-[1080px]:w-[132px] min-[1080px]:h-[132px]
            min-[1200px]:w-[146px] min-[1200px]:h-[146px]
            min-[1360px]:w-[165px] min-[1360px]:h-[165px]
            min-[1440px]:w-[176px] min-[1440px]:h-[176px]
          "
        />

        {/* Ring white — left edge, top 65% */}
        <img
          src="/ornaments/hero-section-1/ornament-ring-white-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none z-[15] left-[4px] top-[65%]
            w-[96px] h-[96px]
            min-[480px]:w-[113px] min-[480px]:h-[113px]
            min-[560px]:w-[133px] min-[560px]:h-[133px]
            min-[640px]:w-[151px] min-[640px]:h-[151px]
            min-[720px]:w-[171px] min-[720px]:h-[171px]
            min-[860px]:w-[205px] min-[860px]:h-[205px]
            min-[980px]:w-[233px] min-[980px]:h-[233px]
            min-[1080px]:w-[257px] min-[1080px]:h-[257px]
            min-[1200px]:w-[284px] min-[1200px]:h-[284px]
            min-[1360px]:w-[321px] min-[1360px]:h-[321px]
            min-[1440px]:w-[342px] min-[1440px]:h-[342px]
          "
        />

        {/* Cylinder green — right edge, top 11% */}
        <img
          src="/ornaments/hero-section-1/ornament-cylinder-green-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none right-[-60px] top-[11%]
            w-[104px] h-[104px]
            min-[480px]:w-[123px] min-[480px]:h-[123px]
            min-[560px]:w-[145px] min-[560px]:h-[145px]
            min-[640px]:w-[164px] min-[640px]:h-[164px]
            min-[720px]:w-[186px] min-[720px]:h-[186px]
            min-[860px]:w-[223px] min-[860px]:h-[223px]
            min-[980px]:w-[253px] min-[980px]:h-[253px]
            min-[1080px]:w-[279px] min-[1080px]:h-[279px]
            min-[1200px]:w-[309px] min-[1200px]:h-[309px]
            min-[1360px]:w-[350px] min-[1360px]:h-[350px]
            min-[1440px]:w-[372px] min-[1440px]:h-[372px]
          "
        />

        {/* Triangle white — right interior ~73%, top 40% */}
        <img
          src="/ornaments/hero-section-1/ornament-triangle-white-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none z-[1] left-[73%]
            top-[48%]
            min-[640px]:top-[44%]
            min-[720px]:top-[40%]
            w-[53px] h-[53px]
            min-[480px]:w-[62px] min-[480px]:h-[62px]
            min-[560px]:w-[73px] min-[560px]:h-[73px]
            min-[640px]:w-[83px] min-[640px]:h-[83px]
            min-[720px]:w-[94px] min-[720px]:h-[94px]
            min-[860px]:w-[113px] min-[860px]:h-[113px]
            min-[980px]:w-[128px] min-[980px]:h-[128px]
            min-[1080px]:w-[141px] min-[1080px]:h-[141px]
            min-[1200px]:w-[156px] min-[1200px]:h-[156px]
            min-[1360px]:w-[177px] min-[1360px]:h-[177px]
            min-[1440px]:w-[188px] min-[1440px]:h-[188px]
          "
        />

        {/* Wave white — right edge, top 65% */}
        <img
          src="/ornaments/hero-section-1/ornament-wave-white-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none right-[18px] top-[65%]
            w-[93px] h-[93px] z-15
            min-[480px]:w-[110px] min-[480px]:h-[110px]
            min-[560px]:w-[129px] min-[560px]:h-[129px]
            min-[640px]:w-[146px] min-[640px]:h-[146px]
            min-[720px]:w-[166px] min-[720px]:h-[166px]
            min-[860px]:w-[199px] min-[860px]:h-[199px]
            min-[980px]:w-[226px] min-[980px]:h-[226px]
            min-[1080px]:w-[249px] min-[1080px]:h-[249px]
            min-[1200px]:w-[276px] min-[1200px]:h-[276px]
            min-[1360px]:w-[312px] min-[1360px]:h-[312px]
            min-[1440px]:w-[332px] min-[1440px]:h-[332px]
          "
        />

        {/*  Main content  */}

        {/* Headline + subtext */}
        <div className="mt-20 w-full flex justify-center">
          <HeroSection1Headline />
        </div>

        {/* Search bar */}
        <div className="relative z-[5] mt-8 w-full flex justify-center">
          <HeroSection1Search />
        </div>

        {/* Hero visual — green circle + student image + cards */}
        <div className="mt-12 w-full flex justify-center">
          <HeroSection1Visual />
        </div>

      </div>
    </section>
  );
}
