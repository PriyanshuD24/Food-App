import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import HeaderMobile from "./components/HeaderMobile";
import { Footer } from "./components/Footer";
import { Payment } from "./components/Payment";
import { AuthProvider } from "./config/firebase";
import SignUp from "./components/SignUp";
const Grocery = lazy(() => import("./components/Grocery"));

let Container = () => {
  console.log(window.screen.width);
  const defContext = useContext(UserContext);
  const [dummyData, setdummyData] = useState(defContext);
  function changeDummyData(newData) {
    // console.log(newData);
    setdummyData({ myName: newData });
  }
  return (
    <div className="dark:bg-[#111111] dark:text-white bg-fixed backdrop-blur-lg duration-100 max-w-[100vw] ">
      <div className="max-w-[1400px] mx-auto min-h-screen px-2 ">
        <Provider store={appStore}>
          <UserContext.Provider value={{ dummyData, changeDummyData }}>
            <AuthProvider>
              <Header />
              <div className="pb-20">
                <Outlet />
              </div>
              <Footer />
            </AuthProvider>
          </UserContext.Provider>
        </Provider>
      </div>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
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
        path: "/grocery",
        element: (
          <Suspense fallback=<h1>Loading.....</h1>>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/restraurant/:resId",
        element: <RestMenu />,
      },

      window.screen.width < 768 && {
        path: "/header",
        element: <HeaderMobile />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(<Container/>)
root.render(<RouterProvider router={approuter} />);
