/* eslint-disable no-unused-vars */
import NavbarPolos from "../components/NavbarPolos";
import { useState } from "react";
import Wrapper from "../assets/wrappers/loginPage";
import logo from "../assets/image/logo.png";
import customFetch from "../utils/customFetch";
import { redirect, Form, useNavigate } from "react-router-dom";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("v1/auth/register", data, { withCredentials: true });
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};
const Register = () => {
    return (
      <>
        <Wrapper>
          <NavbarPolos />
          <div className="flex justify-center items-center mt-16">
            <Form
              autoComplete="off"
              method="post"
              className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 "
            >
              <img src={logo} alt="" className="w-32 mx-auto mt-2" />
              <h2 className="text-2xl text-biru-uhamka font-bold mb-4 text-center">
                Register
              </h2>
              <div className="mb-4">
                <label
                  className="block text-biru-uhamka text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-biru-uhamka text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                  name="username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-biru-uhamka text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required  
                  name="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-biru-uhamka hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </Form>
          </div>
        </Wrapper>
      </>
    );
};
export default Register;
