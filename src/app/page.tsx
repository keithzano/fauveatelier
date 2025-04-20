import Image from "next/image";
import { Hero } from "./components/sections/homepage/hero";
import { About } from "./components/sections/homepage/about";
import { Philosophy } from "./components/sections/homepage/philosophy";
import { Investments } from "./components/sections/homepage/investments";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Investments />
    </>
  );
}
