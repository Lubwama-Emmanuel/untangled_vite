const links = [
  {
    id: 1,
    item: "Get these right",
    link: "#get_these",
  },
  {
    id: 2,
    item: "Opportunities",
    link: "#opportunities",
  },
  {
    id: 3,
    item: "About Dr.Mitch",
    link: "#about",
  },
  {
    id: 4,
    item: "Connect",
    link: "#contact",
  },
];

// Separator component
export default function Links({ styles }) {
  return (
    <ul className={styles}>
      {links.map((el) => (
        <Link el={el} key={el.id} />
      ))}
    </ul>
  );
}

function Link({ el }) {
  return (
    <li className="">
      <a href={el.link}>{el.item}</a>
    </li>
  );
}
