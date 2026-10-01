import CoursesHeroSearch from "@/components/courses/courses-hero/courses-hero-search";

export default function CoursesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Content container */}
      <div
        className="
          relative z-10 w-full max-w-[1440px] mx-auto
          flex flex-col items-center gap-6
          py-10  px-4
          min-[480px]:py-12
          min-[640px]:py-14 min-[640px]:gap-8
          min-[980px]:py-16
          min-[1200px]:py-20
        "
      >
        {/* Heading */}
        <h1
          className="
            [font-family:var(--font-poppins)] font-semibold text-white text-center
            leading-[120%] tracking-[-0.01em]
            text-[24px]
            min-[480px]:text-[28px]
            min-[640px]:text-[32px]
            min-[980px]:text-[38px]
            min-[1200px]:text-[44px]
            text-center
          "
        >
          Find Your Next Course
        </h1>

        {/* Search bar */}
        <CoursesHeroSearch />
      </div>

    </section>
  );
}
