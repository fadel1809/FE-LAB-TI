/* eslint-disable no-unused-vars */
import NavbarPolos from "../components/NavbarPolos";
import { useState } from "react";
import Wrapper from "../assets/wrappers/loginPage";
import logo from "../assets/image/logo.png";
import customFetch from "../utils/customFetch";
import {redirect, Form, useNavigate, Link} from "react-router-dom";
import {toast} from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("v1/auth/register", data, { withCredentials: true });
    toast.success("Registrasi berhasil!", {position: "top-center"})
    return redirect("/login");
  } catch (error) {
    toast.error(error.response.data.message, {position: "top-center"})
    console.log(error);
    return error;
  }
};
const Register = () => {
    return (
      <>
        <Wrapper>
          <NavbarPolos />
          <div className="flex justify-center items-center mt-8">
            <Form
                autoComplete="off"
                method="post"
                className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 "
            >
              <img src={logo} alt="" className="w-32 mx-auto mt-2"/>
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
                    placeholder="Masukkan Email"
                    required
                    name="email"
                />
              </div>
              <div className="mb-4">
                <label
                    className="block text-biru-uhamka text-sm font-bold mb-2"
                    htmlFor="id"
                >
                  NIDN/NIM/NIK
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="NIDN/NIM/NIK"
                    required
                    name="id_user"

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
                    placeholder="Masukkan username"
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
                    placeholder="Masukkan password"
                    required
                    name="password"
                    max={10}
                    min={5}
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
              <div className="flex items-center justify-center mt-5">
                <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-400 underline decoration-1"
                >
                  Sudah punya akun?
                </Link>
              </div>
            </Form>

          </div>
        </Wrapper>
      </>
    );
};
export default Register;
