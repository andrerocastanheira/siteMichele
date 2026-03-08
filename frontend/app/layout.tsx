import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "WOMAN – Instituto de Saúde Integrativa | Dra. Michele Carvalho Colchete",
  description:
    "Fisioterapia Pélvica especializada para a mulher em cada fase da sua vida. Gravidez, Pós-Parto, Menopausa e Pavimento Pélvico. Dra. Michele Carvalho Colchete.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
