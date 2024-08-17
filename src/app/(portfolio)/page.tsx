"use client";

import Greetings from "@/components/Greetings";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <div className="mx-10 md:mx-24 ">
        <Greetings />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
      <Copyright />
    </main>
  );
}
