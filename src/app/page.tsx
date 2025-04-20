import Image from "next/image";
import { Hero } from "./components/sections/homepage/hero";
import { About } from "./components/sections/homepage/about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
