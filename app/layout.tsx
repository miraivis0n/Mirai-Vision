// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirai Vision",
  description: "Studio vidéo — contenus courts & abonnements",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      {/* garde le thème clair comme avant */}
      <body className="bg-[#f7f7f7] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
