import { useRouteError } from "react-router-dom";
import PageLayout from "../container/PageLayout";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <PageLayout>
      <main className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <h1 className="text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Oops!
        </h1>
        <p className="text-matteBlack dark:text-matteWhite text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Sorry, an unexpected error has occurred...
        </p>
        <p className="text-gray-500 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </PageLayout>
  );
};

export default ErrorPage;
