import React, { Children } from "react";
import ReactDOM from "react-dom/client";

//Default Import
// import Header from "./components/Header";

//Named Import
// import {Title } from "./components/Header"

// import Header, {Title} from "./components/Header";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { IMG_CDN_URL } from "./config";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

/**
 * Header
 *  -Title
 *  - NaV Items
 * Body
 *  - Search Bar
 *  - Restaurant Card
 *     -- Image
 *     -- Name
 *     -- Rating
 *     -- Cuisines
 * Footer
 *
 */

const AppLayout = () => {
  return (
    <React.Fragment> 
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
