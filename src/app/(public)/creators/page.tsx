import { CREATOR } from "@/lib/data/creator";
import CreatorHero from "@/components/creators/creator-hero/creator-hero";
import CreatorCourses from "@/components/creators/creator-courses/creator-courses";

export default function CreatorsPage() {
  return (
    <>
      <CreatorHero profile={CREATOR.profile} stats={CREATOR.stats} />
      <CreatorCourses courses={CREATOR.courses} />
    </>
  );
}
