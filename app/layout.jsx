import { Manrope, Russo_One } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

const displayFont = Russo_One({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

function resolveMetadataBase() {
  const fallback = "http://localhost:3000";
  const raw = process.env.SITE_URL || fallback;

  try {
    return new URL(raw);
  } catch {
    return new URL(fallback);
  }
}

export const metadata = {
  metadataBase: resolveMetadataBase(),
  title: "Простой Трейдинг",
  description:
    "Лендинг книги «Простой Трейдинг»: скачать файл для печати и подписаться на Telegram-канал.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
