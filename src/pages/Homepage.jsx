import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

export default function Homepage() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Hero />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}
