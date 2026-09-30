const TESTIMONIALS = [
  {
    avatar: "/dashboard-section-4/avatar1.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    avatar: "/dashboard-section-4/avatar2.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    avatar: "/dashboard-section-4/avatar3.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function HeroSection4Testimonials() {
  return (
    <section className="relative w-full bg-white">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-4 py-8
          min-[560px]:px-8 min-[560px]:py-10
          min-[720px]:px-12 min-[720px]:py-12
          min-[980px]:px-16
          min-[1200px]:px-[120px] min-[1200px]:py-16
        "
      >
        {/* Top row — heading left, paragraph right */}
        <div
          className="
            flex flex-col gap-4
            min-[480px]:gap-6
            min-[860px]:flex-row min-[860px]:items-start min-[860px]:gap-12
            min-[1200px]:gap-16
            mb-8 min-[860px]:mb-10 min-[1200px]:mb-12
          "
        >
          {/* Left — heading */}
          <h2
            className="
              [font-family:var(--font-poppins)] font-semibold text-[#242528]
              leading-[120%] tracking-[-0.01em]
              text-[26px]
              min-[480px]:text-[30px]
              min-[640px]:text-[34px]
              min-[860px]:text-[38px]
              min-[1080px]:text-[44px]
              min-[860px]:flex-1
            "
          >
            Discover What Our <br />Community Is Saying
          </h2>

          {/* Right — paragraph */}
          <p
            className="
              [font-family:var(--font-satoshi)] font-normal text-[#4B4C53]
              leading-[160%] tracking-normal
              text-[14px]
              min-[480px]:text-[15px]
              min-[1080px]:text-[16px]
              min-[860px]:flex-1 min-[860px]:pt-2
              mt-3 min-[860px]:mt-0
            "
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey
            of learning and creating on our platform. Explore testimonials that
            reflect the diverse perspectives of enthusiastic learners and
            accomplished creators.
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          className="
            flex flex-wrap justify-center gap-6
            min-[980px]:grid min-[980px]:grid-cols-3
            min-[980px]:gap-8
            min-[1200px]:gap-10
          "
        >
          {TESTIMONIALS.map(({ avatar, name, role, quote }) => (
            <div
              key={name}
              className="
                flex flex-col gap-5
                bg-white rounded-[24px]
                p-6
                min-[980px]:p-7
                min-[1200px]:p-8
                max-w-[374px] w-full
                min-[640px]:w-[calc(50%-12px)]
                min-[980px]:w-auto min-[980px]:mx-0
                shadow-[0_4px_32px_0_rgba(0,0,0,0.07)]
                hover:shadow-[0_16px_64px_0_rgba(0,59,226,0.25)]
                transition-shadow duration-300
              "
            >
              {/* Avatar circle — 80×80px */}
              <div className="w-[60px] h-[60px] min-[980px]:w-[70px] min-[980px]:h-[70px] min-[1200px]:w-[80px] min-[1200px]:h-[80px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + role */}
              <div className="flex flex-col gap-[2px]">
                <p
                  className="
                    [font-family:var(--font-poppins)] font-semibold text-[#000000]
                    leading-[120%] tracking-[-0.01em]
                    text-[16px]
                    min-[980px]:text-[18px]
                    min-[1200px]:text-[20px]
                  "
                >
                  {name}
                </p>
                <p
                  className="
                    [font-family:var(--font-satoshi)] font-normal text-[#003BE2]
                    leading-[160%] tracking-normal
                    text-[14px]
                    min-[980px]:text-[16px]
                    min-[1200px]:text-[18px]
                  "
                >
                  {role}
                </p>
              </div>

              {/* Quote */}
              <p
                className="
                  [font-family:var(--font-satoshi)] font-normal text-[#4F4F4F]
                  leading-[160%] tracking-normal
                  text-[14px]
                  min-[980px]:text-[16px]
                  min-[1200px]:text-[18px]
                "
              >
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
