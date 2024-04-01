/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import Sidebar from "../../components/SidebarAslab";
import NavbarAdmin from "../../components/NavbarAdmin";
import customFetch from "../../utils/customFetch";

export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    if (user.role != "aslab") {
      return redirect("/login");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};
const DashboardAslabContext = createContext();

const DashboarAslabLayout = () => {
  const data = useLoaderData();
  return (
    <>
      <DashboardAslabContext.Provider value={{ data }}>
        <div className="flex w-full">
          <Sidebar />
          <div className="flex flex-col bg-gray-100 w-full">
            <NavbarAdmin />
            <div className="container">
              <Outlet context={data} />
            </div>
          </div>
        </div>
        <div className="relative"></div>
      </DashboardAslabContext.Provider>
    </>
  );
};
export const useDashboardAslabContext = () => {
  return useContext(DashboardAslabContext);
};
export default DashboarAslabLayout;
