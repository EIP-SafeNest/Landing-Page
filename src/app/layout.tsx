import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeNest — Protection intelligente du domicile",
  description:
    "SafeNest détecte automatiquement les chutes et les risques domestiques grâce à l'IA, sans enregistrer ni transmettre d'images. Confidentialité garantie.",
  keywords: [
    "SafeNest",
    "détection chutes",
    "sécurité domicile",
    "IA locale",
    "seniors",
    "protection domicile",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
