import logo from "../assets/image/logo.webp";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";

const NavbarPolos = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <nav className="bg-gray-50 p-4 shadow-xl mb-5" id="home">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="" className="logo" onClick={goToHome} />
          <div className="space-x-4 font-bold">
            {/* <button className=" text-white font-bold py-1 px-2 rounded-full">
              <FaUserCircle style={{ color: "#004c84", fontSize: "1.5em" }} />
            </button> */}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavbarPolos;
