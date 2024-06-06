"use client"

import Cards from "./components/cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 font-mono">
      <Cards />
    </main>
  );
}
