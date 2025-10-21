import React, { use } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const {loginUser}= use(AuthContext)
    const handleLogin = (e) => {
      
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email, "Password:", password);
      // 🔒 Here you can add Firebase / backend auth call
        loginUser(email, password).then(result => {
            const user = result.user;console.log(user);
            
            if (user) {
                toast.success('user Login successful')
            } else {
                toast.error('login error')
            }
        }).catch(err => {
          toast.error(err.message)
      })
  };

  return (
      <div className="flex flex-col items-center space-y-4 py-8  min-h-screen bg-gray-100 ">
          <Navbar></Navbar>
      <div className="bg-white shadow-lg border border-blue-500 rounded-xl w-full max-w-sm p-8 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t Have An Account?{" "}
          <Link to='/register' className="text-red-500 font-medium hover:underline cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
