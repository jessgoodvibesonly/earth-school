import type { ReactNode } from "react";

export const metadata = {
  title: "EARTH SCHOOL • A Temporary Human Experience",
  description:
    "A cross-platform VR/XR experience where awareness shapes reality. Explore perception, choice, consciousness, and transformational gameplay.",
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
