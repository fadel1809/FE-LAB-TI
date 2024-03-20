/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/image/logo.png";
import Wrapper from "../assets/wrappers/sidebar";
import links from "../utils/LinksAslab";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const SidebarAslab = () => {
  const [openMenus, setOpenMenus] = useState([]);
  const [expanded, setExpanded] = useState(true);

  const handleMenuClick = (index) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((item) => item !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <Wrapper>
      <aside className="h-full text-biru-uhamka">
        <nav className="h-[800px] flex flex-col bg-white border-r shadow-md px-4 pb-52">
          <div className="p-2 pb-2 flex justify-between items-center">
            <img
              src={logo}
              alt=""
              className={`overflow-hidden transition-all ${
                expanded ? "w-24" : "w-0"
              }`}
            />
            <h1
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              Dashboard Admin
            </h1>
          </div>
          {links.map((link, index) => {
            const { text, path, icon, children } = link;

            if (children) {
              const isMenuOpen = openMenus.includes(index);

              return (
                <div key={text} className="sidebar-item ">
                  <div
                    className={`flex  leading-4 p-4 cursor-pointer rounded-md overflow-hidden transition-all ${
                      expanded ? "px-3" : "w-0"
                    } `}
                    onClick={() => handleMenuClick(index)}
                  >
                    <span className="mr-2">{icon}</span>
                    {text}
                    {isMenuOpen ? (
                      <LuChevronUp style={{ marginLeft: "auto" }} />
                    ) : (
                      <LuChevronDown style={{ marginLeft: "auto" }} />
                    )}
                  </div>
                  {isMenuOpen &&
                    children.map((child, childIndex) => (
                      <NavLink
                        activeClassName="active"
                        className={`flex px-6  rounded-md transition-colors leading-4 py-2  overflow-hidden transition-all ${
                          expanded
                            ? "hover:bg-blue-300 hover:text-indigo-800 focus:bg-blue-300 focus:text-indigo-800"
                            : "w-0"
                        } ${child.longText && "text-xs"}`}
                        to={child.path}
                        key={child.text}
                      >
                        <span
                          className={`mr-2 ml-2 ${
                            child.longText && "text-base"
                          }`}
                        >
                          {child.icon}
                        </span>
                        {child.text}
                      </NavLink>
                    ))}
                </div>
              );
            } else {
              return (
                <div key={text} className="sidebar-item ">
                  <NavLink
                    className={`flex   transition-colors rounded-md leading-4 p-4  overflow-hidden transition-all ${
                      expanded
                        ? "px-3 hover:bg-blue-300 hover:text-indigo-800 focus:bg-blue-400 focus:text-biru-uhamka"
                        : "w-0"
                    }`}
                    to={path}
                    key={text}
                  >
                    <span className="mr-2">{icon}</span>
                    {text}
                  </NavLink>
                </div>
              );
            }
          })}
        </nav>
      </aside>
    </Wrapper>
  );
};
export default SidebarAslab;
