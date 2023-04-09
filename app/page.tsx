import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex h-screen justify-center items-center text-lg">
        <div>
          <p>trelles is coming soon</p>
          <Link
            href="https://airtable.com/shr8wML4mUKFvlBaG"
            className="text-green-600 hover:text-green-800 transition ease-in-out duration-300"
          >
            sign up for early access →
          </Link>
        </div>
      </div>
    </main>
  );
}
