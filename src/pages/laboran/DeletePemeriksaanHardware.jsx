
import { redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
export const action = async ({params}) => {
    try {
    await customFetch.delete(`v1/pemeriksaan/hardware/${params.idPemeriksaan}`,{withCredentials:true})
    return redirect(`/admin/dashboard-laboran/${params.id}/pemeriksaan/hardware`)
    } catch (error) {
        console.log(error)
        return error
    }
}
const DeletePemeriksaanHardware = () => {
  return (
    <div>DeletePemeriksaanHardware</div>
  )
}
export default DeletePemeriksaanHardware