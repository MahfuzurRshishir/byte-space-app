import type { CourseCardProps } from "@/components/dashboard/hero-section-2/hero-section-2-card";

/** Re-export for convenience so consumers import from one place */
export type { CourseCardProps };

/** Full data shape for the courses listing page */
export interface CoursesData {
  courses: CourseCardProps[];
}
