import FooterMain from "@/components/footer/footer-main";
import FooterBottom from "@/components/footer/footer-bottom";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white border-t-2 border-[#CED0D3]">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-4 pt-8
          min-[560px]:px-8 min-[560px]:pt-10
          min-[720px]:px-12 min-[720px]:pt-12
          min-[980px]:px-16
          min-[1200px]:px-[120px] min-[1200px]:pt-16
        "
      >
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
}
