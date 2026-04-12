import Image from "next/image";
import About from "../components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  );
}
