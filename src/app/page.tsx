"use client"


import About from "./_components/section-about";
import Feature from "./_components/section-feature";
import Hero from "./_components/section-hero";
import Navbar from "./_components/section-navbar";
import Portfolio from "./_components/section-portfolio";
import Services from "./_components/section-services";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Feature />
      <Services/>
    </main>
  );
}
