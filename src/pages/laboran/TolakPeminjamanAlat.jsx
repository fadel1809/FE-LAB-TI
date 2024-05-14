/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(
      `v1/peminjaman/alat/${params.idPeminjaman}/ditolak`,
      data,
      { withCredentials: true }
    );
    toast.error("Peminjaman Alat Ditolak");
    return redirect(`/admin/dashboard-laboran/${params.id}/peminjaman/alat`);
  } catch (error) {
    console.log(error);
  }
};
const TolakPeminjamanAlat = () => {
  return <div>TolakPeminjamanAlat</div>;
};
export default TolakPeminjamanAlat;
