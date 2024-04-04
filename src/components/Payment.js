import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

export const Payment = () => {
  let dispatch = useDispatch();
  function handleclick() {
    dispatch(clearCart());
  }
  return (
    // <div class="bg-gray-100">
    <div className="flex justify-center items-center p-2  ">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md text-center">
        <div className="text-4xl text-green-500">&#10003;</div>
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Order Successfully Placed</h1>
        <p className="text-gray-600 mt-2">Your order has been successfully placed. Thank you!</p>
        <Link to="/">
          <button
            className="bg-[#F16667] hover:bg-[#dd4747] dark:bg-[#dd4747]  dark:hover:bg-[#F16667] text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
            onClick={handleclick}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};
