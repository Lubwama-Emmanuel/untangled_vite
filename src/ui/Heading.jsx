export default function Heading({ number, title, isWithMargin = false }) {
  const base = "text-3xl mb-10";
  const withMargin = base + "";
  return (
    <h2 className={isWithMargin ? `${withMargin}` : `${base}`}>
      <span className="mr-4 text-5xl text-blue-700 underline">
        {`0${number}`}.
      </span>{" "}
      {title}
    </h2>
  );
}
