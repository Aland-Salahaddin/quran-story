import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "زنجیرەی قورئان",
  description: "مێژووی درامایی دابەزینی قورئانی پیرۆز بە زمانی کوردی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ckb" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&family=Cinzel:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Anti-inspection script */}
        <Script id="anti-inspect">
          {`
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.addEventListener('keydown', function (event) {
                if (event.keyCode == 123) {
                  event.preventDefault();
                }
                if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
                  event.preventDefault();
                }
                if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
                  event.preventDefault();
                }
                if (event.ctrlKey && event.keyCode == 85) {
                  event.preventDefault();
                }
              });
            `}
        </Script>
        {children}
      </body>
    </html>
  );
}
