import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultComponent } from "./pages/Home/MainHome";
import { MainHome } from "./pages/Home/MainHome";
import { MainBasket } from "./pages/Basket/MainBasket";
import { Error } from "./pages/Error/Error";
import { Cart } from "./pages/Cart/MainCart";

const Route = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
      children: [
        { path: "/", element: <DefaultComponent /> },
        { path: "/basket", element: <MainBasket /> },
        { path: "/cart", element: <Cart /> },

        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Route;
