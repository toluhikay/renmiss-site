import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
