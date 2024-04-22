import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`v1/inventaris/ftti2/${params.idInventaris}`, {
      withCredentials: true,
    });
    toast.error("Aset Berhasil Dihapus!");
    return redirect(`/admin/dashboard-laboran/${params.id}/inventaris/FTTI2`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteInventarisFtti2 = () => {
  return <div>DeleteInventarisFtti2</div>;
};
export default DeleteInventarisFtti2;
