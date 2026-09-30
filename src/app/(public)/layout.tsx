import NavbarRoot from "@/components/navbar/navbar-root";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarRoot />
      <main className="pt-[120px]">{children}</main>
    </>
  );
}
