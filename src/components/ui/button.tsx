import Link from "next/link";

// ─── Types

type BaseProps = {
  /** Visual style:
   *  - "primary"  → standard pill CTA (rounded-full, lime green)
   *  - "social"   → icon-only square (72×72, rounded-[24px], white bg, bordered)
   *  - "search"   → same colors/font as primary but NO built-in shape/size
   *                 (pass all sizing via className — used by the search bar)
   *  - "filter"   → bordered pill (rounded-full, 48px height, white bg, Satoshi Medium 16px)
   *  - "stat"     → pill with white bg + backdrop blur (rounded-full, 46px height)
   */
  variant?: "primary" | "social" | "search" | "filter" | "stat";
  /**
   * Optional icon rendered after the label (trailing icon).
   * Pass a React element — e.g. icon={<ChevronDown />}
   */
  icon?: React.ReactNode;
  /** Extra Tailwind classes — appended after the base styles */
  className?: string;
  children: React.ReactNode;
};

type AsPrimaryButton = BaseProps & {
  variant?: "primary" | "search" | "filter" | "stat";
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
  "inline-flex items-center justify-center gap-2 " +
  "[font-family:var(--font-poppins)] font-semibold " +
  "text-[#242528] text-[14px] min-[640px]:text-[15px] " +
  "bg-[#D4FB20] hover:bg-[#c5ef10] " +
  "transition-colors duration-150 cursor-pointer";

/** Standard pill shape added on top of core */
const primaryShape =
  "rounded-full px-5 h-[40px] " +
  "min-[480px]:px-6 min-[480px]:h-[44px] " +
  "min-[640px]:px-8 min-[640px]:h-[46px] " +
  "min-[980px]:h-[50px]";

const socialBase =
  "inline-flex items-center justify-center " +
  "w-[72px] h-[72px] rounded-[24px] " +
  "border border-[#D1D1D1] " +
  "bg-white hover:bg-[#F5F5F6] " +
  "transition-colors duration-150 cursor-pointer";

/** Filter pill — Filter / Level / Category / Most relevant */
const filterBase =
  "inline-flex items-center justify-center gap-1.5 " +
  "h-[36px] px-3 rounded-full " +
  "min-[480px]:h-[40px] min-[480px]:px-3.5 " +
  "min-[640px]:h-[44px] min-[640px]:px-4 " +
  "min-[980px]:h-[48px] min-[980px]:px-4 " +
  "border border-[#CED0D3] bg-white " +
  "hover:bg-[#F5F5F6] transition-colors duration-150 " +
  "text-[#4B4C53] text-[12px] min-[480px]:text-[13px] min-[640px]:text-[14px] min-[980px]:text-[16px] " +
  "font-medium leading-[120%] tracking-normal " +
  "[font-family:var(--font-satoshi)] " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 " +
  "cursor-pointer";

/** Stat pill — Products / Followers counters */
const statBase =
  "inline-flex items-center justify-center gap-1 " +
  "h-[34px] px-3 rounded-full " +
  "min-[480px]:h-[38px] min-[480px]:px-4 " +
  "min-[640px]:h-[42px] min-[640px]:px-4 " +
  "min-[980px]:h-[46px] min-[980px]:px-5 " +
  "bg-white " +
  "backdrop-blur-[40px] " +
  "[font-family:var(--font-satoshi)] font-medium leading-[120%] tracking-normal " +
  "text-[13px] min-[480px]:text-[14px] min-[640px]:text-[16px] min-[980px]:text-[18px]";

// ─── Component 

export default function Button({
  variant = "primary",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  let baseClass: string;

  if (variant === "social") {
    baseClass = socialBase;
  } else if (variant === "search") {
    baseClass = primaryCore;
  } else if (variant === "filter") {
    baseClass = filterBase;
  } else if (variant === "stat") {
    baseClass = statBase;
  } else {
    baseClass = `${primaryCore} ${primaryShape}`;
  }

  const combined = className ? `${baseClass} ${className}` : baseClass;

  const content = (
    <>
      {children}
      {icon && (
        <span className="shrink-0 inline-flex items-center [&>svg]:w-[14px] [&>svg]:h-[14px] min-[640px]:[&>svg]:w-[16px] min-[640px]:[&>svg]:h-[16px] min-[980px]:[&>svg]:w-[20px] min-[980px]:[&>svg]:h-[20px]">
          {icon}
        </span>
      )}
    </>
  );

  // Primary / search / filter / stat variant with href → render as Link
  if (variant !== "social" && "href" in props && props.href) {
    const { href, type: _type, onClick: _onClick, variant: _variant, icon: _icon, className: _className, ...rest } = props as AsPrimaryButton & { icon?: React.ReactNode };
    return (
      <Link href={href as string} className={combined} {...rest}>
        {content}
      </Link>
    );
  }

  // All other cases → render as <button>
  const { href: _href, variant: _variant, icon: _icon, className: _className, ...buttonProps } = props as AsPrimaryButton & { icon?: React.ReactNode };
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={combined}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
