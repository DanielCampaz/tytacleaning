import useDataService from "../../libs/hooks/useDataServices";
import AboutFill from "../../libs/components/aboutfill";
import Services from "../services";
import ErrorPage from "../error-pages";

export default function ServiceId() {
  const [, data, id] = useDataService();
  if (data !== undefined || id !== undefined) {
    return (
      <div>
        <AboutFill
          contactName={`Contact For ${data!.name}`}
          id={id}
          image={{ src: data!.img, alt: data!.name }}
          paragraph={data!.description}
          title={data!.name}
          side={0}
        />
        <div>
          <Services type="component" />
        </div>
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}
