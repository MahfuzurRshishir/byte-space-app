import Button from "@/components/ui/button";

export default function HeroSection4() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2]">

      {/* Grid texture overlay — same pattern as hero-section-1 */}
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

      {/* Max-width container — ornaments + content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center overflow-hidden">

        {/* ── ORNAMENTS ── */}

        {/* Blob green — far left edge, top band (~8%) */}
        <img
          src="/ornaments/hero-section-4/ornament-blob-green-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            left-[20px] top-[-4%]
            w-[100px] h-[100px]
            min-[480px]:w-[118px] min-[480px]:h-[118px]
            min-[560px]:w-[139px] min-[560px]:h-[139px]
            min-[640px]:w-[157px] min-[640px]:h-[157px]
            min-[720px]:w-[179px] min-[720px]:h-[179px]
            min-[860px]:w-[214px] min-[860px]:h-[214px]
            min-[980px]:w-[242px] min-[980px]:h-[242px]
            min-[1080px]:w-[267px] min-[1080px]:h-[267px]
            min-[1200px]:w-[296px] min-[1200px]:h-[296px]
            min-[1360px]:w-[335px] min-[1360px]:h-[335px]
            min-[1440px]:w-[356px] min-[1440px]:h-[356px]
          "
        />

        {/* Wave white — left interior (~10%), mid band (~42%) */}
        <img
          src="/ornaments/hero-section-4/ornament-wave-whiteleft.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            left-[16%]
            top-[8%]
            min-[640px]:top-[4%]
            min-[720px]:top-[0%]
            w-[49px] h-[49px]
            min-[480px]:w-[58px] min-[480px]:h-[58px]
            min-[560px]:w-[68px] min-[560px]:h-[68px]
            min-[640px]:w-[77px] min-[640px]:h-[77px]
            min-[720px]:w-[88px] min-[720px]:h-[88px]
            min-[860px]:w-[105px] min-[860px]:h-[105px]
            min-[980px]:w-[119px] min-[980px]:h-[119px]
            min-[1080px]:w-[131px] min-[1080px]:h-[131px]
            min-[1200px]:w-[145px] min-[1200px]:h-[145px]
            min-[1360px]:w-[164px] min-[1360px]:h-[164px]
            min-[1440px]:w-[175px] min-[1440px]:h-[175px]
          "
        />

        {/* Ring green — left near-edge (~2px), bottom band (~72%) */}
        <img
          src="/ornaments/hero-section-4/ornament-ring-green-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            left-[80px] top-[52%]
            w-[88px] h-[88px]
            min-[480px]:w-[104px] min-[480px]:h-[104px]
            min-[560px]:w-[123px] min-[560px]:h-[123px]
            min-[640px]:w-[139px] min-[640px]:h-[139px]
            min-[720px]:w-[158px] min-[720px]:h-[158px]
            min-[860px]:w-[189px] min-[860px]:h-[189px]
            min-[980px]:w-[214px] min-[980px]:h-[214px]
            min-[1080px]:w-[236px] min-[1080px]:h-[236px]
            min-[1200px]:w-[262px] min-[1200px]:h-[262px]
            min-[1360px]:w-[296px] min-[1360px]:h-[296px]
            min-[1440px]:w-[315px] min-[1440px]:h-[315px]
          "
        />

        {/* Cone white — same left as blob, just below it */}
        <img
          src="/ornaments/hero-section-4/ornament-cone-white-left.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            left-[20px] top-[55%]
            w-[46px] h-[46px]
            min-[480px]:w-[54px] min-[480px]:h-[54px]
            min-[560px]:w-[64px] min-[560px]:h-[64px]
            min-[640px]:w-[72px] min-[640px]:h-[72px]
            min-[720px]:w-[82px] min-[720px]:h-[82px]
            min-[860px]:w-[98px] min-[860px]:h-[98px]
            min-[980px]:w-[111px] min-[980px]:h-[111px]
            min-[1080px]:w-[123px] min-[1080px]:h-[123px]
            min-[1200px]:w-[136px] min-[1200px]:h-[136px]
            min-[1360px]:w-[154px] min-[1360px]:h-[154px]
            min-[1440px]:w-[164px] min-[1440px]:h-[164px]
          "
        />

        {/* Triangle green — right near-edge (~2px), upper-mid band (~28%) */}
        <img
          src="/ornaments/hero-section-4/ornament-triangle-green-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            right-[160px] top-[2%]
            w-[61px] h-[61px]
            min-[480px]:w-[72px] min-[480px]:h-[72px]
            min-[560px]:w-[85px] min-[560px]:h-[85px]
            min-[640px]:w-[96px] min-[640px]:h-[96px]
            min-[720px]:w-[110px] min-[720px]:h-[110px]
            min-[860px]:w-[132px] min-[860px]:h-[132px]
            min-[980px]:w-[149px] min-[980px]:h-[149px]
            min-[1080px]:w-[165px] min-[1080px]:h-[165px]
            min-[1200px]:w-[182px] min-[1200px]:h-[182px]
            min-[1360px]:w-[207px] min-[1360px]:h-[207px]
            min-[1440px]:w-[220px] min-[1440px]:h-[220px]
          "
        />

        {/* Wave green — right interior (~72%), mid band (~48%) */}
        <img
          src="/ornaments/hero-section-4/ornament-wave-green-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            left-[78%]
            top-[56%]
            min-[640px]:top-[52%]
            min-[720px]:top-[48%]
            w-[92px] h-[92px]
            min-[480px]:w-[109px] min-[480px]:h-[109px]
            min-[560px]:w-[128px] min-[560px]:h-[128px]
            min-[640px]:w-[145px] min-[640px]:h-[145px]
            min-[720px]:w-[165px] min-[720px]:h-[165px]
            min-[860px]:w-[198px] min-[860px]:h-[198px]
            min-[980px]:w-[224px] min-[980px]:h-[224px]
            min-[1080px]:w-[247px] min-[1080px]:h-[247px]
            min-[1200px]:w-[274px] min-[1200px]:h-[274px]
            min-[1360px]:w-[310px] min-[1360px]:h-[310px]
            min-[1440px]:w-[330px] min-[1440px]:h-[330px]
          "
        />

        {/* Cylinder white — far right edge, bottom band (~68%) */}
        <img
          src="/ornaments/hero-section-4/ornament-cylender-white-right.svg"
          alt="" aria-hidden="true"
          className="
            hidden min-[480px]:block
            absolute pointer-events-none
            right-[-80px] top-[6%]
            w-[106px] h-[106px]
            min-[480px]:w-[125px] min-[480px]:h-[125px]
            min-[560px]:w-[148px] min-[560px]:h-[148px]
            min-[640px]:w-[167px] min-[640px]:h-[167px]
            min-[720px]:w-[190px] min-[720px]:h-[190px]
            min-[860px]:w-[228px] min-[860px]:h-[228px]
            min-[980px]:w-[258px] min-[980px]:h-[258px]
            min-[1080px]:w-[285px] min-[1080px]:h-[285px]
            min-[1200px]:w-[315px] min-[1200px]:h-[315px]
            min-[1360px]:w-[357px] min-[1360px]:h-[357px]
            min-[1440px]:w-[380px] min-[1440px]:h-[380px]
          "
        />

        {/* ── CONTENT ── */}
        <div
          className="
            relative z-10
            flex flex-col items-center text-center
            px-4 py-10
            min-[560px]:px-8 min-[560px]:py-12
            min-[860px]:px-16 min-[860px]:py-16
            min-[1200px]:px-[120px] min-[1200px]:py-24
          "
        >
          {/* Heading — forced 2 lines */}
          <h2
            className="
              [font-family:var(--font-poppins)] font-semibold text-white
              leading-[120%] tracking-[-0.01em]
              text-[24px]
              min-[480px]:text-[28px]
              min-[640px]:text-[32px]
              min-[860px]:text-[38px]
              min-[1080px]:text-[44px]
              max-w-[720px]
            "
          >
            Unlock Your Potential as a <br />Creator with ByteSpace
          </h2>

          {/* Subheading */}
          <p
            className="
              mt-10
              [font-family:var(--font-satoshi)] font-normal text-white/80
              leading-[160%] tracking-normal
              text-[14px]
              min-[480px]:text-[15px]
              min-[1080px]:text-[18px]
              max-w-[964px]
              min-[860px]:max-w-[964px]
            "
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          {/* CTA Button */}
          <Button className="mt-8">
            Join as Creator
          </Button>
        </div>

      </div>
    </section>
  );
}
