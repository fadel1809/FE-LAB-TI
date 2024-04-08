import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(
      `v1/pemeriksaan/detail-software/${params.idPemeriksaan}/detail/${params.idDetail}`,
      { withCredentials: true }
    );
    toast.error("Detail Pemeriksaan Berhasil Dihapus!");
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/software/${params.idPemeriksaan}/detail-ftti3`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteDetailPemeriksaanSoftwareFtti3 = () => {
  return <div>DeleteDetailPemeriksaanSoftwareFtti3</div>;
};
export default DeleteDetailPemeriksaanSoftwareFtti3;
