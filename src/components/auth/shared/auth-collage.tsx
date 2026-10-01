import { StarIcon } from "@/lib/svg/dashboard/yellowStarIcon";

// ─── Mini course card 
function CourseCard({
  image,
  title,
  author,
  rating,
  price,
  className = "",
}: {
  image: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col bg-white border border-[#CED0D3] rounded-[16px] overflow-hidden ${className}`}
      style={{ width: "373px", height: "384px" }}
    >
      {/* Thumbnail */}
      <div className="w-full px-3 pt-3">
        <div className="w-full overflow-hidden rounded-[10px]" style={{ aspectRatio: "341/196" }}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 px-3 pt-6 pb-3">
        <div className="flex items-start justify-between gap-1">
          <h3 className="[font-family:var(--font-poppins)] font-semibold text-[#000000] leading-[120%] tracking-[-0.01em] text-[18px] line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-0.5 shrink-0 mt-[1px]">
            <span className="[font-family:var(--font-poppins)] font-semibold text-[#000000] text-[12px] leading-[120%]">
              {rating.toFixed(1)}
            </span>
            <StarIcon color="#CED0D3" />
          </div>
        </div>

        <p className="[font-family:var(--font-satoshi)] font-normal text-[#82868E] text-[12px] leading-[160%] -mt-1">
          by {author}
        </p>

        <img
          src="/avatar-grid-2.svg"
          alt="Beginner level and student avatars"
          className="w-[160px] h-auto my-3"
        />

        <div className="flex items-baseline gap-0.5">
          <span className="[font-family:var(--font-poppins)] font-semibold text-[#003BE2] leading-[120%] tracking-[-0.01em] text-[20px]">
            ${price}
          </span>
          <span className="[font-family:var(--font-satoshi)] font-normal text-[#4F4F4F] text-[10px] leading-[160%]">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Happy Students badge
function HappyStudentsBadge() {
  return (
    <div
      className="bg-[#D4FB20] rounded-[12px] p-3 flex flex-col gap-2 shadow-sm"
      style={{ width: "258px", height: "123px" }}
    >
      <p className="[font-family:var(--font-satoshi)] font-[500] text-[#242528] leading-[120%] text-[13px]">
        Happy Students
      </p>
      <div className="flex items-center gap-1">
        <p className="[font-family:var(--font-satoshi)] font-[400] text-[#82868E] leading-[160%] text-[10px]">
          4.5 (240)
        </p>
        <StarIcon color="#003BE2" />
      </div>
      <img src="/circular-avatar-grid-2.svg" alt="Student avatars" className="w-full" />
    </div>
  );
}

// ─── Main collage
export default function AuthCollage() {
  return (
    <div className="relative w-full h-full flex items-start justify-start overflow-visible">

      <style>{`
        .collage-scale {
          transform-origin: top left;
          transform: scale(0.60);
        }
        @media (min-height: 650px) { .collage-scale { transform: scale(0.68); } }
        @media (min-height: 750px) { .collage-scale { transform: scale(0.78); } }
        @media (min-height: 850px) { .collage-scale { transform: scale(0.88); } }
        @media (min-height: 950px) { .collage-scale { transform: scale(0.95); } }
        @media (min-height: 1050px) { .collage-scale { transform: scale(1.00); } }
        @media (min-height: 1150px) { .collage-scale { transform: scale(1.08); } }
        @media (min-height: 1250px) { .collage-scale { transform: scale(1.16); } }
        @media (min-height: 1350px) { .collage-scale { transform: scale(1.24); } }
        @media (min-height: 1440px) { .collage-scale { transform: scale(1.30); } }
      `}</style>

      <div className="collage-scale relative mt-8 ml-6 w-fit">

        {/* Green ring */}
        <img
          src="/ornaments/auth/ornament-ring-green.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[20]"
          style={{ width: "148px", height: "148px", top: "-2%", left: "1%" }}
        />

        {/* Green triangle */}
        <img
          src="/ornaments/auth/ornament-triangle-green.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[20]"
          style={{ width: "188px", height: "188px", bottom: "-58%", left: "-18%" }}
        />

        {/* White wave */}
        <img
          src="/ornaments/auth/ornament-wave-white.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-[20]"
          style={{ width: "175px", height: "175px", bottom: "-32%", right: "-11%" }}
        />

        {/* Back card — "Build Digital Asset" */}
        <div
          className="absolute z-[5] opacity-80"
          style={{ transform: "translate(-32px, 72px)" }}
        >
          <CourseCard
            image="/dashboard-section-2/img2.png"
            title="Build Digital Asset"
            author="punspearl studio"
            rating={4.5}
            price={25}
          />
        </div>

        {/* Front card — "The Power of Big Data" */}
        <div className="relative z-[10]" style={{ marginLeft: "74px", marginTop: "-29px" }}>
          <CourseCard
            image="/dashboard-section-2/img3.png"
            title="the Power of Big Data"
            author="punspearl studio"
            rating={4.5}
            price={25}
          />
        </div>

        {/* Happy Students badge */}
        <div
          className="absolute z-[15]"
          style={{ bottom: "-180px", left: "118px" }}
        >
          <HappyStudentsBadge />
        </div>

      </div>
    </div>
  );
}
