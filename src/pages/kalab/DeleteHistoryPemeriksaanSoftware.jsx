


import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/history/software/${params.idPemeriksaan}/delete`,
      { withCredentials: true }
    );
    toast.error("History Pemeriksaan Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/pemeriksaan/software/history`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteHistoryPemeriksaanSoftware = () => {
  return (
    <div>DeleteHistoryPemeriksaanSoftware</div>
  )
}
export default DeleteHistoryPemeriksaanSoftware