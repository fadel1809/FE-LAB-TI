import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/history/hardware/${params.idPemeriksaan}/delete`,
      { withCredentials: true }
    );
    toast.error("History Pemeriksaan Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware/history`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteHistoryPemeriksaanHardware = () => {
  return (
    <div>DeleteHistoryPemeriksaanHardware</div>
  )
}
export default DeleteHistoryPemeriksaanHardware