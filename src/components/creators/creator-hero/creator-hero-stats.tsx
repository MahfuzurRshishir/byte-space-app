import type { CreatorStats } from "@/lib/types/creator";
import Button from "@/components/ui/button";

interface CreatorHeroStatsProps {
  stats: CreatorStats;
}

export default function CreatorHeroStats({ stats }: CreatorHeroStatsProps) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">

      {/* Stats pills */}
      <div className="flex items-center gap-3">
        {/* Products */}
        <Button variant="stat">
          <span className="text-[#003BE2]">{stats.productCount}</span>
          <span className="text-[#242528]">Products</span>
        </Button>

        {/* Followers */}
        <Button variant="stat">
          <span className="text-[#003BE2]">{stats.followerCount}</span>
          <span className="text-[#242528]">Followers</span>
        </Button>
      </div>

      {/* Follow button */}
      <Button variant="primary">
        Follow
      </Button>

    </div>
  );
}
