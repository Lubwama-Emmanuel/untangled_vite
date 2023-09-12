import AppSection from "../ui/AppSection";
import Separator from "../ui/Separator";

export default function Hero() {
  return (
    <AppSection>
      <div className="relative">
        <div className="absolute">
          <img
            src="images/vector-2.png"
            alt="vector"
            className="h-[580px] sm:h-auto"
          />
        </div>
        <div className="grid sm:grid sm:grid-rows-[700px_1fr]">
          <div className="mb-14 w-min justify-self-end text-right sm:flex sm:h-[600px] sm:w-auto sm:items-center sm:justify-center sm:text-left">
            <h2 className="text-4xl font-light leading-[1.9] sm:ml-32 sm:w-[50%] md:text-7xl md:leading-[1.2]">
              Untangling the transition from{" "}
              <span className="font-medium">student</span> to{" "}
              <span className="font-medium text-red-600 underline">adult</span>
            </h2>
          </div>
          <div id="get_these" className="mx-auto max-w-[100%] sm:w-[83%]">
            <h2 className="mb-10 ml-12 text-3xl">
              <span className="mr-4 text-5xl text-blue-700 underline">01.</span>{" "}
              Get these things right in your 20s and life goes well.
            </h2>

            <div
              style={{
                backgroundImage: `url(images/chart.png)`,
              }}
              className="hidden bg-contain bg-center bg-no-repeat sm:block sm:h-[900px]"
            >
              {/* <img
                src="images/chart.png"
                alt="vector"
                className="h-[546px] text-center"
              /> */}
            </div>

            <div
              style={{
                backgroundImage: `url(images/chart_2.png)`,
              }}
              className="bg-large-screen h-[600px] bg-contain bg-no-repeat sm:hidden"
            >
              {/* <img
                src="images/chart.png"
                alt="vector"
                className="h-[546px] text-center"
              /> */}
            </div>
            <h2 className="text-center text-xl sm:mt-14 sm:text-2xl">
              Everybody gets some of this right – but very few of us get all of
              it sorted out in our 20s.
            </h2>
          </div>
        </div>
      </div>
      <Separator />
    </AppSection>
  );
}
