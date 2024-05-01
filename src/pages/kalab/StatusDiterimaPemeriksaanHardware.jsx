import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/pemeriksaan/hardware/diterima/${params.idPemeriksaan}`,
      null,
      { withCredentials: true }
    );
    toast.success("Pemeriksaan Selesai!");
    return redirect(`/admin/dashboard-kalab/${params.id}/pemeriksaan/hardware`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const StatusDiterimaPemeriksaanHardware = () => {
  return <div>StatusDiterimaPemeriksaanHardware</div>;
};
export default StatusDiterimaPemeriksaanHardware;
