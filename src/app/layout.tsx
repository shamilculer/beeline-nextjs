import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Beeline",
  description: "Project management tool",
};

const source_Sans_3 = Source_Sans_3({
  subsets: ["greek"],
  weight: ['400', "500", "600", "700", "800"]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${source_Sans_3.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
