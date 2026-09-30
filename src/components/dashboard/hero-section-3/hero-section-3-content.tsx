import { TickIcon } from "@/lib/svg/dashboard/tickIcon";

const TICK_ITEMS = [
  "Create unlimited courses with rich multimedia",
  "Earn money from your expertise",
  "Track student progress easily",
  "Get built-in marketing tools",
];

export default function HeroSection3Content() {
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
        Create & Manage Courses Easily.
      </h2>

      {/* Subtitle */}
      <p
        className="
          [font-family:var(--font-satoshi)] text-[#4B4C53]
          leading-[160%] tracking-normal
          text-[14px]
          min-[480px]:text-[15px]
          min-[1080px]:text-[18px]
          max-w-[574px]
        "
      >
        <span className="font-semibold">ByteSpace</span>
        <span className="font-light"> supports individuals or entities in the creation, publication, and administration of educational courses.</span>
      </p>

      {/* Tick list */}
      <div className="flex flex-col gap-4 min-[640px]:gap-5 min-[1200px]:gap-6">
        {TICK_ITEMS.map((item, index) => (
          <div key={index} className="flex items-start gap-3 min-[640px]:gap-4">
            <div className="flex-shrink-0 mt-1">
              <TickIcon />
            </div>
            <p
              className="
                [font-family:var(--font-satoshi)] font-medium text-[#242528]
                leading-[120%] tracking-normal
                text-[14px]
                min-[480px]:text-[15px]
                min-[640px]:text-[16px]
                min-[1080px]:text-[18px]
              "
            >
              {item}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
