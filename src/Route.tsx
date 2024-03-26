import { RouterProvider, createBrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { DefaultComponent } from "./pages/Home";
import { MainHome } from "./pages/Home";
import { MainBasket } from "./pages/Basket";
import { Error } from "./pages/Error";
import { Cart } from "./pages/Cart";
import { MainCatalog } from "./pages/Catalog/Main.catalog";
import { Themes } from "./pages/Themes";
import { ConstructorSite } from "./pages/Constructor";
import { Order } from "./pages/Order";
import DinamicSite from "./pages/DinamicSite/DinamicSite";
import { useEffect } from "react";
const UserPageCheckOrError = () => {
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    const uuidRegex = /\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;
    const match = location.pathname.match(uuidRegex);

    if (match) {
      const uuid = match[1];
      localStorage.setItem("user_url", uuid)
      navigate(`/themes?url=${uuid}`)
    }
  }, [location]);
  return <Error />
}
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
        { path: "*", element: <UserPageCheckOrError /> },
      ],
    },
    { path: "/ws/:link", element: <DinamicSite /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default Route;
