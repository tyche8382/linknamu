import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// 가변 폰트 하나가 약 2MB라 미리 받지 않고, 시스템 폰트로 먼저 보여준 뒤 교체한다
const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "나의 모든 링크를 한 곳에, 링크나무",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // 테마 스크립트가 렌더링 전에 html의 class를 바꾸므로 hydration 경고를 끈다
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
