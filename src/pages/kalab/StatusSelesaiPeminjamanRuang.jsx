/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/ruang/${params.idPeminjaman}/selesai`,
      null,
      { withCredentials: true }
    );
    toast.success("Peminjaman Ruang Telah Selesai!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/peminjaman/daftar-ruang-dipinjam`
    );
  } catch (error) {
    console.log(error);
  }
}
const StatusSelesaiPeminjamanRuang = () => {
  return (
    <div>StatusSelesaiPeminjamanRuang</div>
  )
}
export default StatusSelesaiPeminjamanRuang