import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/pemeriksaan/hardware/validasi-laboran/${params.idPemeriksaan}`,
      null,
      { withCredentials: true }
    );
    toast.success("Pemeriksaan Akan Divalidasi Laboran!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

const StatusValidasiKalabPemeriksaanHardware = () => {
  return <div>StatusValidasiKalabPemeriksaanHardware</div>;
};
export default StatusValidasiKalabPemeriksaanHardware;
