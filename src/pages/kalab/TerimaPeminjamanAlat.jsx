/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/alat/${params.idPeminjaman}/diterima`,
      null,
      { withCredentials: true }
    );
    toast.success("Barang Akan Dipinjam");
    return redirect(`/admin/dashboard-kalab/${params.id}/peminjaman/alat`);
  } catch (error) {
    console.log(error);
  }
};
const TerimaPeminjamanAlat = () => {
  return (
    <div>TerimaPeminjamanAlat</div>
  )
}
export default TerimaPeminjamanAlat