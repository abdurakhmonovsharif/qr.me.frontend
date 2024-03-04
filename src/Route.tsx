import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultComponent } from "./pages/Home";
import { MainHome } from "./pages/Home";
import { MainBasket } from "./pages/Basket";
import { Error } from "./pages/Error";
import { Cart } from "./pages/Cart";
import { MainCatalog } from "./pages/Catalog/Main.catalog";
import { Constructor } from "./pages/Constructor";
import { Constructor2 } from "./pages/Constructor2";
import { Order } from "./pages/Order";
import { Sample } from "./pages/Sample";

const Route = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      children: [
        { path: "/", element: <DefaultComponent /> },
        { path: "/basket", element: <MainBasket /> },
        { path: "/cart", element: <Cart /> },
        { path: "/catalog", element: <MainCatalog /> },
        { path: "/constructor", element: <Constructor /> },
        { path: "/constructor2", element: <Constructor2 /> },
        { path: "/order", element: <Order /> },
        { path: "*", element: <Error /> },
      ],
    },
    { path: "/sample", element: <Sample /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default Route;
