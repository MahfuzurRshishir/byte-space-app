"use client";

import { useState } from "react";

const CHIPS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const chipBase =
  "shrink-0 flex items-center justify-center rounded-[24px] font-normal leading-[160%] tracking-normal [font-family:var(--font-satoshi)] cursor-pointer transition-colors duration-150 px-4 min-[640px]:px-5 min-[1200px]:px-6 h-[36px] min-[640px]:h-[39px] min-[1200px]:h-[43px] text-[11px] min-[480px]:text-[12px] min-[640px]:text-[13px] min-[1080px]:text-[14px] min-[1200px]:text-[15px]";

const chipSelected = chipBase + " bg-[#D4FB20] text-[#242528]";
const chipDefault = chipBase + " bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#ebebeb]";

export default function HeroSection2Chips() {
  const [selected, setSelected] = useState("Featured");

  const renderChip = (chip: string) => {
    const isSelected = chip === selected;
    const isMore = chip === "+ More";

    if (isMore) {
      return (
        <button
          key={chip}
          className="shrink-0 flex items-center justify-center font-normal leading-[160%] tracking-normal [font-family:var(--font-satoshi)] cursor-pointer text-[#003BE2] text-[11px] min-[480px]:text-[12px] min-[640px]:text-[13px] min-[1080px]:text-[14px] min-[1200px]:text-[15px] h-[36px] min-[640px]:h-[39px] min-[1200px]:h-[43px]"
        >
          {chip}
        </button>
      );
    }

    return (
      <button
        key={chip}
        onClick={() => setSelected(chip)}
        className={isSelected ? chipSelected : chipDefault}
      >
        {chip}
      </button>
    );
  };

  return (
    <div className="w-full -mx-4 min-[560px]:-mx-8 min-[720px]:-mx-12 min-[980px]:-mx-16 min-[1200px]:-mx-24 min-[1440px]:-mx-[275px]">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 min-[640px]:gap-x-4 min-[640px]:gap-y-3 min-[1200px]:gap-x-[18px] min-[1200px]:gap-y-4">
        {CHIPS.map(renderChip)}
      </div>
    </div>
  );
}
