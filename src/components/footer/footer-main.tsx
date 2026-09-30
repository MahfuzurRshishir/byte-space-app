const NAV_COLUMNS = [
  {
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    links: [
      "Development",
      "Marketing",
      "Photography",
      "Finance",
      "Sport",
    ],
  },
  {
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export default function FooterMain() {
  return (
    <div
      className="
        flex flex-col gap-10
        min-[640px]:flex-row min-[640px]:items-start min-[640px]:gap-10
        min-[860px]:gap-12
        min-[1200px]:gap-16
      "
    >
      {/* Left — logo + newsletter */}
      <div className="flex flex-col gap-5 max-w-[530px] w-full min-[640px]:w-[45%] min-[860px]:flex-1">

        {/* Logo */}
        <img
          src="/footer-logo.svg"
          alt="ByteSpace"
          className="w-[120px] min-[1200px]:w-[170px]"
        />

        {/* Tagline */}
        <p
          className="
            [font-family:var(--font-satoshi)] font-normal text-[#4B4C53]
            leading-[160%] tracking-normal
            text-[13px] min-[480px]:text-[14px] min-[1080px]:text-[14px]
          "
        >
          Stay Up to date with our latest features and releases by joining our newsletter.
        </p>

        {/* Email input + button */}
        <div className="flex items-center gap-2 w-full max-w-[504px] my-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1 min-w-0
              [font-family:var(--font-satoshi)] font-normal text-[#242528]
              text-[14px] leading-[160%] tracking-normal
              placeholder:text-[#242528]
              bg-white border border-[#E5E6E8] rounded-[100px]
              px-5 h-[52px]
              outline-none focus:border-[#003BE2] transition-colors duration-200
            "
          />
          <button
            className="
              flex-shrink-0
              [font-family:var(--font-satoshi)] font-medium text-[#242528]
              text-[16px]
              leading-[120%] tracking-normal
              bg-[#D4FB20] rounded-[24px]
              px-6 h-[46px]
              hover:bg-[#bde800] transition-colors duration-200
              cursor-pointer whitespace-nowrap
            "
          >
            Search
          </button>
        </div>

        {/* Disclaimer */}
        <p
          className="
            [font-family:var(--font-satoshi)] font-normal text-[#9A9CA5]
            leading-[160%] tracking-normal
            text-[11px] min-[480px]:text-[12px] min-[1080px]:text-[13px]
            max-w-[320px] min-[860px]:max-w-none min-[860px]:whitespace-wrap
          "
        >
          By subscribing, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-[#4B4C53] transition-colors">
            Privacy Policy
          </span>{" "}
          and consent to receive updates from our company.
        </p>
      </div>

      {/* Right — nav columns */}
      {/* Mobile: stacked vertically | Tablet: stacked on right side | Desktop: side by side */}
      <div
        className="
          flex flex-col gap-8
          min-[640px]:w-[55%] min-[640px]:flex-1
          min-[860px]:flex-row min-[860px]:justify-center min-[860px]:gap-x-12
          min-[1080px]:gap-x-16
          min-[1200px]:gap-x-20
        "
      >
        {NAV_COLUMNS.map((col, colIdx) => (
          <ul key={colIdx} className="flex flex-col gap-2 min-[1080px]:gap-3">
            {col.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="
                    [font-family:var(--font-satoshi)] font-normal text-[#4B4C53]
                    leading-[160%] tracking-normal
                    text-[13px] min-[480px]:text-[14px] min-[1080px]:text-[15px]
                    hover:text-[#003BE2] transition-colors duration-200
                  "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
