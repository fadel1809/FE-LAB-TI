import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/peminjaman/ruang/history/${params.idPeminjaman}`,
      {
        withCredentials: true,
      }
    );
    toast.error("History Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/peminjaman/history-peminjaman-ruang`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteHistoryPeminjamanRuang = () => {
  return <div>DeleteHistoryPeminjamanRuang</div>;
};
export default DeleteHistoryPeminjamanRuang;
