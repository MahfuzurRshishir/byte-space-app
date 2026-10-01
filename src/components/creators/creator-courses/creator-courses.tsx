import type { CourseCardProps } from "@/components/dashboard/hero-section-2/hero-section-2-card";
import CreatorCoursesFilter from "@/components/creators/creator-courses/creator-courses-filter";
import CreatorCoursesGrid from "@/components/creators/creator-courses/creator-courses-grid";

interface CreatorCoursesProps {
  courses: CourseCardProps[];
}

export default function CreatorCourses({ courses }: CreatorCoursesProps) {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          flex flex-col gap-8
          py-8   px-4
          min-[560px]:py-10  min-[560px]:px-8
          min-[720px]:py-12  min-[720px]:px-12
          min-[980px]:py-14  min-[980px]:px-16
          min-[1200px]:py-16 min-[1200px]:px-[120px]
          min-[640px]:gap-10
          min-[1200px]:gap-12
        "
      >
        <CreatorCoursesFilter />
        <CreatorCoursesGrid courses={courses} />
      </div>
    </section>
  );
}
