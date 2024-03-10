import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultComponent } from "./pages/Home";
import { MainHome } from "./pages/Home";
import { MainBasket } from "./pages/Basket";
import { Error } from "./pages/Error";
import { Cart } from "./pages/Cart";
import { MainCatalog } from "./pages/Catalog/Main.catalog";
import { Themes } from "./pages/Themes";
import { ConstructorSite } from "./pages/Constructor";
import { Order } from "./pages/Order";

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
        { path: "/themes", element: <Themes /> },
        { path: "/create_page", element: <ConstructorSite /> },
        { path: "/order", element: <Order /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Route;
