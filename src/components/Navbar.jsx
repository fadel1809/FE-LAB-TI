import logo from "../assets/image/logo.webp";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
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
            <a href="#home" className="text-biru-uhamka hover:text-blue-700">
              Beranda
            </a>
            <a href="#" className="text-biru-uhamka hover:text-blue-700">
              Informasi
            </a>
            <a href="#" className="text-biru-uhamka hover:text-blue-700">
              Kegiatan
            </a>
            <a href="#" className="text-biru-uhamka hover:text-blue-700">
              Kontak
            </a>
            <Link to={"/login"}>
              <button className="bg-biru-uhamka hover:bg-blue-700 text-white font-bold py-1 px-7 rounded-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
