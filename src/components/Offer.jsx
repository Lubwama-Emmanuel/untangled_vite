import AppSection from "../ui/AppSection";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

export default function Offer() {
  return (
    <AppSection className="m-auto max-w-[90%]">
      <div id="opportunities" className="grid grid-cols-[7fr_1fr]">
        <div className="mx-auto max-w-[100%] space-y-10 sm:w-[90%]">
          <Heading number={2} title={"Opportunities"} />
          <div className="hidden sm:block">
            <div className="flex flex-col items-center space-y-1">
              <h2 className="text-5xl">Two Opportunities</h2>
              <div className="flex w-[100%] justify-center gap-[20%]">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-56"
                >
                  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-56"
                >
                  <line x1="0" y1="20" x2="100" y2="80" stroke="black" />
                </svg>
              </div>
              <div className="flex w-[100%] justify-between">
                <Offers
                  desc={
                    "Take a survey, learn about yourself and debrief it with Dr. Mitch"
                  }
                />
                <Offers
                  desc={
                    "Meet with peers to design something cool that will help millions"
                  }
                />
              </div>
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-3xl">No Cost</h3>
              <p className="text-2xl">
                You give us your time and ideas and we give you ours.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center sm:hidden">
            <h3 className="mb-5 text-3xl">Two Opportunities</h3>
            <div className="space-y-10">
              <Offers
                desc={
                  "Take a survey, learn about yourself and debrief it with Dr. Mitch"
                }
              />
              <Offers
                desc={
                  "Meet with peers to design something cool that will help millions"
                }
              />
            </div>
            <div className="mt-7 text-center">
              <h3 className="text-2xl">No Cost</h3>
              <p className="">
                You give us your time and ideas and we give you ours.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="images/offer.png"
            alt="offer"
            className="h-[450px] sm:h-[590px]"
          />
        </div>
      </div>
      <Separator />
    </AppSection>
  );
}

function Offers({ desc }) {
  return (
    <div className="w-[300px] border-b-2 border-[#000] py-3 sm:border-t-2">
      <p className="text-xl">{desc}</p>
    </div>
  );
}
