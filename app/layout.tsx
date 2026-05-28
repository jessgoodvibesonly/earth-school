import type { ReactNode } from "react";

export const metadata = {
  title: "EARTH SCHOOL • A Temporary Human Experience",
  description:
    "A cross-platform cinematic game and immersive education experience exploring awareness, perception, identity, choice, and the temporary human experience.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
