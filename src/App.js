import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const MyApp = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "micky",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MyApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
