import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/detail-hardware/${params.idPemeriksaan}/detail/${params.idDetail}`,
      { withCredentials: true }
    );
    toast.error("Detail Pemeriksaan Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware/${params.idPemeriksaan}/detail-ftti4`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteDetailPemeriksaanHardwareFtti4 = () => {
  return <div>DeleteDetailPemeriksaanHardwareFtti4</div>;
};
export default DeleteDetailPemeriksaanHardwareFtti4;
