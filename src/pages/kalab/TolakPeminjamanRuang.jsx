/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/ruang/${params.idPeminjaman}/ditolak`,
      null,
      { withCredentials: true }
    );
    toast.error("Peminjaman Ruang Ditolak");
    return redirect(`/admin/dashboard-kalab/${params.id}/peminjaman/ruang`);
  } catch (error) {
    console.log(error);
  }
};

const TolakPeminjamanRuang = () => {
  return <div>TolakPeminjamanRuang</div>;
};
export default TolakPeminjamanRuang;
