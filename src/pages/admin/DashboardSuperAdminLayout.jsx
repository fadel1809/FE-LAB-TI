/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import customFetch from "../../utils/customFetch";
import SidebarSuperAdmin from "../../components/SidebarSuperAdmin.jsx";
export const loader = async () => {
    try {
        const result = await customFetch("v1/user/current-user", {
            withCredentials: true,
        });
        const { data } = result.data;
        const { user } = data;
        if (user.role != "superAdmin") {
            return redirect("/login");
        }
        return user;
    } catch (error) {
        console.log(error);
    }
};
const DashboardSuperAdmin = createContext();
const DashboardAdminLayout = () => {
    const data = useLoaderData();
    return (
        <>
            <DashboardSuperAdmin.Provider value={{ data }}>
                <div className="flex w-full">
                    <SidebarSuperAdmin />
                    <div className="flex flex-col bg-gray-100 w-full">
                        <NavbarAdmin username={data.username} />
                        <div className="container">
                            <Outlet context={data} />
                        </div>
                    </div>
                </div>
                <div className="relative"></div>
            </DashboardSuperAdmin.Provider>
        </>
    );
};
export const useDashboardSuperAdmin = () => {
    return useContext(DashboardSuperAdmin);
};

export default DashboardAdminLayout;
