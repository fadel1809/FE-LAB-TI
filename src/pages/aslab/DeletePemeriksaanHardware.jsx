import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/hardware/${params.idPemeriksaan}`,
      { withCredentials: true }
    );
    toast.error("Pemeriksaan Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeletePemeriksaanHardware = () => {
  return <div>DeletePemeriksaanHardware</div>;
};
export default DeletePemeriksaanHardware;
