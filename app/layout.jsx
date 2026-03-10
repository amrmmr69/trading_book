import { Manrope, Russo_One } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body"
});

const displayFont = Russo_One({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-display"
});

export const metadata = {
  title: "Простой Трейдинг",
  description:
    "Лендинг книги «Простой Трейдинг»: скачать файл для печати и подписаться на Telegram-канал."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
