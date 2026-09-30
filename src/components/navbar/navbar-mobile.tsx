"use client";

import Link from "next/link";
import { useState } from "react";
import { CartIcon } from "@/lib/svg/dashboard/cartIcon";
import { MenuIcon } from "@/lib/svg/dashboard/menuIcon";
import { CrossIcon } from "@/lib/svg/dashboard/crossIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const linkClass =
  "text-[#F5F5F6] text-[16px] font-[200] leading-[24px] tracking-[0%] hover:underline transition-all";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-[980px]:hidden">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between px-4 h-[120px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/Header_Logo.svg"
            alt="ByteSpace"
            width={140}
            className="h-auto"
          />
        </Link>

        {/* Hamburger toggle */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          {isOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="w-full px-6 py-6 flex flex-col gap-6">
          {/* Nav links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-px w-full bg-[#F5F5F6]/20" />

          {/* Auth links + cart */}
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Join Us
            </Link>
            <button
              aria-label="Cart"
              className="flex items-center  cursor-pointer justify-start hover:opacity-80 transition-opacity"
            >
              <CartIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
