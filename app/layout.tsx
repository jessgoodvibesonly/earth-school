import type { ReactNode } from "react";
export const metadata = {
  title: "EARTH SCHOOL | Echo Point Island",
  description: "Explore EARTH SCHOOL • a temporary human experience •, an immersive 1980s-inspired island game in development inside Fortnite. Discover hidden clues, five-part transmissions, and creative community collaborations.",
};
export default function RootLayout({children}:{children:ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}