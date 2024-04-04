import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../config/firebase";



export default function SignUp(){

 const [user, setUser] = useState("");
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");

 const [password, setPassword] = useState("");

 const firebase=useContext(AuthContext);


    return (
      <div className="max-w-md w-full mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white px-6 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
            <p className="mt-2 text-sm text-gray-600">Sign up to your account</p>
          </div>
          <form className="mt-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 py-1 px-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your full name"
                required
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 py-1 px-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium  text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 py-1 px-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4  text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div> */}

            <div className="mt-6">
              <Link to="/login">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                  onClick={()=>{
                    firebase.signUp(email, password, name);
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700">
              Already have account?{" "}
              <Link to="/login">
                <button type="submit" className="text-indigo-600 hover:text-indigo-500">Sign In</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
}