/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import logo from "../assets/image/logo.webp";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate,useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
const NavbarUser = ({isPeminjamanSaya}) => {
  const {id} = useParams()
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(`/user/${id}`);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutUser = async () => {
    toast.error("Logging Out....");
    try {
      await customFetch.post("v1/auth/logout", null, { withCredentials: true });
      setTimeout(()=> {
        navigate("/");
      },2000)
      
    } catch (error) {
      console.log(error);
      toast.warn(error);
    }
  };
  return (
    <Wrapper>
      <nav className="bg-gray-50 p-4 shadow-xl mb-8" id="home">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="" className="logo" onClick={goToHome} />
          <div className="lg:flex hidden space-x-4 font-bold">
            <Link
              to={`/user/${id}/peminjaman-saya`}
              className="flex items-center"
            >
              <button
                className={`text-biru-uhamka hover:text-blue-700 flex items-center ${
                  isPeminjamanSaya ? "hidden" : ""
                }`}
              >
                Peminjaman Saya
              </button>
            </Link>
            <Link
              to={`/user/${id}/peminjaman-alat`}
              className="flex items-center"
            >
              <button
                className={`text-biru-uhamka hover:text-blue-700 flex items-center ${
                  isPeminjamanSaya ? "hidden" : ""
                }`}
              >
                Pinjam Alat
              </button>
            </Link>{" "}
            <Link to={`/user/${id}/peminjaman-ruang`} className="flex items-center">
              <button
                className={`text-biru-uhamka hover:text-blue-700 flex items-center ${
                  isPeminjamanSaya ? "hidden" : ""
                }`}
              >
                Pinjam Ruang
              </button>
            </Link>
            <IconButton onClick={handleClick}>
              <FaUserCircle style={{ color: "#004c84", fontSize: "1.2em" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#004c84",
                  padding: "2px 20px",
                  fontWeight: "bold",
                }}
                onClick={logoutUser}
              >
                <CiLogout className="mr-2 font-bold text-xl" />
                Logout
              </MenuItem>
            </Menu>
          </div>

          {/* Hamburger menu button */}
          <div className="lg:hidden">
            <button
              className="text-biru-uhamka hover:text-blue-700 focus:outline-none mt-2"
              onClick={toggleDropdown}
            >
              <RxHamburgerMenu className="text-2xl" />{" "}
              {/* Unicode character for three horizontal bars */}
            </button>
          </div>

          {/* Dropdown menu content */}
          {isDropdownOpen && (
            <div className="lg:hidden absolute top-[72px] left-0 w-full bg-white border-b border-gray-200">
              <div className="container p-4">
                <div className="flex justify-end">
                  <button
                    className="text-biru-uhamka hover:text-blue-500 focus:outline-none"
                    onClick={closeDropdown}
                  >
                    <MdClose className="text-2xl" />
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link to={"peminjaman-saya"}>
                    <button
                      type="button"
                      className="text-biru-uhamka hover:text-blue-700 flex items-center"
                    >
                      Peminjaman Saya
                    </button>
                  </Link>
                  <Link to={"peminjaman-alat"}>
                    <button
                      type="button"
                      className="text-biru-uhamka hover:text-blue-700 flex items-center"
                    >
                      Pinjam Alat
                    </button>
                  </Link>{" "}
                  <Link to={"peminjaman-ruang"}>
                    <button
                      type="button"
                      className="text-biru-uhamka hover:text-blue-700 flex items-center"
                    >
                      Pinjam Ruang
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="text-biru-uhamka flex items-start"
                  >
                    <CiLogout className="mr-2 mt-1" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </Wrapper>
  );
};
export default NavbarUser;
