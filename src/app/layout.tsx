import type { Metadata } from "next";
import { Poppins, Leckerli_One, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const leckerli = Leckerli_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-leckerli",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yanegi — Find Your Hangout",
  description: "Discover events, meetups, and activities happening right around you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${leckerli.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm), var(--font-poppins), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
