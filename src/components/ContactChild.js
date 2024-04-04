import { useState } from "react";
const ContactChild = (props) => {
  const [val, setVal] = useState("input");
const { data, setData } = props.Data;

  // console.log(Data,setFunction);
  return (
    <div>
      <input type="text" name="" id="" value={val} onChange={(e) => {
        return setVal(e.target.value);
      }} />
      <button onClick={()=> {
        setData(val);
      }}>ClickMe !! </button>
    </div>
  );
};
export default ContactChild;
