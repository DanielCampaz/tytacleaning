import AboutFill from "../../libs/components/aboutfill";

const data = [
  {
    title: "Tyta Service Cleaning",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam maxime earum nisi amet ut similique dolores dolorum est magni quibusdam non assumenda repellat vero, quam officia unde reprehenderit provident!.",
    image: {
      src: "homeimgs/1.jpg",
      alt: "Photo One",
    },
  },
  {
    title: "Action And Protocol",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam maxime earum nisi amet ut similique dolores dolorum est magni quibusdam non assumenda repellat vero, quam officia unde reprehenderit provident!.",
    image: {
      src: "homeimgs/3.jpg",
      alt: "Photo Three",
    },
  },
];

export default function About() {
  return (
    <div>
      {data.map((dat, index) => (
        <AboutFill
          key={`about-aboutfill-${index}`}
          image={dat.image}
          paragraph={dat.paragraph}
          title={dat.title}
          side={index % 2}
        />
      ))}
    </div>
  );
}
