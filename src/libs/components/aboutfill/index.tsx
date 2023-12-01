import { Link } from "react-router-dom";
import { Button } from "..";
import Image from "../images";

export interface AboutFillPropsImage {
  src: string;
  alt: string;
}
export interface AboutFillProps {
  side: number;
  image: AboutFillPropsImage;
  title: string;
  paragraph: string;
}

export default function AboutFill({
  side,
  image,
  paragraph,
  title,
}: AboutFillProps) {
  if (side === 1) {
    return (
      <div className="container p-6 flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-6">
          <Image
            src={image.src}
            alt={image.alt}
            width="w-full"
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-2">{paragraph}</p>
            <div className="mt-5 mx-auto">
              <Link to="/contact">
                <Button variants="black">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container p-6 flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col justify-center mb-4 md:mt-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-2">{paragraph}</p>
            <div className="mt-5 mx-auto">
              <Link to="/contact">
                <Button variants="black">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pr-6">
          <Image
            src={image.src}
            alt={image.alt}
            width="w-full"
            className="rounded-lg"
          />
        </div>
      </div>
    );
  }
}
