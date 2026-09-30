import { CardCourse, CardProgress, CardStudents } from "@/components/dashboard/hero-section-1/hero-section-1-cards";

export default function HeroSection1Visual() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      {/* Green half circle */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 rounded-full bg-accent
          w-[500px] h-[500px] -bottom-[332px]
          min-[480px]:w-[650px] min-[480px]:h-[650px] min-[480px]:-bottom-[431px]
          min-[640px]:w-[800px] min-[640px]:h-[800px] min-[640px]:-bottom-[531px]
          min-[980px]:w-[950px] min-[980px]:h-[950px] min-[980px]:-bottom-[630px]
          min-[1200px]:w-[1100px] min-[1200px]:h-[1100px] min-[1200px]:-bottom-[730px]
        "
      />

      {/* Student image */}
      <img
        src="/img-hero-frame-1.svg"
        alt="Student with headphones and laptop"
        className="
          relative z-10 max-w-full
          w-[280px]
          min-[480px]:w-[360px]
          min-[640px]:w-[450px]
          min-[980px]:w-[530px]
          min-[1200px]:w-[600px]
        "
      />

      {/* Stat cards */}
      <CardCourse />
      <CardProgress />
      <CardStudents />
    </div>
  );
}
