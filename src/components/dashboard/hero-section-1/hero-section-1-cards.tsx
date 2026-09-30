import { StarIcon } from "@/lib/svg/dashboard/yellowStarIcon";

// All cards use percentage-based top/left so they always track
// with the visual container regardless of screen size.
// Breakpoints: 360, 480, 560, 640, 720, 860, 980, 1080, 1200, 1360

// Card 1 — UI/UX Design
export function CardCourse() {
  return (
    <div
      className="
        absolute bg-white flex flex-col justify-center z-[15] rounded-[16px] gap-[4px]
        top-[25%]
        left-[10%]
        min-[480px]:left-[12%]
        min-[560px]:left-[14%]
        min-[640px]:left-[16%]
        min-[720px]:left-[18%]
        min-[860px]:left-[20%]
        min-[980px]:left-[22%]
        min-[1080px]:left-[24%]
        min-[1200px]:left-[26%]
        min-[1360px]:left-[26%]
        p-[6px]
        min-[640px]:p-[8px]
        min-[980px]:p-[12px]
        min-[1200px]:p-[16px]
        w-[80px] h-[28px]
        min-[360px]:w-[90px] min-[360px]:h-[30px]
        min-[480px]:w-[125px] min-[480px]:h-[42px]
        min-[560px]:w-[140px] min-[560px]:h-[47px]
        min-[640px]:w-[156px] min-[640px]:h-[53px]
        min-[720px]:w-[165px] min-[720px]:h-[57px]
        min-[860px]:w-[175px] min-[860px]:h-[60px]
        min-[980px]:w-[184px] min-[980px]:h-[62px]
        min-[1080px]:w-[196px] min-[1080px]:h-[66px]
        min-[1200px]:w-[208px] min-[1200px]:h-[70px]
        min-[1360px]:w-[208px] min-[1360px]:h-[70px]
      "
    >
      <p className="
        font-sans font-[500] leading-[120%] tracking-normal text-[#242528]
        text-[5px]
        min-[360px]:text-[6px]
        min-[480px]:text-[8px]
        min-[560px]:text-[9px]
        min-[640px]:text-[10px]
        min-[720px]:text-[11px]
        min-[860px]:text-[12px]
        min-[980px]:text-[12px]
        min-[1080px]:text-[13px]
        min-[1200px]:text-[14px]
      ">
        UI/UX Design
      </p>
      <p className="
        font-sans font-[400] leading-[160%] tracking-normal text-[#82868E]
        text-[4px]
        min-[360px]:text-[5px]
        min-[480px]:text-[6px]
        min-[560px]:text-[7px]
        min-[640px]:text-[8px]
        min-[720px]:text-[8px]
        min-[860px]:text-[9px]
        min-[980px]:text-[9px]
        min-[1080px]:text-[10px]
        min-[1200px]:text-[11px]
      ">
        200 Courses · 1000+ Students
      </p>
    </div>
  );
}

// Card 2 — Learning Progress
export function CardProgress() {
  return (
    <div
      className="
        absolute bg-white flex flex-col justify-center z-[15] rounded-[16px] gap-[4px]
        top-[28%] left-[55%]
        p-[6px]
        min-[640px]:p-[8px]
        min-[980px]:p-[12px]
        min-[1200px]:p-[16px]
        w-[90px] h-[50px]
        min-[360px]:w-[100px] min-[360px]:h-[56px]
        min-[480px]:w-[139px] min-[480px]:h-[79px]
        min-[560px]:w-[155px] min-[560px]:h-[88px]
        min-[640px]:w-[174px] min-[640px]:h-[98px]
        min-[720px]:w-[184px] min-[720px]:h-[104px]
        min-[860px]:w-[196px] min-[860px]:h-[110px]
        min-[980px]:w-[205px] min-[980px]:h-[116px]
        min-[1080px]:w-[218px] min-[1080px]:h-[123px]
        min-[1200px]:w-[232px] min-[1200px]:h-[131px]
        min-[1360px]:w-[232px] min-[1360px]:h-[131px]
      "
    >
      <p className="
        font-sans font-[500] leading-[120%] tracking-normal text-[#242528]
        text-[5px]
        min-[360px]:text-[6px]
        min-[480px]:text-[7px]
        min-[560px]:text-[8px]
        min-[640px]:text-[9px]
        min-[720px]:text-[10px]
        min-[860px]:text-[11px]
        min-[980px]:text-[11px]
        min-[1080px]:text-[12px]
        min-[1200px]:text-[14px]
      ">
        Learning Progress
      </p>
      <p
        className="
          font-display font-semibold text-[#242528]
          text-[18px]
          min-[360px]:text-[20px]
          min-[480px]:text-[28px]
          min-[560px]:text-[31px]
          min-[640px]:text-[34px]
          min-[720px]:text-[36px]
          min-[860px]:text-[38px]
          min-[980px]:text-[40px]
          min-[1080px]:text-[44px]
          min-[1200px]:text-[48px]
        "
        style={{ lineHeight: "120%", letterSpacing: "-0.01em" }}
      >
        55%
      </p>
      {/* Progress bar */}
      <div className="w-full bg-[#F6F6F6] rounded-[24px]" style={{ height: "8px" }}>
        <div className="h-full bg-[#D4FB20] rounded-[24px]" style={{ width: "55%" }} />
      </div>
    </div>
  );
}

// Card 3 — Happy Students
export function CardStudents() {
  return (
    <div
      className="
        absolute bg-white flex flex-col justify-center z-[15] rounded-[16px] gap-[4px]
        top-[58%]
        left-[calc(50%-20px)]
        min-[480px]:left-[calc(50%-10px)]
        min-[560px]:left-[calc(50%+0px)]
        min-[640px]:left-[calc(50%+10px)]
        min-[720px]:left-[calc(50%+20px)]
        min-[860px]:left-[calc(50%+30px)]
        min-[980px]:left-[38%]
        min-[1080px]:left-[40%]
        min-[1200px]:left-[42%]
        min-[1360px]:left-[42%]
        p-[6px]
        min-[640px]:p-[8px]
        min-[980px]:p-[12px]
        min-[1200px]:p-[16px]
        w-[100px] h-[47px]
        min-[360px]:w-[110px] min-[360px]:h-[52px]
        min-[480px]:w-[155px] min-[480px]:h-[73px]
        min-[560px]:w-[173px] min-[560px]:h-[82px]
        min-[640px]:w-[194px] min-[640px]:h-[91px]
        min-[720px]:w-[205px] min-[720px]:h-[96px]
        min-[860px]:w-[218px] min-[860px]:h-[102px]
        min-[980px]:w-[228px] min-[980px]:h-[107px]
        min-[1080px]:w-[243px] min-[1080px]:h-[114px]
        min-[1200px]:w-[258px] min-[1200px]:h-[121px]
        min-[1360px]:w-[258px] min-[1360px]:h-[121px]
      "
      style={{ backdropFilter: "blur(20px)" }}
    >
      <p className="
        font-sans font-[500] leading-[120%] tracking-normal text-[#242528]
        text-[5px]
        min-[360px]:text-[6px]
        min-[480px]:text-[8px]
        min-[560px]:text-[9px]
        min-[640px]:text-[10px]
        min-[720px]:text-[11px]
        min-[860px]:text-[12px]
        min-[980px]:text-[13px]
        min-[1080px]:text-[14px]
        min-[1200px]:text-[16px]
      ">
        Happy Students
      </p>
      <div className="flex items-center gap-1">
        <p className="
          font-sans font-[400] leading-[160%] tracking-normal text-[#82868E]
          text-[4px]
          min-[360px]:text-[5px]
          min-[480px]:text-[6px]
          min-[560px]:text-[7px]
          min-[640px]:text-[8px]
          min-[720px]:text-[9px]
          min-[860px]:text-[10px]
          min-[980px]:text-[10px]
          min-[1080px]:text-[11px]
          min-[1200px]:text-[12px]
        ">
          4.5 (240)
        </p>
        <StarIcon />
      </div>
      {/* Avatar grid */}
      <img src="/cricle-avatar-grid.svg" alt="Student avatars" className="w-full" />
    </div>
  );
}
