import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quinsar Restaurant - Authentic Dining Experience",
  description: "Experience exceptional dining with authentic flavors and warm hospitality at Quinsar Restaurant. View our menu, gallery, and make a reservation today.",
  keywords: "restaurant, dining, food, menu, Quinsar, authentic cuisine, fine dining",
  openGraph: {
    title: "Quinsar Restaurant - Authentic Dining Experience",
    description: "Experience exceptional dining with authentic flavors and warm hospitality.",
    type: "website",
  },
  other: {
    "google-fonts": "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${montserrat.variable}`}>
      <body className={`antialiased ${montserrat.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
