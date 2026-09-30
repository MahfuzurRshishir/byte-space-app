interface CategoryChipProps {
  icon: React.ReactNode;
  label: string;
}

export default function HeroSection2CategoryChip({ icon, label }: CategoryChipProps) {
  return (
    /* Single chip box — icon + label stacked inside */
    <div
      className="
        flex flex-col items-center justify-center gap-2
        bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px]
        transition-shadow duration-300 ease-in-out
        hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] cursor-pointer
        w-[100px] h-[100px]
        min-[480px]:w-[120px] min-[480px]:h-[120px]
        min-[640px]:w-[140px] min-[640px]:h-[140px]
        min-[1080px]:w-[155px] min-[1080px]:h-[155px]
        min-[1200px]:w-[167px] min-[1200px]:h-[167px]
      "
    >
      {/* Icon */}
      <div className="shrink-0">{icon}</div>

      {/* Label */}
      <span
        className="
          [font-family:var(--font-satoshi)] font-medium text-[#242528] text-center
          leading-[120%] tracking-normal
          text-[11px]
          min-[480px]:text-[12px]
          min-[640px]:text-[13px]
          min-[1080px]:text-[14px]
          min-[1200px]:text-[16px]
        "
      >
        {label}
      </span>
    </div>
  );
}
