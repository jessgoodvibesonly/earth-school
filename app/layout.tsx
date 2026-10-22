import type { ReactNode } from "react";
import "./globals.css";
export const metadata = {
  title: "EARTH SCHOOL | A NEW GENRE IN GAMING",
  description: "Explore EARTH SCHOOL • a temporary human experience •, an immersive 1980s-inspired island game in development inside Fortnite. Discover hidden clues, five-part transmissions, and creative community collaborations.",
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : { index: true, follow: true },
};
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
