import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import ContactUS from "../components/ContactUs";
import UserContext from "../utils/UserContext";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import Profile from "../components/Profile";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "../components/Cart";
// import Grocery from "../components/Grocery";
const Grocery = lazy(() => import("../components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // api authentication
    setUserName("ancio");
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />;
          <Outlet />;
        </UserContext.Provider>
      </Provider>
    </>
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
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
