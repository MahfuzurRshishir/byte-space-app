
// Card 1 — UI/UX Design
export function CardCourse() {
  return (
    <div
      className="absolute bg-white flex flex-col justify-center z-15"
      style={{
        width: "208px",
        height: "70px",
        top: "545px",
        left: "380px",
        borderRadius: "16px",
        padding: "16px",
        gap: "8px",
      }}
    >
      <p className="font-sans font-[500] text-[14px] leading-[120%] tracking-normal text-[#242528]">
        UI/UX Design
      </p>
      <p className="font-sans font-[400] text-[11px] leading-[160%] tracking-normal text-[#82868E]">
        200 Courses · 1000+ Students
      </p>
    </div>
  );
}

// Card 2 — Learning Progress
export function CardProgress() {
  return (
    <div
      className="absolute bg-white flex flex-col justify-center z-15"
      style={{
        width: "232px",
        height: "131px",
        top: "570px",
        left: "800px",
        borderRadius: "16px",
        padding: "16px",
        gap: "8px",
      }}
    >
      <p className="font-sans font-[500] text-[14px] leading-[120%] tracking-normal text-[#242528]">
        Learning Progress
      </p>
      <p
        className="font-display font-semibold text-[#242528]"
        style={{
          fontSize: "48px",
          lineHeight: "120%",
          letterSpacing: "-0.01em",
        }}
      >
        55%
      </p>
      {/* Progress bar */}
      <div
        className="w-full bg-[#F6F6F6]"
        style={{ height: "8px", borderRadius: "24px" }}
      >
        <div
          className="h-full bg-[#D4FB20]"
          style={{ width: "55%", borderRadius: "24px" }}
        />
      </div>
    </div>
  );
}

//Card 3 — Happy Students 
export function CardStudents() {
  return (
    <div
      className="absolute bg-white flex flex-col justify-center z-15"
      style={{
        width: "258px",
        height: "121px",
        top: "730px",
        left: "310px",
        borderRadius: "16px",
        padding: "16px",
        gap: "8px",
        backdropFilter: "blur(20px)",
      }}
    >
      <p className="font-sans font-[500] text-[16px] leading-[120%] tracking-normal text-[#242528]">
        Happy Students
      </p>
      <p className="font-sans font-[400] text-[12px] leading-[160%] tracking-normal text-[#82868E]">
        4.5 (240) ⭐
      </p>
      {/* Avatar grid */}
      <img
        src="/cricle-avatar-grid.svg"
        alt="Student avatars"
        className="w-full"
      />
    </div>
  );
}
