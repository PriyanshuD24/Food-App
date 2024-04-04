import React from "react"; // to import React class
import { Link } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    // to access props
    super(props);
    // console.log(props);
    // this.state = {
    //   // big object of state variable stores all state variables
    //   count: 0,
    //   count2: 2,
    // };
    // console.log(this.props.name+ " constructor ");
    this.state = {
      name: "Dummy",
      login: "Dummy",
      location: "Dummy",
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + " comp did mount");
    // basically like useEffect with [] dependency
    //used for api calls
    //called after 1st render only
    const data = await fetch("https://api.github.com/users/PriyanshuD24");
    const json = await data.json();
    this.setState(json);
  }

  render() {
    //destructuring
    console.log(this.state);
    const { avatar_url, name, login, location } = this.state;
    // console.log(this.props.name + " rendered");
    return (
      <div className="border-2 border-black dark:border-[#dedede] flex justify-between items-center  p-2 ">
        {/* {count} = {this.state.count}*/} {/*this is comment */}
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="bg-cyan-500 p-1 rounded-lg"
        >
          Count inc
        </button>
        <h1>Count2 : {this.state.count2}</h1> */}
        <div className=" text-xl flex flex-col  h-[148px] justify-evenly  ">
          <div>Name : {name} </div> {/* {name}= {this.props.name} */}
          <div>Location : {location}</div>
          <Link to={"https://github.com/PriyanshuD24"}>
            <div className="hover:text-[#dd4747]  dark:hover:text-[#F16667]">@{login}</div>
          </Link>
        </div>
        <div className="w-[148px] h-[148px] bg-[#f0f0f0]">
          {avatar_url ? <img src={avatar_url} alt="Github-avatar" /> : null}
        </div>
      </div>
    );
  }
}
export default UserClass;
