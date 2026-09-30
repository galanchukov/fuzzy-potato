import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Боря | AI & Automation",
  description: "AI, n8n, API-интеграции, Telegram-боты, Python и веб-разработка.",
  keywords: ["AI", "n8n", "автоматизация", "API", "Python", "Telegram", "Next.js"],
  authors: [{ name: "Боря" }],
  openGraph: {
    title: "Боря | AI & Automation",
    description: "Автоматизирую то, что можно автоматизировать.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}