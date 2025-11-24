import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Quinsar Restaurant",
  description: "View our restaurant gallery showcasing interior, exterior, food, drinks, and ambiance.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

