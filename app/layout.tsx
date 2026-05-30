import type { ReactNode } from "react";

export const metadata = {
  title: "EARTH SCHOOL • A Temporary Human Experience",
  description:
    "A cross-platform VR/XR experience where awareness shapes reality through perception, identity, reflection, and choice.",
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
