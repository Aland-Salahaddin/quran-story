import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TextSizeController from "@/components/TextSizeController";

export const metadata: Metadata = {
  title: "زنجیرەی قورئان",
  description: "مێژووی درامایی دابەزینی قورئانی پیرۆز بە زمانی کوردی",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ckb" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&family=Cinzel:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {/* Anti-inspection script */}
          <Script id="anti-inspect">
            {`
                // Disable right click
                document.addEventListener('contextmenu', event => event.preventDefault());
                
                // Disable keyboard shortcuts
                document.addEventListener('keydown', function (event) {
                  if (event.keyCode == 123) {
                    event.preventDefault();
                  }
                  if (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74 || event.keyCode == 67)) {
                    event.preventDefault();
                  }
                  if (event.ctrlKey && (event.keyCode == 85 || event.keyCode == 83 || event.keyCode == 80)) {
                    event.preventDefault();
                  }
                });

                // Prevent copying and dragging
                document.addEventListener('dragstart', event => event.preventDefault());
                document.addEventListener('copy', event => event.preventDefault());

                // Anti-debugging trap
                setInterval(function() {
                  var before = new Date().getTime();
                  debugger;
                  var after = new Date().getTime();
                  if (after - before > 100) {
                    document.body.innerHTML = "Access Denied.";
                  }
                }, 1000);
              `}
          </Script>
          <TextSizeController />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
