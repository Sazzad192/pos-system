import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POS Application",
  description: "This is a test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Toast />
        <main>
          <div className="p-4 xl:p-2 max-w-7xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
