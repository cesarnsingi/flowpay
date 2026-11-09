import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPay — Money moves better here",
  description: "A smarter way to pay, get paid and move money around the world."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
