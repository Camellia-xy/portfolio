import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "向洋的个人项目作品集",
  description: "展示个人项目、课程设计、比赛经历和编程实践的中文作品集网站。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
