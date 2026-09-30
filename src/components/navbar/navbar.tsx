import Link from "next/link";
import { CartIcon } from "@/lib/svg/dashboard/cartIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const linkClass =
  "text-[#F5F5F6] text-[16px] font-[200] leading-[24px] tracking-[0%] hover:underline transition-all";

export default function Navbar() {
  return (
    <nav className="max-w-[1200px] h-[120px] mx-auto hidden items-center justify-between px-4 py-5 min-[980px]:flex">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <img
          src="/Header_Logo.svg"
          alt="ByteSpace"
        />
      </Link>

      {/* Center nav links */}
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right actions */}
      <div className="flex items-center gap-6">
        <Link href="/login" className={linkClass}>
          Sign In
        </Link>
        <Link href="/register" className={linkClass}>
          Join Us
        </Link>
        <button
          aria-label="Cart"
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <CartIcon />
        </button>
      </div>
    </nav>
  );
}
