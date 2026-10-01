import HeroSection2Card from "@/components/dashboard/hero-section-2/hero-section-2-card";
import type { CourseCardProps } from "@/lib/types/course";

interface CoursesListingGridProps {
  courses: CourseCardProps[];
}

export default function CoursesListingGrid({ courses }: CoursesListingGridProps) {
  return (
    <div
      className="
        w-full grid justify-items-center
        grid-cols-1
        gap-6
        min-[640px]:grid-cols-2 min-[640px]:gap-8
        min-[1080px]:grid-cols-3
        min-[1200px]:gap-10
        min-[1440px]:gap-[40px]
      "
    >
      {courses.map((course, i) => (
        <HeroSection2Card key={i} {...course} />
      ))}
    </div>
  );
}
