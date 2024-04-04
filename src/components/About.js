import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor ");
  }
  componentDidMount() {
    // console.log("parent component did mount ");
  }
  render() {
    // console.log("parent render ");

    // a

    return (
      <div className="max-w-[800px] mx-auto  ">
        <UserClass name={"child 1"} locality={"Faridabad"} />
        {/* {<UserClass name={"child 2"} locality={"Faridabad"} /> } */}

        {/* access Context data Classs based componenets  */}

        {/* userContext */}
{/* 
        { <UserContext.Consumer>
          {(data) => {
            return (
              <div>
                <h1>Im from userContext </h1>
                <h1>my name is : {data.myName}</h1>
                {<h1>my age is : {data.myAge} </h1> }
              </div>
            );
          }}
        </UserContext.Consumer> }
         */}

      </div>
    );
  }
}

export default About;
