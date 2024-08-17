"use client";

import Greetings from "@/components/Greetings";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 md:px-24 text-black">
      <span className="h-8" />
      <Greetings />
      <Portfolio />
      <Experience />
      <Footer />
      <span className="h-8" />
    </main>
  );
}
