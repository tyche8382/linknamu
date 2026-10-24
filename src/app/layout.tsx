import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "나의 모든 링크를 한 곳에, 링크나무",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // 테마 스크립트가 렌더링 전에 html의 class를 바꾸므로 hydration 경고를 끈다
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
