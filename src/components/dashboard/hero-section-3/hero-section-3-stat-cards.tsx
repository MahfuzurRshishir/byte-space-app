
export function CardTotalRevenue() {
  return (
    <div
      className="
        absolute bg-[#003BE2] flex flex-col justify-center z-[1] rounded-[16px] gap-[4px]
        top-[8%]
        left-[calc(50%-120px)]
        min-[480px]:left-[calc(50%-145px)]
        min-[640px]:left-[calc(50%-170px)]
        min-[860px]:left-[calc(50%-195px)]
        min-[980px]:left-[-5%]
        min-[1080px]:left-[-5%]
        min-[1200px]:left-[-5%]
        min-[1440px]:left-[-5%]
        p-[6px]
        min-[640px]:p-[8px]
        min-[980px]:p-[12px]
        min-[1200px]:p-[16px]
        w-[100px] h-[50px]
        min-[360px]:w-[115px] min-[360px]:h-[58px]
        min-[480px]:w-[135px] min-[480px]:h-[66px]
        min-[560px]:w-[155px] min-[560px]:h-[75px]
        min-[640px]:w-[174px] min-[640px]:h-[85px]
        min-[720px]:w-[185px] min-[720px]:h-[90px]
        min-[860px]:w-[200px] min-[860px]:h-[97px]
        min-[980px]:w-[180px] min-[980px]:h-[88px]
        min-[1080px]:w-[200px] min-[1080px]:h-[97px]
        min-[1200px]:w-[232px] min-[1200px]:h-[119px]
        min-[1360px]:w-[232px] min-[1360px]:h-[119px]
      "
      style={{ backdropFilter: "blur(20px)" }}
    >
      <p className="
        [font-family:var(--font-satoshi)] font-medium text-white leading-[120%] tracking-normal
        text-[6px]
        min-[360px]:text-[7px]
        min-[480px]:text-[8px]
        min-[560px]:text-[9px]
        min-[640px]:text-[10px]
        min-[720px]:text-[11px]
        min-[860px]:text-[12px]
        min-[980px]:text-[11px]
        min-[1080px]:text-[12px]
        min-[1200px]:text-[16px]
      ">
        Total Revenue
      </p>
      <p className="
        [font-family:var(--font-poppins)] font-semibold text-white leading-[120%] tracking-[-0.01em]
        text-[14px]
        min-[360px]:text-[16px]
        min-[480px]:text-[18px]
        min-[560px]:text-[20px]
        min-[640px]:text-[22px]
        min-[720px]:text-[24px]
        min-[860px]:text-[26px]
        min-[980px]:text-[22px]
        min-[1080px]:text-[24px]
        min-[1200px]:text-[32px]
      ">
        $12.5K
      </p>
    </div>
  );
}

// Card — Year to Date (mid-left of avatar)
export function CardYearToDate() {
  return (
    <div
      className="
        absolute bg-[#003BE2] flex flex-col justify-center z-[1] rounded-[16px] gap-[4px]
        top-[30%]
        left-[calc(50%-120px)]
        min-[480px]:left-[calc(50%-145px)]
        min-[640px]:left-[calc(50%-170px)]
        min-[860px]:left-[calc(50%-195px)]
        min-[980px]:left-[-5%]
        min-[1080px]:left-[-5%]
        min-[1200px]:left-[-5%]
        min-[1440px]:left-[-5%]
        p-[6px]
        min-[640px]:p-[8px]
        min-[980px]:p-[12px]
        min-[1200px]:p-[16px]
        w-[68px] h-[68px]
        min-[360px]:w-[77px] min-[360px]:h-[77px]
        min-[480px]:w-[90px] min-[480px]:h-[90px]
        min-[560px]:w-[100px] min-[560px]:h-[100px]
        min-[640px]:w-[112px] min-[640px]:h-[112px]
        min-[720px]:w-[118px] min-[720px]:h-[118px]
        min-[860px]:w-[128px] min-[860px]:h-[128px]
        min-[980px]:w-[115px] min-[980px]:h-[115px]
        min-[1080px]:w-[126px] min-[1080px]:h-[126px]
        min-[1200px]:w-[134px] min-[1200px]:h-[135px]
        min-[1360px]:w-[134px] min-[1360px]:h-[135px]
      "
      style={{ backdropFilter: "blur(20px)" }}
    >
      <p className="
        [font-family:var(--font-satoshi)] font-medium text-white leading-[120%] tracking-normal
        text-[5px]
        min-[360px]:text-[6px]
        min-[480px]:text-[7px]
        min-[560px]:text-[8px]
        min-[640px]:text-[9px]
        min-[720px]:text-[10px]
        min-[860px]:text-[11px]
        min-[980px]:text-[10px]
        min-[1080px]:text-[11px]
        min-[1200px]:text-[16px]
      ">
        Year to Date
      </p>
      <p className="
        [font-family:var(--font-poppins)] font-semibold text-white leading-[120%] tracking-[-0.01em]
        text-[10px]
        min-[360px]:text-[12px]
        min-[480px]:text-[14px]
        min-[560px]:text-[16px]
        min-[640px]:text-[18px]
        min-[720px]:text-[20px]
        min-[860px]:text-[22px]
        min-[980px]:text-[20px]
        min-[1080px]:text-[22px]
        min-[1200px]:text-[24px]
      ">
        $52K
      </p>
    </div>
  );
}
