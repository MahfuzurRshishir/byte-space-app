import type { CreatorProfile } from "@/lib/types/creator";

interface CreatorHeroProfileProps {
  profile: CreatorProfile;
}

export default function CreatorHeroProfile({ profile }: CreatorHeroProfileProps) {
  return (
    <div className="flex flex-col gap-4 min-[640px]:gap-5">

      {/* Avatar + name + badge */}
      <div className="flex items-center gap-4 min-[560px]:gap-5">
        <div className="shrink-0 w-[96px] h-[96px] rounded-[24px] overflow-hidden">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          {/* Name + Creator badge */}
          <div className="flex flex-wrap items-center gap-3">
            <h1
              className="
                [font-family:var(--font-poppins)] font-semibold text-white leading-[120%] tracking-[-0.01em]
                text-[20px] min-[560px]:text-[24px] min-[720px]:text-[28px] min-[980px]:text-[32px]
              "
            >
              {profile.name}
            </h1>
            <span
              className="
                inline-flex items-center
                bg-accent text-[#0D0D0D]
                [font-family:var(--font-poppins)] font-semibold
                text-[11px] min-[560px]:text-[12px]
                leading-none tracking-normal
                px-3 py-1 rounded-[24px]
                h-9
              "
            >
              Creator
            </span>
          </div>

          {/* Tagline */}
          <p
            className="
              [font-family:var(--font-satoshi)] font-normal text-white/70
              text-[13px] min-[560px]:text-[14px] min-[720px]:text-[15px]
              leading-[160%] tracking-normal
            "
          >
            {profile.tagline}
          </p>
        </div>
      </div>

      {/* Bio paragraphs */}
      <div className="flex flex-col gap-2 w-full">
        {profile.bio.map((paragraph, i) => (
          <p
            key={i}
            className="
              [font-family:var(--font-satoshi)] font-normal text-white/80
              text-[13px] min-[560px]:text-[14px] min-[720px]:text-[15px]
              leading-[160%] tracking-normal
            "
          >
            {paragraph}
          </p>
        ))}
      </div>

    </div>
  );
}
