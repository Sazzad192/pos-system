import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pos System Application",
  description: "This is a test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="p-4 xl:p-2 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
