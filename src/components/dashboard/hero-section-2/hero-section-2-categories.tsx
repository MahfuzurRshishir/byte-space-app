import HeroSection2CategoryChip from "@/components/dashboard/hero-section-2/hero-section-2-category-chip";
import {
  DesignLogoIcon,
  DevelopmentIcon,
  ItSoftwareLogo,
  BusinessLogo,
  MarketingLogo,
  PhotographyLogo,
} from "@/lib/svg/dashboard/logoIcons";

const CATEGORIES = [
  { icon: <DesignLogoIcon />,     label: "Design" },
  { icon: <DevelopmentIcon />,    label: "Development" },
  { icon: <ItSoftwareLogo />,     label: "IT & Software" },
  { icon: <BusinessLogo />,       label: "Business" },
  { icon: <MarketingLogo />,      label: "Marketing" },
  { icon: <PhotographyLogo />,    label: "Photography" },
];

export default function HeroSection2Categories() {
  return (
    <div className="w-full flex flex-col items-center gap-10 min-[640px]:gap-12 mt-10">

      {/* Heading + subheading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2
          className="
            [font-family:var(--font-poppins)] font-semibold text-[#040819] leading-[120%] tracking-[-0.01em]
            text-[22px]
            min-[480px]:text-[26px]
            min-[640px]:text-[30px]
            min-[860px]:text-[36px]
          "
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p
          className="
            [font-family:var(--font-satoshi)] font-normal text-[#82868E] leading-[160%] tracking-normal text-center
            max-w-[480px] min-[860px]:max-w-[720px] min-[1200px]:max-w-[920px]
            text-[13px]
            min-[480px]:text-[14px]
            min-[640px]:text-[15px]
            min-[1200px]:text-[18px]
            line-clamp-2
            mb-5
          "
        >
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      {/* 6 category chips — 3 cols mobile→ 6 cols desktop */}
      <div
        className="
          w-full grid justify-items-center
          grid-cols-3
          gap-x-4 gap-y-6
          min-[640px]:grid-cols-6 min-[640px]:gap-x-6
          min-[980px]:gap-x-8
          min-[1200px]:gap-x-10
          min-[1440px]:gap-x-[40px]
        "
      >
        {CATEGORIES.map(({ icon, label }) => (
          <HeroSection2CategoryChip key={label} icon={icon} label={label} />
        ))}
      </div>

    </div>
  );
}
