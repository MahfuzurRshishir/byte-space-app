import { SearchIcon } from "@/lib/svg/dashboard/searchIcon";

export default function HeroSection1Search() {
  return (
    <div className="flex items-center gap-2 w-full max-w-[565px]">
      {/* Search input */}
      <div className="flex items-center gap-2 flex-1 bg-white h-[52px] rounded-[24px] py-3 px-6">
        <span className="shrink-0">
          <SearchIcon />
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="flex-1 bg-transparent outline-none font-sans font-[200] text-[18px] leading-[160%] tracking-normal text-[#82868E] placeholder:text-[#82868E] placeholder:font-[200]"
        />
      </div>

      {/* Search button */}
      <button className="shrink-0 font-sans font-[100] text-[18px] leading-[120%] tracking-normal text-[#242528] bg-[#D4FB20] w-[104px] h-[46px] rounded-[24px] py-3 px-6 cursor-pointer">
        Search
      </button>
    </div>
  );
}
