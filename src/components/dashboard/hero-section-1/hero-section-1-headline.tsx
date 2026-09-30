export default function HeroSection1Headline() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Headline */}
      <h1 className="font-display font-semibold text-white text-center text-[72px] leading-[120%] tracking-[-0.01em]">
        Get Access to Hundreds <br /> Courses Available
      </h1>

      {/* Subtext */}
      <p className="font-sans font-normal text-center text-[18px] leading-[160%] tracking-normal text-text-muted max-w-[600px]">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>
    </div>
  );
}
