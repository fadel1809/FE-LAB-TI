import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/pemeriksaan/hardware/validasi-laboran/${params.idPemeriksaan}`,null,
      { withCredentials: true }
    );
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/hardware`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const ValidasiLaboranPemeriksaanHardware = () => {
  return <div>ValidasiLaboranPemeriksaanHardware</div>;
};
export default ValidasiLaboranPemeriksaanHardware;
