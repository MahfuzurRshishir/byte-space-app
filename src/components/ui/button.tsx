import Link from "next/link";

// ─── Types 

type BaseProps = {
  /** Visual style:
   *  - "primary"  → standard pill CTA (rounded-full, 46/50px height, px-8)
   *  - "social"   → icon-only square (72×72, rounded-[24px], white bg, bordered)
   *  - "search"   → same colors/font as primary but NO built-in shape/size
   *                 (pass all sizing via className — used by the search bar)
   */
  variant?: "primary" | "social" | "search";
  /** Extra Tailwind classes — appended after the base styles */
  className?: string;
  children: React.ReactNode;
};

type AsPrimaryButton = BaseProps & {
  variant?: "primary" | "search";
  /** When provided the component renders a Next.js <Link> instead of <button> */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
};

type AsSocialButton = BaseProps & {
  variant: "social";
  href?: never;
  type?: "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label": string; // required for icon-only accessibility
};

type ButtonProps = AsPrimaryButton | AsSocialButton;

// ─── Style constants 

/** Shared color/font/transition core — no shape or sizing */
const primaryCore =
  "inline-flex items-center justify-center " +
  "[font-family:var(--font-poppins)] font-semibold " +
  "text-[#242528] text-[14px] min-[640px]:text-[15px] " +
  "bg-[#D4FB20] hover:bg-[#c5ef10] " +
  "transition-colors duration-150 cursor-pointer";

/** Standard pill shape added on top of core */
const primaryShape = "rounded-full px-8 h-[46px] min-[640px]:h-[50px]";

const socialBase =
  "inline-flex items-center justify-center " +
  "w-[72px] h-[72px] rounded-[24px] " +
  "border border-[#D1D1D1] " +
  "bg-white hover:bg-[#F5F5F6] " +
  "transition-colors duration-150 cursor-pointer";

// ─── Component 

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  let baseClass: string;

  if (variant === "social") {
    baseClass = socialBase;
  } else if (variant === "search") {
    // Core styles only — caller supplies all shape/sizing via className
    baseClass = primaryCore;
  } else {
    // primary — core + standard pill shape
    baseClass = `${primaryCore} ${primaryShape}`;
  }

  const combined = className ? `${baseClass} ${className}` : baseClass;

  // Primary / search variant with href → render as Link
  if (variant !== "social" && "href" in props && props.href) {
    const { href, type: _type, onClick: _onClick, variant: _variant, className: _className, ...rest } = props as AsPrimaryButton;
    return (
      <Link href={href as string} className={combined} {...rest}>
        {children}
      </Link>
    );
  }

  // All other cases → render as <button>
  const { href: _href, variant: _variant, className: _className, ...buttonProps } = props as AsPrimaryButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={combined}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
