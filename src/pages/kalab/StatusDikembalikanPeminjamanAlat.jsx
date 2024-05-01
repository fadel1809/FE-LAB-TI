/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/peminjaman/alat/${params.idPeminjaman}/dikembalikan`,
      null,
      { withCredentials: true }
    );
    toast.success("Peminjaman Alat Telah Dikembalikan!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/peminjaman/daftar-barang-dipinjam`
    );
  } catch (error) {
    console.log(error);
  }
};
const StatusDikembalikanPeminjamanAlat = () => {
  return <div>StatusDikembalikanPeminjamanAlat</div>;
};
export default StatusDikembalikanPeminjamanAlat;
