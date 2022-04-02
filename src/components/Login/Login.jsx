import React from "react";

const Login = () => {
  return (
    <div className="login-container text-center text-2xl w-2/5 border-indigo-600">
      <h2> Please Login for your Products </h2>
      <div className="login-information">
        <p className="block">
          User Name :
          <input
            className="border-solid border-2 border-indigo-600 px-2 mt-3"
            type="text"
            placeholder="user Name"
          />
        </p>
        <p className="block">
          user email :
          <input
            className="border-solid border-2 border-indigo-600 px-2 mt-3"
            type="email"
            name=""
            id=""
            placeholder="user email"
          />
        </p>
      </div>
      <div>
        <button className="bg-indigo-300">Submit</button>
      </div>
    </div>
  );
};

export default Login;
