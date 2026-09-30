export default function HeroSection1Visual() {
  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      {/* Green half circle */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-accent"
        style={{
          width: "1100px",
          height: "1100px",
          bottom: "-730px",
        }}
      />

      {/* Student image */}
      <img
        src="/img-hero-frame-1.svg"
        alt="Student with headphones and laptop"
        className="relative z-10 max-w-full"
        style={{ width: "600px" }}
      />
    </div>
  );
}
