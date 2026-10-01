import Button from "@/components/ui/button";
import {
  FilterIcon,
  LevelIcon,
  CategoryIcon,
  MostRelevantIcon,
} from "@/lib/svg/creators/creatorsIcons";

const iconClass =
  "[&>svg]:w-[14px] [&>svg]:h-[14px] min-[480px]:[&>svg]:w-[16px] min-[480px]:[&>svg]:h-[16px] min-[980px]:[&>svg]:w-[20px] min-[980px]:[&>svg]:h-[20px]";

export default function CoursesListingFilter() {
  return (
    <div className="flex items-center justify-between gap-2 flex-wrap min-[640px]:gap-3">

      {/* Left — filter pills */}
      <div className="flex items-center gap-1.5 flex-wrap min-[480px]:gap-2">
        <Button variant="filter" aria-label="Filter courses" className={iconClass}>
          <FilterIcon />
          Filter
        </Button>

        <Button variant="filter" aria-label="Filter by level" className={iconClass}>
          <LevelIcon />
          Level
        </Button>

        <Button variant="filter" aria-label="Filter by category" className={iconClass}>
          <CategoryIcon />
          Category
        </Button>
      </div>

      {/* Right — sort */}
      <Button variant="filter" aria-label="Sort courses" className={iconClass}>
        <MostRelevantIcon />
        Most relevant
      </Button>

    </div>
  );
}
