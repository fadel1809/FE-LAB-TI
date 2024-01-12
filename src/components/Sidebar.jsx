/* eslint-disable no-unused-vars */
import { LuChevronFirst, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { LuChevronLast } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/image/logo.png";
import Wrapper from "../assets/wrappers/sidebar";
import links from "../utils/links";
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [expanded, setExpanded] = useState(true);
  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  return (
    <Wrapper>
      <aside className="h-screen text-biru-uhamka">
        <nav className="h-full flex flex-col bg-white border-r shadow-md px-4">
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
            const childs = link.children;
            if (children) {
              const isMenuOpen = openMenu === index;

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
                    childs.map((child, childIndex) => (
                      <NavLink
                        activeClassName="active"
                        className={`flex px-6 mb-1 rounded-md transition-colors leading-4 py-2  overflow-hidden transition-all ${
                          expanded
                            ? "hover:bg-blue-300 hover:text-indigo-800 focus:bg-blue-300 focus:text-indigo-800"
                            : "w-0"
                        }`}
                        to={child.path}
                        key={child.text}
                      >
                        <span className="mr-2 ml-2">{child.icon}</span>
                        {child.text}
                      </NavLink>
                    ))}
                </div>
              );
            } else {
              return (
                <NavLink
                  className={`flex  transition-colors rounded-md leading-4 p-4  overflow-hidden transition-all ${
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
              );
            }
          })}
        </nav>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
