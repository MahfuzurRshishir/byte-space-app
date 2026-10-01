import type { Metadata } from "next";
import NavbarRoot from "@/components/navbar/navbar-root";
import Footer from "@/components/footer/footer";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarRoot />

      {/* ── Hero Section ── */}
      <section
        className="relative w-full overflow-hidden bg-primary flex flex-col items-center justify-center flex-1 pt-[72px] min-[980px]:pt-[120px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
      >
        {/* ── Content wrapper ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full py-10 min-[640px]:py-14">

          {/* ── 404 text ── */}
          <div
            className="select-none leading-none font-semibold tracking-[-0.01em] [font-family:var(--font-poppins)] w-full"
            style={{
              fontSize: "clamp(120px, 30vw, 480px)",
              lineHeight: "1",
              background:
                "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          {/* ── Heading ── */}
          <h1
            className="[font-family:var(--font-poppins)] font-bold text-white leading-[120%] tracking-[-0.02em] max-w-[720px]"
            style={{
              fontSize: "clamp(22px, 5vw, 56px)",
              marginTop: "clamp(-60px, -4vw, -16px)",
            }}
          >
            The page you are looking for doesn&apos;t exist
          </h1>

          {/* ── Subtext ── */}
          <p className="
            [font-family:var(--font-satoshi)] font-normal text-white/70 leading-[160%]
            text-[14px] min-[640px]:text-[16px]
            mt-4 min-[640px]:mt-5
            max-w-[480px]
          ">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* ── CTA ── */}
          <Button
            href="/"
            className="mt-8 min-[640px]:mt-10 h-[48px] min-[640px]:h-[52px]"
          >
            Back to Home
          </Button>

        </div>
      </section>

      <Footer />
    </div>
  );
}
