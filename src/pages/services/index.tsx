import Anchor from "../../libs/components/anchor";
import useDataService from "../../libs/hooks/useDataServices";
import { ConvertText } from "../../libs/utils";
import About from "../about";

export interface ServiceProps {
  type: "page" | "component";
}

export function ServicesRoundend() {
  const [serviceData] = useDataService();
  return (
    <div className="container flex items-center justify-center flex-wrap w-full ">
      {serviceData.map(({ name, img }, index) => {
        return (
          <Anchor
            key={`image-services-${index}`}
            to={`/services/${index}`}
            className="flex flex-col items-center p-10"
          >
            {
              //FIXME: The Image must be square
            }
            <div
              className={`bg-cover block w-[100px] h-[100px] rounded-full text-center`}
              style={{
                backgroundImage: `url('${img}')`,
              }}
            />
            {ConvertText(name)}
          </Anchor>
        );
      })}
    </div>
  );
}

export default function Services({ type }: ServiceProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        <Anchor to="/services">Services: </Anchor>
      </h1>
      {type === "component" ? (
        <ServicesRoundend />
      ) : (
        <div>
          <ServicesRoundend />
          <About slice={1} />
        </div>
      )}
    </div>
  );
}
