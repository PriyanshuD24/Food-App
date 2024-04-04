// show items of specific categories
import { useDispatch } from "react-redux";
import { NONVEG_SIGN, VEG_SIGN } from "../utils/cdn_url";
import { addItem, getTotal, removeItem } from "../redux/cartSlice";

const RestMenuCategoriesItems = (props) => {
  const itemCards = props.data;
  const key = props?.Key; // to check rwhether this list is rendered from cart or not
  // console.log(props);
  const dispatch = useDispatch(); // returns a functions
  function handleAddItem(item) {
    dispatch(addItem(item)); // in this dipatch fn we send an action and in action we send the data ie (action.payload)
    dispatch(getTotal());
  }
  function handleDelItem(item) {
    dispatch(removeItem(item)); // in this dipatch fn we send an action and in action we send the data ie (action.payload)
    dispatch(getTotal());
  }

  return (
    <ul className>
      {itemCards.map((res) => {
        const { name, price, defaultPrice, imageId, description, isVeg } = res?.card?.info;

        return (
          <li
            className="  pb-2  flex justify-between items-center  py-4 border-b-2 border-[#f0f0f0] relative"
            data-testid={key!=undefined? "addedResCart" :"addedRes"}
          >
            <div>
              <div className="w-4 mb-2">
                {isVeg ? <img src={VEG_SIGN} alt="" /> : <img src={NONVEG_SIGN} alt="" />}
              </div>

              <div className="text-lg">{name}</div>
              <div className="my-2 font-semibold"> ₹{price / 100 || defaultPrice / 100}</div>
              <div className=" text-sm text-[#8b8b8b]  overflow-hidden">{description}</div>
            </div>

            <div className=" w-32 flex flex-col justify-center items-center  ml-6">
              <div className="w-[118px] h-[96px]">
                {imageId ? (
                  <img
                    className=" w-[118px] h-[96px] object-cover overflow-hidden rounded-md outline-none"
                    alt=""
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                      imageId
                    }
                  />
                ) : (
                  <></>
                )}
              </div>
              {key != "incart" ? (
                <button
                  className=" relative bottom-6 bg-white w-[100px]   border-2 text-green-400 border-[#f0f0f0] px-2 mt-2 hover:shadow-xl "
                  onClick={() => handleAddItem(res)}
                  data-testid={name}
                >
                  ADD
                </button>
              ) : (
                <button
                  className=" relative bottom-6 bg-white w-[100px]   border-2 text-green-400 border-[#f0f0f0] px-2 mt-2 hover:shadow-xl "
                  onClick={() => {
                    handleDelItem(res);
                  }}
                  data-testid={name+ "remove"}
                >
                  Remove
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default RestMenuCategoriesItems;
