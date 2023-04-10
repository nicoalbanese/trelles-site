import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Trelles",
  description: "coming soon",
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen justify-center items-center text-lg">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
