"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 12000, suffix: "K", divisor: 1000, label: "Students" },
  { target: 70,    suffix: "+", divisor: 1,    label: "Courses"  },
  { target: 16,    suffix: "",  divisor: 1,    label: "Creators" },
];

const DURATION = 2000;

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return count;
}

function StatItem({ target, suffix, divisor, label, active }: {
  target: number; suffix: string; divisor: number; label: string; active: boolean;
}) {
  const raw = useCountUp(target, active);
  const display = divisor > 1 ? Math.floor(raw / divisor) : raw;

  return (
    <div className="flex flex-col gap-1">
      <span className="[font-family:var(--font-poppins)] font-medium text-[#003BE2] tracking-[-0.01em] text-[24px] min-[480px]:text-[28px] min-[640px]:text-[32px] min-[1080px]:text-[36px] leading-[44px]">
        {display}{suffix}
      </span>
      <span className="[font-family:var(--font-satoshi)] font-normal text-[#4B4C53] leading-[160%] tracking-normal text-[13px] min-[480px]:text-[14px] min-[1080px]:text-[18px]">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection3Text() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-6 min-[980px]:gap-8 w-full">

      <h2 className="[font-family:var(--font-poppins)] font-semibold text-[#242528] leading-[120%] tracking-[-0.01em] text-[28px] min-[480px]:text-[32px] min-[640px]:text-[36px] min-[860px]:text-[40px] min-[1080px]:text-[44px]">
        Your Path to Professional <br /> Growth Starts Here!
      </h2>

      <p className="[font-family:var(--font-satoshi)] font-normal text-[#4B4C53] leading-[160%] tracking-normal text-[14px] min-[480px]:text-[15px] min-[1080px]:text-[18px] max-w-[480px]">
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are looking
        to sharpen specific skills, gain industry expertise, or embark on a new
        career path entirely, we have the resources you need.
      </p>

      <div ref={ref} className="flex items-start gap-8 min-[640px]:gap-10 min-[1080px]:gap-12">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} active={active} />
        ))}
      </div>

    </div>
  );
}
