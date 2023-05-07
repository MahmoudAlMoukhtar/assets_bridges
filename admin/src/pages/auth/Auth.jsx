import React, {useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useHistory, Redirect} from "react-router-dom";
import * as api from "../../api/index";
import {toast} from "react-toastify";
import jwt_decode from "jwt-decode";

const initialState = {
  email: "",
  password: "",
};

const Auth = () => {
  const user = JSON.parse(localStorage.getItem("assetsBridges"));
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  // const [isSignup, setIsSignup] = useState(true);
  const [value, setValue] = useState();
  const navigait = useHistory();
  if (user) {
    return <Redirect to="/admin" />;
  }
  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   const {data} = await api.signup({...formData, phone: value});
    //   localStorage.setItem("assetsBridges", JSON.stringify(data));

    // } catch (err) {
    //   toast.error("This email may already exist, try another email");
    // }

    const {data} = await api.signin(formData);
    localStorage.setItem("assetsBridges", JSON.stringify(data));
    navigait.push("/admin");
    toast.success("You are successfully logged in");
  };

  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // const switchMode = () => {
  //   setIsSignup(!isSignup);
  // };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center h-full mb-10  rounded w-full">
        <h2 className="text-2xl font-bold text-white text-center">Signin</h2>
        <form className="mt-8 space-y-6 w-full px-20" onSubmit={handleSubmit}>
          <div className=" rounded-md shadow-sm">
            <div>
              <label htmlFor="email">email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={handleTextFieldChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="">
                password
              </label>
              <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleTextFieldChange}
                />
                {!showPassword ? (
                  <BiShowAlt
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                    size={20}
                  />
                ) : (
                  <BiHide
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                    size={20}
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2e9175]">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Auth;
