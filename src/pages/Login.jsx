import NavbarPolos from "../components/NavbarPolos";
import { useState } from "react";
import Wrapper from "../assets/wrappers/loginPage";
import logo from "../assets/image/logo.png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here (e.g., call an API, validate credentials)

    console.log("Submitted:", { username, password });
    // You can add more logic to handle the login process
  };
  return (
    <>
      <Wrapper>
        <NavbarPolos />
        <div className="flex justify-center items-center mt-16">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 "
          >
            <img src={logo} alt="" className="w-32 mx-auto mt-2" />
            <h2 className="text-2xl text-biru-uhamka font-bold mb-4 text-center">
              Login Admin
            </h2>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-biru-uhamka hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
export default Login;
