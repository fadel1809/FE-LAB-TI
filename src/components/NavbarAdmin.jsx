/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from "../assets/image/logo.webp";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate, redirect } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
const NavbarAdmin = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/admin"); //substitute with role
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
      await customFetch.post("v1/auth/logout",null, { withCredentials: true });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error)
      toast.warn(error)
    }
    
   }
  return (
    <Wrapper>
      <nav className="bg-gray-50 p-4 shadow-xl mb-5 w-full" id="home">
        <div className="container mx-auto flex justify-between items-center ">
          <img src={logo} alt="" className="logo" onClick={goToHome} />
          <div className="space-x-4 font-bold">
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
                  padding:"2px 20px",
                  fontWeight: "bold"
                }}
                onClick={logoutUser}
              >
                <CiLogout className="mr-2 font-bold text-xl"/>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavbarAdmin;
