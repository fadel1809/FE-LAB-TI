/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/ruang/${params.idPeminjaman}/validasi-laboran`,
      null,
      { withCredentials: true }
    );
    toast.success("Peminjaman Ruang akan divalidasi Kalab");
    return redirect(`/admin/dashboard-laboran/${params.id}/peminjaman/ruang`);
  } catch (error) {
    console.log(error);
  }
};
const TerimaPeminjamanRuang = () => {
  return <div>TerimaPeminjamanRuang</div>;
};
export default TerimaPeminjamanRuang;
