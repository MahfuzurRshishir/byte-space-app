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

export default function HeroSection1Logos() {
  return (
    <section className="w-full bg-[#F5F5F6]">
      {/* Inner container */}
      <div
        className="
          mx-auto w-full max-w-[1440px]
          py-8   px-4
          min-[560px]:py-10  min-[560px]:px-8
          min-[720px]:py-12  min-[720px]:px-12
          min-[980px]:py-14  min-[980px]:px-16
          min-[1200px]:py-16 min-[1200px]:px-24
          min-[1440px]:py-20 min-[1440px]:px-[154px]
        "
      >
        <div
          className="
            flex flex-wrap items-center justify-center
            gap-6
            min-[560px]:gap-8
            min-[720px]:gap-10
            min-[980px]:gap-12
            min-[1200px]:gap-14
            min-[1440px]:gap-[72px]
          "
        >
          {icons.map((Icon, i) => (
            <div
              key={i}
              className="
                shrink-0
                [&>svg]:w-full [&>svg]:h-auto
                w-[90px]
                min-[480px]:w-[110px]
                min-[640px]:w-[130px]
                min-[860px]:w-[148px]
                min-[1080px]:w-[158px]
                min-[1200px]:w-[167px]
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
