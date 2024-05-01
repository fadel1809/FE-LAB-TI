import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.put(`v1/akun/staff/${params.idAkun}`, null, {
      withCredentials: true,
    });
    toast.error("Akun Berhasil Dihapus!");
    return redirect(`/admin/dashboard-kalab/${params.id}/pusat-akun`);

  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteAkun = () => {
  return <div>DeleteAkun</div>;
};
export default DeleteAkun;
