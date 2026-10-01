import Link from "next/link";
import AuthCollage from "@/components/auth/shared/auth-collage";

interface AuthFormWrapperProps {
  /** Left panel headline */
  headline: string;
  /** Left panel subtext */
  subtext: string;
  /** The actual form (LoginForm or RegisterForm) */
  children: React.ReactNode;
}

export default function AuthFormWrapper({
  headline,
  subtext,
  children,
}: AuthFormWrapperProps) {
  return (

    <div
      className="relative h-screen w-full bg-primary overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      {/* ── Max-width constraint ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row lg:gap-[40px] xl:gap-[60px] min-[1440px]:gap-[100px]">

        {/* ══ LEFT PANEL — hidden below 1024px ══ */}
        <div className="
          hidden lg:flex flex-col justify-start
          lg:px-12 lg:pt-10 lg:pb-0
          lg:flex-1 lg:h-full lg:overflow-hidden lg:max-w-[700px]
        ">
          {/* Logo */}
          <Link href="/dashboard" className="outline-none focus:outline-none mb-10 w-fit">
            <img
              src="/byte-space-logo.svg"
              alt="ByteSpace — go to dashboard"
              className="w-[40px] h-[40px]"
            />
          </Link>

          {/* Headline + subtext */}
          <div className="flex flex-col gap-2 max-w-[520px]">
            <h1 className="
              [font-family:var(--font-poppins)] font-semibold text-white leading-[120%] tracking-[-0.01em]
              text-[20px]
            ">
              {headline}
            </h1>
            <p className="
              [font-family:var(--font-satoshi)] font-normal text-white/80 leading-[160%] tracking-normal
              text-[14px] xl:text-[18px]
            ">
              {subtext}
            </p>
          </div>

          {/* Collage */}
          <div className="flex flex-1 mt-8">
            <AuthCollage />
          </div>
        </div>

        {/* ══ RIGHT PANEL — white card, full width below 1024px ══ */}
        <div className="
          flex items-center justify-center
          w-full h-full overflow-y-auto scrollbar-hide
          px-4 py-[clamp(48px,8vh,80px)]
          min-[480px]:px-8
          lg:items-start lg:justify-center
          lg:px-10 lg:pt-[120px] lg:pb-10
          lg:w-[560px] xl:w-[600px]
        ">
          <div className="
            w-full bg-white
            rounded-[20px] lg:rounded-[24px]
            px-6 pt-8 pb-[50px]
            min-[480px]:px-8 min-[480px]:pt-10
            lg:px-10 lg:pt-12
            shadow-[0_8px_48px_0_rgba(0,0,0,0.12)]
            max-w-[480px] lg:max-w-[600px]
            flex flex-col
          ">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
