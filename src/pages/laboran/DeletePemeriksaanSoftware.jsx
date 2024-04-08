
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import {toast} from "react-toastify"
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/software/${params.idPemeriksaan}`,
      { withCredentials: true }
    );
    toast.error("Pemeriksaan Software Berhasil Dihapus!")
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/software`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeletePemeriksaanSoftware = () => {
  return <div>DeletePemeriksaanSoftware</div>;
};
export default DeletePemeriksaanSoftware;
