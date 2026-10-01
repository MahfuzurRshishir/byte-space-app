import { COURSES_DATA } from "@/lib/data/courses";
import CoursesHero from "@/components/courses/courses-hero/courses-hero";
import CoursesListing from "@/components/courses/courses-listing/courses-listing";

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <CoursesListing courses={COURSES_DATA.courses} />
    </>
  );
}
