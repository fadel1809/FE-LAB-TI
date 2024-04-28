
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`v1/inventaris/ftti3/${params.idInventaris}`, {
      withCredentials: true,
    });
    toast.error("Aset Berhasil Dihapus!");
    return redirect(`/admin/dashboard-aslab/${params.id}/inventaris/FTTI3`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const DeleteInventarisFtti3 = () => {
  return (
    <div>DeleteInventarisFtti3</div>
  )
}
export default DeleteInventarisFtti3