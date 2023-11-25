import { useRouteError } from "react-router-dom";
import { LogosTheme } from "../libs/utils";
import { Link } from "react-router-dom";
import Button from "../libs/components/button";

export default function ErrorPage() {
  const error = useRouteError() as {
    statusText: number | string;
    data: string;
  };
  // console.log(error);

  return (
    <div
      id="error-page"
      className="bg-slate-200 flex items-center justify-center h-screen"
    >
      <div>
        <div className="flex justify-center items-center">
          <img src={LogosTheme(0)} alt="Tyta Cleaning Service" />
          <div className="m-10 justify-center items-center">
            <h1 className="text-5xl mt-3 mb-3">Oops!</h1>
            <p className="text-lg">Sorry, an unexpected error has occurred.</p>
            <div>
              <p className="text-xs mt-2 mb-2">
                <i>{error.statusText}</i>
                <br />
                <i>{error.data}</i>
              </p>
              <Button>
                <Link to={"/"}>Go to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
