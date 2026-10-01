import type { CreatorProfile, CreatorStats } from "@/lib/types/creator";
import CreatorHeroProfile from "@/components/creators/creator-hero/creator-hero-profile";
import CreatorHeroStats from "@/components/creators/creator-hero/creator-hero-stats";

interface CreatorHeroProps {
  profile: CreatorProfile;
  stats: CreatorStats;
}

export default function CreatorHero({ profile, stats }: CreatorHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-primary">

      {/* Grid texture overlay — matches navbar + hero-section-1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Content container */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] mx-auto
          flex flex-col gap-6
          py-8   px-4
          min-[560px]:py-10  min-[560px]:px-8
          min-[720px]:py-12  min-[720px]:px-12
          min-[980px]:py-14  min-[980px]:px-16
          min-[1200px]:py-16 min-[1200px]:px-[120px]
          min-[640px]:gap-8
        "
      >
        <CreatorHeroProfile profile={profile} />

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        <CreatorHeroStats stats={stats} />
      </div>

    </section>
  );
}
