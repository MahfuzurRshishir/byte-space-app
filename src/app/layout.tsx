import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Variable.woff",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byte Space App",
  description: "Built by Md Mahfuzur Rahman with Love",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-primary flex flex-col">{children}</body>
    </html>
  );
}
