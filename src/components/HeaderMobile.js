import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../redux/themeSlice";
import { darkTheme, lightTheme } from "../utils/cdn_url";
const HeaderMobile = () => {
  const [btn, setbtn] = useState("Login");
  const status = useOnlineStatus();
  const data = useContext(UserContext);
  const { dummyData, changeDummyData } = data;
  let { myName } = dummyData;
  const themeData = useSelector((store) => store.themeChanger.theme);
  const dispatch = useDispatch();
  // console.log(dummyData);
  let cartItems = useSelector((store) => store.cart.items); // cartItems = [] (initialstate.items)
  // console.log(cartItems);

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

  return (
    <div>
      <ul className=" md:hidden flex flex-col items-center gap-8 lg:gap-10 " id="list">
        {myName != "Default" && <li>Hey, {myName} </li>}
        <li>
          <button className="w-8 " onClick={handleThemeClick}>
            <img src={themeData == "light" ? darkTheme : lightTheme} />
          </button>
        </li>
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
            />
            <span className="font-bold">({cartItems.length})</span>
          </Link>
        </li>
        <Link to={btn == "Login" ? "/login" : "/"}>
          <li
            className=" hover:cursor-pointer bg-[#F16667] hover:bg-[#dd4747] px-3 text-white py-1
            rounded-lg "
            onClick={() => {
              if (btn === "Login") {
                return setbtn("Logout");
              } else {
                changeDummyData("Default");

                return setbtn("Login");
              }
            }}
          >
            {btn}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderMobile;