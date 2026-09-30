import { StarIcon } from "@/lib/svg/dashboard/yellowStarIcon";

export interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export default function HeroSection2Card({
  image,
  title,
  author,
  rating,
  price,
}: CourseCardProps) {
  return (
    <div
      className="
        flex flex-col bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px]
        w-full max-w-[373px]
        overflow-hidden
        transition-shadow duration-300 ease-in-out
        hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
      "
    >
      {/* Thumbnail */}
      <div className="w-full px-4 pt-4">
        <div className="w-full overflow-hidden rounded-[16px]" style={{ aspectRatio: "341/196" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 px-4 pt-3 pb-4 flex-1">

        {/* Title row — title + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="
              [font-family:var(--font-poppins)] font-semibold text-[#000000]
              leading-[120%] tracking-[-0.01em]
              text-[16px] min-[640px]:text-[18px] min-[1080px]:text-[20px]
              line-clamp-2
            "
          >
            {title}
          </h3>
          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0 mt-[2px]">
            <span
              className="
                [font-family:var(--font-poppins)] font-semibold text-[#000000]
                text-[13px] min-[1080px]:text-[14px]
                leading-[120%]
              "
            >
              {rating.toFixed(1)}
            </span>
            <StarIcon color="#CED0D3" />
          </div>
        </div>

        {/* Author */}
        <p
          className="
            [font-family:var(--font-satoshi)] font-normal text-[#82868E]
            text-[11px] min-[1080px]:text-[12px]
            leading-[160%] tracking-normal
            -mt-1
          "
        >
          by {author}
        </p>

        {/* Beginner chip + avatar grid */}
        <img
          src="/beginner-chip-avatar-grid.svg"
          alt="Beginner level and student avatars"
          className="w-[238px] h-[32px]"
        />

        {/* Price row */}
        <div className="flex items-baseline gap-1">
          <span
            className="
              [font-family:var(--font-poppins)] font-semibold text-[#003BE2]
              leading-[120%] tracking-[-0.01em]
              text-[16px] min-[1080px]:text-[20px]
            "
          >
            ${price}
          </span>
          <span
            className="
              [font-family:var(--font-satoshi)] font-normal text-[#4F4F4F]
              text-[11px] min-[1080px]:text-[12px]
              leading-[160%] tracking-normal
            "
          >
            /lifetime
          </span>
        </div>

      </div>
    </div>
  );
}
