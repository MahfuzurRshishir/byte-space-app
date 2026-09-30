export default function HeroSection2Header() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {/* Heading */}
      <h2
        className="
          font-display font-semibold text-[#040819] text-center leading-[120%] tracking-[-0.01em] [font-family:var(--font-poppins)]
          text-[26px]
          min-[480px]:text-[30px]
          min-[640px]:text-[34px]
          min-[860px]:text-[38px]
          min-[1080px]:text-[42px]
          min-[1200px]:text-[44px]
        "
      >
        Discover Your Passion, <br /> Build Your Skills
      </h2>

      {/* Subheading */}
      <p
        className="
          font-sans font-normal text-[#82868E] text-center leading-[160%] tracking-normal [font-family:var(--font-satoshi)]
          max-w-[520px]
          min-[1080px]:max-w-[580px]
          min-[1200px]:max-w-[920px]
          text-[13px]
          min-[480px]:text-[14px]
          min-[640px]:text-[15px]
          min-[1080px]:text-[16px]
          min-[1200px]:text-[18px]
        "
      >
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>
    </div>
  );
}
