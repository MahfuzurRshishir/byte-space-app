import Navbar from "@/components/navbar/navbar";
import NavbarMobile from "@/components/navbar/navbar-mobile";

export default function NavbarRoot() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#003BE2]">
      <Navbar />
      <NavbarMobile />
    </header>
  );
}
