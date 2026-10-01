"use client";

import { useState } from "react";

const CHIPS = [
  "Free trial",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Coding",
];

const chipBase =
  "shrink-0 flex items-center justify-center rounded-[24px] font-normal leading-[160%] tracking-normal " +
  "[font-family:var(--font-satoshi)] cursor-pointer transition-colors duration-150 " +
  "px-4 min-[640px]:px-5 min-[1200px]:px-6 " +
  "h-[36px] min-[640px]:h-[39px] min-[1200px]:h-[43px] " +
  "text-[11px] min-[480px]:text-[12px] min-[640px]:text-[13px] min-[1080px]:text-[14px] min-[1200px]:text-[15px]";

const chipSelected = chipBase + " bg-[#D4FB20] text-[#242528]";
const chipDefault  = chipBase + " bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#ebebeb]";

export default function CoursesListingChips() {
  const [selected, setSelected] = useState("Free trial");

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-x-3 gap-y-3 min-[640px]:gap-x-4 min-[640px]:gap-y-3 min-[1200px]:gap-x-[18px] min-[1200px]:gap-y-4">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setSelected(chip)}
            className={chip === selected ? chipSelected : chipDefault}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
