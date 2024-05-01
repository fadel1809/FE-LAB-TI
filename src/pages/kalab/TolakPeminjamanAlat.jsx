/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/alat/${params.idPeminjaman}/ditolak`,
      null,
      { withCredentials: true }
    );
    toast.error("Peminjaman Alat Ditolak");
    return redirect(`/admin/dashboard-kalab/${params.id}/peminjaman/alat`);
  } catch (error) {
    console.log(error);
  }
};
const TolakPeminjamanAlat = () => {
  return <div>TolakPeminjamanAlat</div>;
};
export default TolakPeminjamanAlat;
