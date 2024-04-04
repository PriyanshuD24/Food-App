import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../redux/themeSlice";
import { darkTheme, lightTheme } from "../utils/cdn_url";
import { AuthContext, app } from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let Header = () => {
  console.log("HEADER RENDERED");
  const [btn, setbtn] = useState("Login");
  const status = useOnlineStatus();
  const data = useContext(UserContext);
  // const { dummyData, changeDummyData } = data;
  // let { myName } = dummyData;
  const themeData = useSelector((store) => store.themeChanger.theme);
  const dispatch = useDispatch();
  // console.log(dummyData);
  let cartItems = useSelector((store) => store.cart.items); // cartItems = [] (initialstate.items)
  // console.log(cartItems);

  const { pathname } = useLocation(); // gives current route
  const firebase = useContext(AuthContext);
  const [isUserLoggedIn, setisUserLoggedIn] = useState(null);
  const auth = getAuth(app);

  function handleThemeClick() {
    console.log(themeData);
    //themeData=="light" ? dispatch(toogleTheme("dark")) : dispatch(toogleTheme("light"));
    if (themeData == "light") {
      document.documentElement.classList.toggle("dark");
      dispatch(toogleTheme("dark"));
    } else {
      document.documentElement.classList.toggle("dark");
      dispatch(toogleTheme("light"));
    }
  }
  useEffect(() => {
    console.log("header use effect called");

    onAuthStateChanged(auth, (user) => {
      console.log("header on auth change run");
      if (user != isUserLoggedIn) {
        console.log("header ", user, user?.displayName);
        setisUserLoggedIn(user);
      } else setisUserLoggedIn(null);
    });
  }, []);

  //console.log("isuserloggedin= ",isUserLoggedIn);
  return (
    <div
      className="header flex justify-between items-center gap-8 px-4 mb-5   mx-auto py-4"
      id="header"
    >
      {/* <div className="flex justify-between w-[100%]"> */}
      <Link to="/">
        <img
          className="w-24"
          src="https://ucarecdn.com/eac2b467-5e68-451d-8254-56aa57a0b678/-/preview/512x512/"
        />
      </Link>

      <Link to={pathname == "/header" ? "/" : "/header"}>
        {" "}
        <button className="md:hidden  ">
          <img
            src={
              themeData == "dark"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1200px-Hamburger_icon_white.svg.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            }
            className="w-6"
          />
        </button>{" "}
      </Link>

      {/* </div> */}
      <ul className=" hidden md:flex items-center gap-8 lg:gap-10 " id="list">
        {isUserLoggedIn?.displayName && <li>Hey, {isUserLoggedIn?.displayName} </li>}

        <li>Online Status:{status ? "✅" : "❌"} </li>

        <li>
          <Link className="hover:text-[#dd4747]" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#dd4747]" to="/about">
            About Us
          </Link>
        </li>
        {/* <li>
          <Link className="hover:text-[#dd4747]" to="/contact">
            Contact Us
          </Link>
        </li> */}
        <li>
          <Link className="hover:text-[#dd4747]" to="/grocery">
            Grocery
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#dd4747]" to="/cart">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1250px-Shopping_cart_icon.svg.png"
              className="w-8 inline"
              alt="cart"
            />
            <span className="font-bold">({cartItems.length})</span>
          </Link>
        </li>
        <li>
          {isUserLoggedIn?.displayName ? (
            <button
              className=" hover:cursor-pointer bg-[#F16667] hover:bg-[#dd4747]  text-white hover:shadow-sm px-4 py-1.5 dark:bg-[#dd4747]  dark:hover:bg-[#F16667]
            rounded transition duration-300 ease-in-out "
              onClick={() => firebase.signout()}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                className=" hover:cursor-pointer bg-[#F16667] hover:bg-[#dd4747]  text-white hover:shadow-sm px-4 py-1.5 dark:bg-[#dd4747]  dark:hover:bg-[#F16667]
            rounded transition duration-300 ease-in-out "
              >
                Login
              </button>{" "}
            </Link>
          )}
        </li>

        <li>
          <button className="w-8 " onClick={handleThemeClick}>
            <img src={themeData == "light" ? darkTheme : lightTheme} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
