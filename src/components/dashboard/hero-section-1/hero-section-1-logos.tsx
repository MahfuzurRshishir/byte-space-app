import {
  LogoipsumIcon1,
  LogoipsumIcon2,
  LogoipsumIcon3,
  LogoipsumIcon4,
  LogoipsumIcon5,
} from "@/lib/svg/dashboard/logoIcons";

const icons = [
  LogoipsumIcon1,
  LogoipsumIcon2,
  LogoipsumIcon3,
  LogoipsumIcon4,
  LogoipsumIcon5,
];

// Duplicate icons for seamless infinite loop
const loopIcons = [...icons, ...icons];

export default function HeroSection1Logos() {
  return (
    <section className="w-full bg-[#F5F5F6] overflow-hidden">
      <div className="py-8 min-[560px]:py-10 min-[720px]:py-12 min-[980px]:py-14 min-[1200px]:py-16 min-[1440px]:py-20">
        {/* Track — wide enough to hold 2× icons, animates left by 50% */}
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {loopIcons.map((Icon, i) => (
            <div
              key={i}
              className="
                shrink-0
                [&>svg]:w-full [&>svg]:h-auto
                w-[90px]   mx-6
                min-[480px]:w-[110px] min-[480px]:mx-8
                min-[640px]:w-[130px] min-[640px]:mx-10
                min-[860px]:w-[148px] min-[860px]:mx-12
                min-[1080px]:w-[158px] min-[1080px]:mx-14
                min-[1200px]:w-[167px] min-[1200px]:mx-[72px]
              "
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
