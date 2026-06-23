"use client"; // ✅ 讓整個檔案變成 Client Component

import { usePathname } from "next/navigation"; // ✅ 取得當前頁面路徑
import Navbar from "./Navbar";
import Banner from "./Banner";
import "../styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // ✅ 取得當前路徑
  const isPricingPage = pathname === "/pricing"; // ✅ 檢查是否為「價格一覽」頁面

  return (
    <html lang="zh-TW">
      <head>
        <title>宏愛犬貓專科醫院</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar /> {/* ✅ Navbar 一直顯示 */}
        {!isPricingPage && <Banner />}

        {/* 🔹 主要內容 */}
        <main className="pt-[100px] px-4">{children}</main>

        {/* 🔹 頁尾 */}
        <footer className="bg-blue-100 text-center py-6 mt-12 text-gray-700">
          <p>宏愛犬貓專科醫院 版權所有 © {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>

      </body>
    </html>
  );
}
