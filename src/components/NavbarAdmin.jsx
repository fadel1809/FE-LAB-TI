/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from "../assets/image/logo.webp";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate, redirect } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const NavbarAdmin = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/admin"); //substitute with role
  };
  return (
    <Wrapper>
      <nav className="bg-gray-50 p-4 shadow-xl mb-5 w-full" id="home">
        <div className="container mx-auto flex justify-between items-center ">
          <img src={logo} alt="" className="logo" onClick={goToHome} />
          <div className="space-x-4 font-bold">
            <button className=" text-white font-bold py-1 px-2 rounded-full">
              <FaUserCircle style={{ color: "#004c84", fontSize: "1.5em" }} />
            </button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavbarAdmin;
