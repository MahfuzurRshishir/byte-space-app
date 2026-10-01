import Link from "next/link";

interface AuthMobileHeaderProps {
  headline: string;
  subtext: string;
}

/**
 * Shown only on small screens (below lg / 1024px) at the top of the auth
 * right panel, above the form card. Mirrors the logo + headline + subtext
 * that the left panel shows on desktop.
 */
export default function AuthMobileHeader({
  headline,
  subtext,
}: AuthMobileHeaderProps) {
  return (
    <div className="lg:hidden flex flex-col items-center text-center gap-3 w-full">
      {/* Logo */}
      <Link href="/dashboard" className="outline-none focus:outline-none w-fit mb-1">
        <img
          src="/byte-space-logo.svg"
          alt="ByteSpace — go to dashboard"
          className="w-[36px] h-[36px] min-[480px]:w-[40px] min-[480px]:h-[40px]"
        />
      </Link>

      {/* Headline */}
      <h1 className="
        [font-family:var(--font-poppins)] font-semibold text-white
        leading-[120%] tracking-[-0.01em]
        text-[18px] min-[480px]:text-[20px]
      ">
        {headline}
      </h1>

      {/* Subtext */}
      <p className="
        [font-family:var(--font-satoshi)] font-normal text-white/80
        leading-[160%] tracking-normal
        text-[13px] min-[480px]:text-[14px]
        max-w-[340px] min-[480px]:max-w-[400px]
      ">
        {subtext}
      </p>
    </div>
  );
}
