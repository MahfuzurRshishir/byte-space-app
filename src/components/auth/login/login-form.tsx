"use client";

import { useState } from "react";
import Link from "next/link";
import AuthInput from "@/components/auth/shared/auth-input";
import { FBLogo, GoogleLogo } from "@/lib/svg/dashboard/logoIcons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — wire up auth logic here later
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">

      {/* ── Header ── */}
      <p className="[font-family:var(--font-satoshi)] font-medium text-[#003BE2] text-[13px] min-[640px]:text-[14px] leading-[160%] mb-1">
        Sign In
      </p>
      <h2 className="[font-family:var(--font-poppins)] font-bold text-[#040819] leading-[120%] tracking-[-0.02em] text-[32px] min-[480px]:text-[36px] min-[640px]:text-[44px] mb-7 min-[640px]:mb-8">
        Welcome Back
      </h2>

      {/* ── Fields ── */}
      <div className="flex flex-col gap-4 mb-6">
        <AuthInput
          label="Email"
          type="email"
          placeholder="designer@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>

      {/* ── Submit ── */}
      <div className="flex justify-end mb-6">
        <button
          type="submit"
          className="
            [font-family:var(--font-poppins)] font-semibold
            text-[#242528] text-[14px] min-[640px]:text-[15px]
            bg-[#D4FB20] hover:bg-[#c5ef10]
            rounded-full px-8 h-[46px] min-[640px]:h-[50px]
            transition-colors duration-150
            cursor-pointer
          "
        >
          Sign In
        </button>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center gap-3 my-4 min-[640px]:my-6 min-[1024px]:my-8">
        <div className="flex-1 h-px bg-[#E4E5E7]" />
        <span className="[font-family:var(--font-satoshi)] font-normal text-[#82868E] text-[13px] leading-[160%]">
          or
        </span>
        <div className="flex-1 h-px bg-[#E4E5E7]" />
      </div>

      {/* ── Social buttons ── */}
      <div className="flex justify-center gap-4">
        {/* Facebook */}
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] flex items-center justify-center bg-white hover:bg-[#F5F5F6] transition-colors duration-150 cursor-pointer"
        >
          <FBLogo />
        </button>

        {/* Google */}
        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] flex items-center justify-center bg-white hover:bg-[#F5F5F6] transition-colors duration-150 cursor-pointer"
        >
          <GoogleLogo />
        </button>
      </div>

      {/* ── Spacer — responsive height-based gap, max 70px ── */}
      <div style={{ paddingTop: "clamp(16px, 4vh, 70px)" }} />

      {/* ── Footer link ── */}
      <p className="text-center [font-family:var(--font-satoshi)] font-normal text-[#82868E] text-[13px] min-[640px]:text-[14px] leading-[160%]">
        New user?{" "}
        <Link
          href="/register"
          className="text-[#003BE2] font-medium hover:underline"
        >
          Create an account
        </Link>
      </p>

    </form>
  );
}
