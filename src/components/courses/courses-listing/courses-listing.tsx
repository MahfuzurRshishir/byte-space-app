import type { CourseCardProps } from "@/lib/types/course";
import CoursesListingFilter from "@/components/courses/courses-listing/courses-listing-filter";
import CoursesListingChips from "@/components/courses/courses-listing/courses-listing-chips";
import CoursesListingPagination from "@/components/courses/courses-listing/courses-listing-pagination";

interface CoursesListingProps {
  courses: CourseCardProps[];
}

export default function CoursesListing({ courses }: CoursesListingProps) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          flex flex-col gap-6
          py-8   px-4
          min-[560px]:py-10  min-[560px]:px-8
          min-[720px]:py-12  min-[720px]:px-12
          min-[980px]:py-14  min-[980px]:px-16
          min-[1200px]:py-16 min-[1200px]:px-[120px]
          min-[640px]:gap-8
          min-[1200px]:gap-10
        "
      >
        {/* Row 1 — filter toolbar */}
        <CoursesListingFilter />

        {/* Row 2 — category chips */}
        <CoursesListingChips />

        {/* Row 3 — paginated course grid + pagination controls */}
        <CoursesListingPagination courses={courses} perPage={21} />
      </div>
    </section>
  );
}
