"use client";

import { useState } from "react";
import Link from "next/link";
import AuthInput from "@/components/auth/shared/auth-input";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
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
        Create an Account
      </p>
      <h2 className="[font-family:var(--font-poppins)] font-bold text-[#040819] leading-[120%] tracking-[-0.02em] text-[32px] min-[480px]:text-[36px] min-[640px]:text-[44px] mb-7 min-[640px]:mb-8">
        Welcome to <br className="hidden min-[400px]:block" />ByteSpace
      </h2>

      {/* ── Fields ── */}
      <div className="flex flex-col gap-4 mb-6">
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Jamie Davis"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />
      </div>

      {/* ── Submit ── */}
      <div className="flex justify-end">
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
          Continue
        </button>
      </div>

      {/* ── Spacer — responsive height-based gap, max 120px ── */}
      <div style={{ paddingTop: "clamp(16px, 6vh, 120px)" }} />

      {/* ── Footer link ── */}
      <p className="text-center [font-family:var(--font-satoshi)] font-normal text-[#82868E] text-[13px] min-[640px]:text-[14px] leading-[160%]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#003BE2] font-medium hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  );
}
