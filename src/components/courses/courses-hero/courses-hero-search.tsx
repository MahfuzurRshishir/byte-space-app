import { SearchIcon } from "@/lib/svg/dashboard/searchIcon";
import { CevronDown } from "@/lib/svg/courses/coursesIcons";
import Button from "@/components/ui/button";

export default function CoursesHeroSearch() {
  return (
    <div
      className="
        flex flex-wrap justify-center items-center gap-3 w-full
        max-w-[462px]
        min-[600px]:flex-nowrap min-[600px]:max-w-none
        min-[600px]:max-w-[560px]
        min-[640px]:max-w-[620px]
        min-[980px]:max-w-[680px]
        min-[1200px]:max-w-[740px]
      "
    >
      {/* Search input */}
      <div
        className="
          flex items-center gap-2 w-full bg-white rounded-full
          max-w-[462px]
          px-4 h-[40px]
          min-[480px]:px-5 min-[480px]:h-[44px]
          min-[600px]:flex-1
          min-[640px]:h-[46px]
          min-[980px]:h-[50px] min-[980px]:px-6
        "
      >
        <span className="shrink-0">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search"
          aria-label="Search courses"
          className="
            flex-1 bg-transparent outline-none
            [font-family:var(--font-satoshi)] font-normal leading-[160%] tracking-normal
            text-[#82868E] placeholder:text-[#82868E]
            text-[13px]
            min-[480px]:text-[14px]
            min-[640px]:text-[15px]
            min-[980px]:text-[16px]
          "
        />
      </div>

      {/* Courses button */}
      <Button
        variant="primary"
        icon={<CevronDown />}
        aria-label="Filter by Courses"
        className="
          shrink-0 whitespace-nowrap w-full
          max-w-[148px]
        "
      >
        Courses
      </Button>
    </div>
  );
}
