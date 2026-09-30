import HeroSection2Card from "@/components/dashboard/hero-section-2/hero-section-2-card";


export default function HeroSection3Visual() {
  return (
    <div className="relative w-full flex justify-center min-[980px]:justify-end">

      {/* Course card — bottom-left edge of student image */}
      <div
        className="
          absolute z-[1]
          bottom-0
          min-[980px]:bottom-[8%]
          min-[1080px]:bottom-[12%]
          min-[1200px]:bottom-[16%]
          min-[1440px]:bottom-[20%]
          left-[calc(50%-120px)]
          min-[480px]:left-[calc(50%-145px)]
          min-[640px]:left-[calc(50%-170px)]
          min-[860px]:left-[calc(50%-195px)]
          min-[980px]:left-[0%]
          w-[120px]
          min-[480px]:w-[148px]
          min-[640px]:w-[174px]
          min-[860px]:w-[200px]
          min-[980px]:w-[170px]
          min-[1080px]:w-[192px]
          min-[1200px]:w-[228px]
          min-[1440px]:w-[280px]
          max-w-[373px]
        "
      >
        <HeroSection2Card
          image="/dashboard-section-2/img1.png"
          title="Learn Figma from Basic"
          author="punspearl studio"
          rating={4.5}
          price={25}
        />
      </div>

      {/* Student image — normal flow, drives container height */}
      <img
        src="/img-hero-frame-1.svg"
        alt="Student with headphones and laptop"
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

      {/* Progress card — top-right edge of student image */}
      <div
        className="
          absolute z-[3]
          top-[8%]
          min-[980px]:top-[22%]
          min-[1080px]:top-[26%]
          min-[1200px]:top-[30%]
          min-[1440px]:top-[34%]
          right-[calc(50%-120px)]
          min-[480px]:right-[calc(50%-145px)]
          min-[640px]:right-[calc(50%-170px)]
          min-[860px]:right-[calc(50%-195px)]
          min-[980px]:right-[4%]
          min-[1080px]:right-[6%]
          min-[1200px]:right-[8%]
          min-[1440px]:right-[10%]
          bg-white rounded-[16px] shadow-[0_4px_24px_0_rgba(0,0,0,0.10)]
          flex flex-col gap-[5px] justify-center
          p-[8px]
          min-[480px]:p-[10px]
          min-[640px]:p-[11px]
          min-[860px]:p-[13px]
          min-[980px]:p-[11px]
          min-[1080px]:p-[13px]
          min-[1200px]:p-[14px]
          min-[1440px]:p-[16px]
          w-[84px]
          min-[480px]:w-[100px]
          min-[640px]:w-[118px]
          min-[860px]:w-[136px]
          min-[980px]:w-[116px]
          min-[1080px]:w-[130px]
          min-[1200px]:w-[155px]
          min-[1440px]:w-[190px]
          max-w-[232px]
        "
      >
        <p className="
          [font-family:var(--font-satoshi)] font-medium text-[#242528] leading-[120%]
          text-[7px] min-[480px]:text-[8px] min-[640px]:text-[9px]
          min-[860px]:text-[10px] min-[1080px]:text-[11px] min-[1200px]:text-[12px]
        ">
          Learning Progress
        </p>
        <p className="
          [font-family:var(--font-poppins)] font-semibold text-[#242528]
          leading-[120%] tracking-[-0.01em]
          text-[18px] min-[480px]:text-[22px] min-[640px]:text-[26px]
          min-[860px]:text-[30px] min-[980px]:text-[24px] min-[1080px]:text-[28px]
          min-[1200px]:text-[34px] min-[1440px]:text-[40px]
        ">
          55%
        </p>
        <div className="
          w-full bg-[#F6F6F6] rounded-[24px]
          h-[4px] min-[640px]:h-[5px] min-[860px]:h-[6px] min-[1200px]:h-[8px]
        ">
          <div className="h-full bg-[#D4FB20] rounded-[24px] w-[55%]" />
        </div>
      </div>

      {/* Ornament — positioned relative to student image right edge */}
      <img
        src="/ornaments/hero-section-3/ornament-wave-white-right.svg"
        alt="" aria-hidden="true"
        className="
          hidden min-[640px]:block
          absolute pointer-events-none z-[4]
          top-[4%]
          right-[calc(50%-155px)]
          min-[480px]:right-[calc(50%-178px)]
          min-[640px]:right-[calc(50%-205px)]
          min-[860px]:right-[calc(50%-230px)]
          min-[980px]:right-[-60px]
          min-[1080px]:right-[-50px]
          min-[1200px]:right-[-40px]
          min-[1360px]:right-[-30px]
          min-[1440px]:right-[-20px]
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
