const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function FooterBottom() {
  return (
    <div className="border-t border-[#CED0D3] mt-10 min-[860px]:mt-12 min-[1200px]:mt-16">
      <div
        className="
          flex flex-col gap-4 items-center
          min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between
          py-6
        "
      >
        {/* Copyright */}
        <p
          className="
            [font-family:var(--font-satoshi)] font-normal text-[#9A9CA5]
            leading-[160%] tracking-normal
            text-[12px] min-[480px]:text-[13px] min-[1080px]:text-[14px]
          "
        >
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>

        {/* Legal links */}
        <div className="flex items-center gap-4 min-[860px]:gap-6 flex-wrap">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="
                [font-family:var(--font-satoshi)] font-normal text-[#242528]
                leading-[160%] tracking-normal
                text-[12px] min-[480px]:text-[13px] min-[1080px]:text-[14px]
                hover:text-[#003BE2] transition-colors duration-200
                whitespace-nowrap
              "
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
