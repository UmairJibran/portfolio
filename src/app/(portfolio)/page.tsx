"use client";

import Header from "@/components/Header";
import Greetings from "@/components/Greetings";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Header />
      <div className="mx-10 md:mx-24 my-4">
        <Greetings />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Footer />
      </div>
      <Copyright />
    </main>
  );
}
