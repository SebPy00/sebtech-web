import type { Metadata } from "next";
import { LangProvider } from "@/context/LangContext";

const SUPPORTED = ["es", "en"] as const;

export const metadata: Metadata = {
  title: "SebTech",
};

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LangProvider>{children}</LangProvider>;
}