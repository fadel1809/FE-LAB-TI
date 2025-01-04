
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params,request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  let catatan = {catatan:`${data.catatan} (dari Laboran)`};
  try {
    await customFetch.put(
      `v1/pemeriksaan/software/revisi/${params.idPemeriksaan}`,
      catatan,
      { withCredentials: true }
    );
    toast.warn("Pemeriksaan Akan Direvisi!");
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/konfirmasi-software`
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