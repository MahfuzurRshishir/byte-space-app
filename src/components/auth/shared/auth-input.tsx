"use client";

import { useState } from "react";

interface AuthInputProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {/* Label */}
      <label className="[font-family:var(--font-satoshi)] font-medium text-[#242528] text-[13px] min-[640px]:text-[14px] leading-[160%]">
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative w-full">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          data-password-mask={type === "password" && !showPassword ? "true" : undefined}
          className="
            w-full h-[46px] min-[640px]:h-[50px]
            rounded-[10px] border border-[#CED0D3]
            px-4
            [font-family:var(--font-satoshi)] font-normal text-[#242528]
            text-[13px] min-[640px]:text-[14px] leading-[160%] tracking-normal
            placeholder:text-[#82868E]
            bg-white
            outline-none
            focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10
            transition-colors duration-150
            pr-10
          "
          style={type === "password" && !showPassword ? { color: "#82868E" } : undefined}
        />

        {/* Show/hide toggle for password fields */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AEAFB5] hover:text-[#4B4C53] transition-colors cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              // Eye-off icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              // Eye icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
