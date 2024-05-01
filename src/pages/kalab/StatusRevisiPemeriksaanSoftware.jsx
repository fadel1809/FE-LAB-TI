import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/pemeriksaan/software/revisi/${params.idPemeriksaan}`,
      null,
      { withCredentials: true }
    );
    toast.warn("Pemeriksaan Akan Direvisi!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/pemeriksaan/software`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const StatusRevisiPemeriksaanSoftware = () => {
  return (
    <div>StatusRevisiPemeriksaanSoftware</div>
  )
}
export default StatusRevisiPemeriksaanSoftware