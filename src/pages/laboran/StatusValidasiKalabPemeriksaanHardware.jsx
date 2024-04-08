import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(
      `v1/pemeriksaan/hardware/validasi-kalab/${params.idPemeriksaan}`,
      null,
      { withCredentials: true }
    );
    toast.success("Pemeriksaan Akan Divalidasi Kalab!");
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/konfirmasi-hardware`
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
