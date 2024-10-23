/* eslint-disable no-unused-vars */
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";
export const loader = async () => {
  try {
    const result = await customFetch("v1/user/current-user", {
      withCredentials: true,
    });
    const { data } = result.data;
    const { user } = data;
    const role = user.role;
    if (role === "user") {
      return redirect(`/user/${user.id}`);
    } else {
      return redirect("/admin");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const AccessRights = () => {};
export default AccessRights;
