import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/* Brand font — every "Yanegi" wordmark uses Poppins */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YANEGI_ // Find Your Hangout",
  description: "Discover events, meetups, and activities happening right around you. Real people. Real places. Real time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <body style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
