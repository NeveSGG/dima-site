import type { Metadata } from "next";
import { Inter } from "next/font/google";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

async function getMetadata() {
  return directus.request(
    readItems("metadata", {
      fields: ["title", "description"],
    })
  );
}

export async function generateMetadata() {
  let metadata: any = await getMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
