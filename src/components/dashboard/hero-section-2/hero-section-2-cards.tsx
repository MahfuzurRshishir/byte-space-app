import HeroSection2Card, { CourseCardProps } from "@/components/dashboard/hero-section-2/hero-section-2-card";

const COURSES: CourseCardProps[] = [
  {
    image: "/dashboard-section-2/img1.png",
    title: "Learn Figma from Basic",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
  {
    image: "/dashboard-section-2/img2.png",
    title: "Build Digital Asset",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
  {
    image: "/dashboard-section-2/img3.png",
    title: "the Power of Big Data",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
  {
    image: "/dashboard-section-2/img4.png",
    title: "Balancing Productivity and...",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
  {
    image: "/dashboard-section-2/img5.png",
    title: "Mastering Money Manage...",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
  {
    image: "/dashboard-section-2/img6.png",
    title: "From Idea to Startup Succ...",
    author: "punspearl studio",
    rating: 4.5,
    price: 25,
  },
];

export default function HeroSection2Cards() {
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
        mt-10
      "
    >
      {COURSES.map((course, i) => (
        <HeroSection2Card key={i} {...course} />
      ))}
    </div>
  );
}
