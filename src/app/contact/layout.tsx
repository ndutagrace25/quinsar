import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Quinsar Restaurant",
  description: "Get in touch with Quinsar Restaurant. Find our location, opening hours, phone number, and send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

