/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DashboardContext = createContext();
export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    const role = user.role;
    if (role === "aslab") return redirect(`dashboard-aslab/${user.id}`);
    if (role === "kalab") return redirect(`dashboard-kalab/${user.id}`);
    if (role === "laboran") return redirect(`dashboard-laboran/${user.id}`);
    return false;
  } catch (error) {
    console.log(error);
    return redirect(`/login`);
  }
};
const DashboardLayout = () => {
  return (
    <div>
      <div>loaded</div>
    </div>
  );
};

export default DashboardLayout;
