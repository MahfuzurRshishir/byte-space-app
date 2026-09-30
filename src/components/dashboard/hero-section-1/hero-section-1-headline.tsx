export default function HeroSection1Headline() {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-4">
      {/* Headline */}
      <h1
        className="
          font-display font-semibold text-white text-center leading-[120%] tracking-[-0.01em]
          text-[28px]
          min-[450px]:text-[32px]
          min-[560px]:text-[36px]
          min-[640px]:text-[40px]
          min-[720px]:text-[46px]
          min-[860px]:text-[52px]
          min-[980px]:text-[58px]
          min-[1080px]:text-[64px]
          min-[1200px]:text-[72px]
        "
      >
        Get Access to Hundreds <br /> Courses Available
      </h1>

      {/* Subtext */}
      <p
        className="
          font-sans font-normal text-center leading-[160%] tracking-normal text-text-muted
          w-full
          min-[1080px]:max-w-[600px]
          text-[14px]
          min-[560px]:text-[15px]
          min-[640px]:text-[16px]
          min-[1080px]:text-[18px]
        "
      >
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>
    </div>
  );
}
