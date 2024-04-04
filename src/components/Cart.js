import { useDispatch, useSelector } from "react-redux";
import RestMenuCategoriesItems from "./RestMenuCategoriesItems";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalSum);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearCart());
  }
  // console.log(cartItems);
  return (
    <div className="max-w-[800px] mx-auto p-3 px-4 ">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-center text-3xl">Cart</div>
        <button
          className="px-4 py-1.5 bg-[#F16667] hover:bg-[#dd4747] text-white rounded dark:bg-[#dd4747]  dark:hover:bg-[#F16667]  transition-colors duration-300 ease-in-out"
          onClick={handleClick}
        >
          Clear All
        </button>
      </div>
      <div className="mb-8 " >
        <RestMenuCategoriesItems data={cartItems} Key="incart"  />
      </div>
      {totalPrice != 0 && (
        <div className=" flex justify-between items-center ">
          <div className="font-semibold text-xl text-left">Total : ₹{totalPrice} </div>

          <Link to="/payment">
            <button className="px-4 py-1.5 bg-[#F16667] hover:bg-[#dd4747] text-white rounded dark:bg-[#dd4747]  dark:hover:bg-[#F16667] transition duration-300 ease-in-out">
              PAY
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
