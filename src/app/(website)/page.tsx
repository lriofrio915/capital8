import React from "react";
import Hero from "@/src/components/Hero";
import Feature from "@/src/components/Feature";
import Pricing from "@/src/components/Pricing";
import Locations from "@/src/components/Locations";
import Testimonials from "@/src/components/Testimonials";

export default async function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Pricing />
      <Locations />
      <Testimonials />
    </>
  );
}
