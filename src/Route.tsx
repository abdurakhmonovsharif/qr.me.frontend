import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultComponent } from "./pages/Home/MainHome";
import { MainHome } from "./pages/Home/MainHome";

const Route = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      children: [{ path: "/", element: <DefaultComponent /> }],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Route;
