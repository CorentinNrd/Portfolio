import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout";
import Home from "./pages/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
        {
            path: "",
            element: <Home />
        },
    ]
  },
]);

export default routers;
