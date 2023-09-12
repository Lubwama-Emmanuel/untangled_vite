import { Link } from "react-router-dom";
import Heading from "../ui/Heading";
import AppSection from "../ui/AppSection";
import Separator from "../ui/Separator";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// about Mitch section
export default function About() {
  return (
    <AppSection>
      <div
        id="about"
        className="mx-auto max-w-[100%] md:max-w-[98%] lg:max-w-[90%]"
      >
        <Heading number={3} title={"About Dr.Mitch"} />
        <div className="mb-10 grid grid-cols-2 items-center">
          <div className="flex flex-col items-center space-y-10 px-2 sm:block sm:space-y-16">
            <Aspect aspect={"investor"} />
            <Aspect aspect={"Psychologist"} />
            <Aspect aspect={"social scientist"} />
            <Aspect aspect={"serial entrepreneur"} />
          </div>
          <div className="flex justify-center">
            <img
              src="images/Mitch.jpg"
              alt="Dr.Mitch"
              className="rounded-lg sm:h-[400px]"
            />
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <h2 className="w-[90%] rounded-lg border border-blue-800 py-3 text-center text-2xl font-bold text-blue-800 underline transition-all duration-200 hover:scale-105 sm:w-[30%] sm:py-2">
            <Link onClick={scrollToTop} to="/mitch">
              Learn more about Dr. Mitch
            </Link>
          </h2>
        </div>
      </div>
      <Separator />
    </AppSection>
  );
}

function Aspect({ aspect }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="hidden h-[2px] w-auto flex-grow bg-[#000] sm:block"></div>
      <h3 className="text-2xl capitalize">{aspect}</h3>
    </div>
  );
}
