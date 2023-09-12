import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileMenu from "../components/MobileMenu";
import Offer from "../components/Offer";
import BottonLine from "../ui/BottonLine";

export default function Homepage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}
      <Hero />
      <Offer />
      <About />
      <Contact />
      <BottonLine />
      <Footer />
    </div>
  );
}
