import type { ReactNode } from "react";

export const metadata = {
  title: "Earth School",
  description: "A Temporary Human Experience",
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
