import { SearchIcon } from "@/lib/svg/dashboard/searchIcon";

export default function HeroSection1Search() {
  return (
    <div
      className="
        flex w-full px-4
        flex-col gap-2
        min-[450px]:flex-row min-[450px]:items-stretch min-[450px]:gap-2
        max-w-full
        min-[560px]:max-w-[380px] min-[560px]:px-0
        min-[720px]:max-w-[440px]
        min-[980px]:max-w-[500px]
        min-[1200px]:max-w-[565px]
      "
    >
      {/* Search input */}
      <div
        className="
          flex items-center gap-2 flex-1 bg-white rounded-[24px]
          h-[34px] px-3
          min-[450px]:h-[36px] min-[450px]:px-4
          min-[560px]:h-[38px]
          min-[720px]:h-[40px] min-[720px]:px-5
          min-[980px]:h-[52px]
          min-[1200px]:h-[46px] min-[1200px]:px-6
        "
      >
        <span className="shrink-0">
          <SearchIcon />
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="
            flex-1 bg-transparent outline-none font-sans font-[200] leading-[160%] tracking-normal text-[#82868E] placeholder:text-[#82868E] placeholder:font-[200]
            text-[11px]
            min-[450px]:text-[12px]
            min-[560px]:text-[13px]
            min-[720px]:text-[14px]
            min-[860px]:text-[15px]
            min-[1080px]:text-[16px]
            min-[1200px]:text-[18px]
          "
        />
      </div>

      {/* Search button */}
      <button
        className="
          shrink-0 flex items-center justify-center
          font-sans font-[300] leading-[120%] tracking-normal text-[#242528] bg-[#D4FB20] rounded-[24px] cursor-pointer
          w-full max-w-[72px] mx-auto h-[34px] px-3
          min-[450px]:max-w-none min-[450px]:mx-0 min-[450px]:w-[72px] min-[450px]:h-[36px] min-[450px]:px-4
          min-[560px]:w-[80px] min-[560px]:h-[38px]
          min-[720px]:w-[88px] min-[720px]:h-[40px] min-[720px]:px-5
          min-[980px]:w-[96px] min-[980px]:h-[52px]
          min-[1200px]:w-[104px] min-[1200px]:h-[46px] min-[1200px]:px-6
          text-[11px]
          min-[450px]:text-[12px]
          min-[560px]:text-[13px]
          min-[720px]:text-[14px]
          min-[860px]:text-[15px]
          min-[1080px]:text-[16px]
          min-[1200px]:text-[18px]
        "
      >
        Search
      </button>
    </div>
  );
}
