
import RestMenuCategoriesItems from "./RestMenuCategoriesItems";

const RestMenuCategories = (props) => {
  // console.log("inside RestMenuCat");
  // const [isVisible, setIsVisible] = useState(true);
  const { itemCards, title } = props.data;
  const { open, setIsVisible ,idx} = props;
  // console.log("in categories " , idx ,open);



  return (
    <div className="my-4">
      <div
        className="font-bold text-2xl pb-4  hover:cursor-pointer  "
        onClick={() => {
          setIsVisible();
        }}
      >
        {title} ({itemCards.length})
      </div>
      {/* if(open==idx) <RestMenuCategoriesItems /> */}
      {open == idx && <RestMenuCategoriesItems data={itemCards} />}
    </div>
  );
};
export default RestMenuCategories;
