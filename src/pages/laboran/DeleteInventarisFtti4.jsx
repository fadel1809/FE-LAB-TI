import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`v1/inventaris/ftti4/${params.idInventaris}`, {
      withCredentials: true,
    });
    toast.error("Aset Berhasil Dihapus!");
    return redirect(`/admin/dashboard-laboran/${params.id}/inventaris/FTTI4`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteInventarisFtti4 = () => {
  return <div>DeleteInventarisFtti4</div>;
};
export default DeleteInventarisFtti4;
