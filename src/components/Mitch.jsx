export default function Mitch() {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="hidden sm:block">
        <h2 className="my-7 text-center text-5xl font-semibold capitalize">
          about dr. mitch
        </h2>
        <div className="grid-rows-[auto_auto_auto m-auto grid w-[100%] space-y-5 lg:w-[90%]">
          <div className="mx-auto grid w-[95%] grid-cols-[auto_auto] items-start gap-10 px-3 py-5 lg:max-w-[60%]">
            <div>
              <p className="w-[300px]">
                <span className=" text-2xl text-blue-700">Entrepreneur:</span>{" "}
                Started four businesses. Exited one, put one down, running one.
                The next one, relational intelligence, is on the tarmac and
                ready for takeoff.
              </p>
            </div>
            <div>
              <p className="w-[300px]">
                <span className="text-2xl text-blue-700">Investor:</span> Seed
                round personal investment in 26 startups through Ash Creek
                Capital Advisors (https://ashcreekadvisors.com). Lessons
                learned.
              </p>
            </div>
          </div>
          <div className="grid items-start lg:grid-cols-[30%_40%_30%]">
            <div className="px-10 py-8">
              <p>
                <span className="text-2xl text-blue-700">
                  Social Scientist:
                </span>{" "}
                National research awards in emotional intelligence and in
                scalable processes to prevent aggression. Are offspring of
                alcoholics different from the rest of us? What predicts youth
                mental health and substance use? Opportunities and challenges to
                bridging science and practice – Co-Chair of the President’s Task
                Force – Division of Family Psychology, American Psychological
                Association
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="images/Mitch.jpg"
                alt="Dr.Mitch"
                className="h-[400px] rounded-lg"
              />
            </div>
            <div className="">
              <p className="px-10 py-8">
                <span className="text-2xl text-blue-700">
                  Management Consultant:
                </span>
                Can you execute on your strategy? Invisible bottlenecks exist in
                all companies. Longitudinal corporate assessment across 40+
                offices and countries What makes a great manager? Deep dive in
                organization. How not to change. Consultants return a decade
                later. True Point case research. https://www.truepoint.com/
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-[95%] grid-cols-[auto_auto] items-start gap-10 px-3 py-5 lg:max-w-[60%]">
            <div className="">
              <p>
                <span className="text-2xl text-blue-700">Education:</span>{" "}
                Kenyon College, BA in English Literature Yale University, PhD in
                Psychology Yale University, School of Management Yale
                University, School of Medicine, Mental Health Research Scientist
              </p>
            </div>
            <div className="">
              <p>
                <span className="text-2xl text-blue-700">
                  Behavioral Health:
                </span>{" "}
                State of Connecticut behavioral health Quality Assurance
                subcommittee during the state’s transition to managed care – ask
                us how the sausage was made. Quality of care and managed care
                research study Marriage and family therapy→it’s about
                relationships Taught in nation’s #1 PhD program in Marriage and
                Family Therapy.
              </p>
            </div>
          </div>
        </div>
        <h2 className="mb-20 text-center text-2xl text-blue-700">
          Man of Faith
        </h2>
      </div>
      <div className="sm:hidden">
        <h2 className=" my-7 text-center text-4xl font-semibold capitalize">
          about dr. mitch
        </h2>
        <div className="grid-row-7 grid space-y-4 px-4">
          <div className="flex justify-center">
            <img
              src="images/Mitch.jpg"
              alt="Dr.Mitch"
              className="h-[400px] rounded-lg"
            />
          </div>
          <div>
            <p className="">
              <span className=" text-2xl text-blue-700">Entrepreneur:</span>{" "}
              Started four businesses. Exited one, put one down, running one.
              The next one, relational intelligence, is on the tarmac and ready
              for takeoff.
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-2xl text-blue-700">Social Scientist:</span>{" "}
              National research awards in emotional intelligence and in scalable
              processes to prevent aggression. Are offspring of alcoholics
              different from the rest of us? What predicts youth mental health
              and substance use? Opportunities and challenges to bridging
              science and practice – Co-Chair of the President’s Task Force –
              Division of Family Psychology, American Psychological Association
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-2xl text-blue-700">Education:</span> Kenyon
              College, BA in English Literature Yale University, PhD in
              Psychology Yale University, School of Management Yale University,
              School of Medicine, Mental Health Research Scientist
            </p>
          </div>
          <div className="">
            <p className="">
              <span className="text-2xl text-blue-700">
                Management Consultant:
              </span>
              Can you execute on your strategy? Invisible bottlenecks exist in
              all companies. Longitudinal corporate assessment across 40+
              offices and countries What makes a great manager? Deep dive in
              organization. How not to change. Consultants return a decade
              later. True Point case research. https://www.truepoint.com/
            </p>
          </div>
          <div>
            <p className="">
              <span className="text-2xl text-blue-700">Investor:</span> Seed
              round personal investment in 26 startups through Ash Creek Capital
              Advisors (https://ashcreekadvisors.com). Lessons learned.
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-2xl text-blue-700">Behavioral Health:</span>{" "}
              State of Connecticut behavioral health Quality Assurance
              subcommittee during the state’s transition to managed care – ask
              us how the sausage was made. Quality of care and managed care
              research study Marriage and family therapy→it’s about
              relationships Taught in nation’s #1 PhD program in Marriage and
              Family Therapy.
            </p>
          </div>
        </div>

        <h2 className="my-5 text-center text-2xl text-blue-700">
          Man of Faith
        </h2>
      </div>
    </section>
  );
}
