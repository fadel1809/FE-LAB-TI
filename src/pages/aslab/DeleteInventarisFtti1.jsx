import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`v1/inventaris/ftti1/${params.idInventaris}`, {
      withCredentials: true,
    });
    toast.error("Aset Berhasil Dihapus!");
    return redirect(`/admin/dashboard-aslab/${params.id}/inventaris/FTTI1`);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const DeleteInventarisFtti1 = () => {
  return <div>DeleteInventarisFtti1</div>;
};
export default DeleteInventarisFtti1;
