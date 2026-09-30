const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16",  label: "Creators" },
];

export default function HeroSection3Text() {
  return (
    <div className="flex flex-col gap-6 min-[980px]:gap-8 w-full">

      {/* Title */}
      <h2
        className="
          [font-family:var(--font-poppins)] font-semibold text-[#242528]
          leading-[120%] tracking-[-0.01em]
          text-[28px]
          min-[480px]:text-[32px]
          min-[640px]:text-[36px]
          min-[860px]:text-[40px]
          min-[1080px]:text-[44px]
        "
      >
        Your Path to Professional <br /> Growth Starts Here!
      </h2>

      {/* Subtitle */}
      <p
        className="
          [font-family:var(--font-satoshi)] font-normal text-[#4B4C53]
          leading-[160%] tracking-normal
          text-[14px]
          min-[480px]:text-[15px]
          min-[1080px]:text-[18px]
          max-w-[480px]
        "
      >
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are looking
        to sharpen specific skills, gain industry expertise, or embark on a new
        career path entirely, we have the resources you need.
      </p>

      {/* Stats row */}
      <div className="flex items-start gap-8 min-[640px]:gap-10 min-[1080px]:gap-12">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="
                [font-family:var(--font-poppins)] font-medium text-[#003BE2]
                tracking-[-0.01em]
                text-[24px]
                min-[480px]:text-[28px]
                min-[640px]:text-[32px]
                min-[1080px]:text-[36px]
                leading-[44px]
              "
            >
              {value}
            </span>
            <span
              className="
                [font-family:var(--font-satoshi)] font-normal text-[#4B4C53]
                leading-[160%] tracking-normal
                text-[13px]
                min-[480px]:text-[14px]
                min-[1080px]:text-[18px]
              "
            >
              {label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
