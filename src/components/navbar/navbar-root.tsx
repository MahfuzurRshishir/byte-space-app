import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbar-mobile";

export default function NavbarRoot() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#003BE2]">
      {/* Grid texture overlay — matches hero section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
      <div className="relative z-10">
        {/* Desktop — 120px fixed height */}
        <Navbar />
        {/* Mobile — expands freely when menu is open */}
        <NavbarMobile />
      </div>
    </header>
  );
}
