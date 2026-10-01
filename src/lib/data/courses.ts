import type { CoursesData } from "@/lib/types/course";

// 6 available images cycled across all cards
const IMAGES = [
  "/dashboard-section-2/img1.png",
  "/dashboard-section-2/img2.png",
  "/dashboard-section-2/img3.png",
  "/dashboard-section-2/img4.png",
  "/dashboard-section-2/img5.png",
  "/dashboard-section-2/img6.png",
];

const TITLES = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "The Power of Big Data",
  "Balancing Productivity an...",
  "Mastering Money Manage...",
  "From Idea to Startup Succ...",
];

const RATINGS = [4.5, 4.6, 4.5, 4.5, 4.5, 4.5];

// Generate 84 cards (4 full pages of 21) by cycling the 6 base entries
const generateCourses = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    image:  IMAGES[i % IMAGES.length],
    title:  TITLES[i % TITLES.length],
    author: "punspearl studio",
    rating: RATINGS[i % RATINGS.length],
    price:  25,
  }));

export const COURSES_DATA: CoursesData = {
  courses: generateCourses(90),
};
