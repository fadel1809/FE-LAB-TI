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
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware/${params.idPemeriksaan}/detail-ftti1`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteDetailPemeriksaanHardwareFtti1 = () => {
  return <div>DeleteDetailPemeriksaanHardwareFtti1</div>;
};
export default DeleteDetailPemeriksaanHardwareFtti1;
