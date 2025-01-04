import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params, request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  let catatan = {catatan:`${data.catatan} (dari Kalab)`};
  try {
    await customFetch.put(
      `v1/pemeriksaan/hardware/revisi/${params.idPemeriksaan}`,
      catatan,
      { withCredentials: true }
    );
    toast.warn("Pemeriksaan Akan Direvisi!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/pemeriksaan/hardware`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const StatusRevisiPemeriksaanHardware = () => {
  return <div>StatusRevisiPemeriksaanHardware</div>;
};
export default StatusRevisiPemeriksaanHardware;
