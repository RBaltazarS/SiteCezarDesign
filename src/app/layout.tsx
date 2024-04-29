import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/_components/theme-provider"

export const metadata: Metadata = {
  title: "Cezar Marçal Design",
  description: "Criatividade Sem Limites, Design Sem Fronteiras.",
  keywords: [
    "Criatividade",
    "Inovação Visual",
    "Experiência do Usuário",
    "Estética",
    "Design Responsivo",
    "Desenvolvimento Front-end",
    "Interatividade",
    "Experiência do Cliente",
    "Visualização",
    "Expressão Artística"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
