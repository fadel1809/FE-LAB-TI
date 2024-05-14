/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import NavbarAdmin from "../../components/NavbarAdmin";
import BackButton from "../../components/BackButton";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(
      `v1/pemeriksaan/detail-software/${params.idPemeriksaan}`,
      data,
      { withCredentials: true }
    );
    toast.success("Detail Pemeriksaan Software Berhasil Dibuat!");
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/software/${params.idPemeriksaan}/detail-ftti1`
    );
  } catch (error) {
    console.log(error);
    toast.error("Detail Pemeriksaan Software Gagal Dibuat!");
    return error;
  }
};

const TambahDataDetailPemeriksaanSoftwareFtti1 = () => {
 return (
   <Wrapper>
     <NavbarAdmin />
     <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
       <BackButton/>
       <h1 className="text-biru-uhamka font-bold text-xl text-center">
         Tambah Detail Pemeriksaan Software FTTI1
       </h1>
       <div>
         <Form
           method="post"
           className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
         >
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">
               No. PC
             </label>
             <input
               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="text"
               name="no_pc"
             />
           </div>
           <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">
               OS
             </label>
             <input
               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="text"
               name="OS"
             />
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="jaringan"
             >
               Jaringan
             </label>
             <select
               name="jaringan"
               id="jaringan"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="chrome"
             >
               Chrome
             </label>
             <select
               name="chrome"
               id="chrome"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="devcpp"
             >
               Dev-C++
             </label>
             <select
               name="devcpp"
               id="devcpp"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="xampp"
             >
               XAMPP
             </label>
             <select
               name="xampp"
               id="xampp"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="netbeans"
             >
               Netbeans
             </label>
             <select
               name="netbeans"
               id="netbeans"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="office"
             >
               Office
             </label>
             <select
               name="office"
               id="office"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="matlab"
             >
               Matlab
             </label>
             <select
               name="matlab"
               id="matlab"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="adobe_reader"
             >
               Adobe Reader
             </label>
             <select
               name="adobe_reader"
               id="adobe_reader"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="python"
             >
               Python
             </label>
             <select
               name="python"
               id="python"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="visual_studio"
             >
               Visual Studio
             </label>
             <select
               name="visual_studio"
               id="visual_studio"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="sublime"
             >
               Sublime
             </label>
             <select
               name="sublime"
               id="sublime"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="pycharm"
             >
               Pycharm
             </label>
             <select
               name="pycharm"
               id="pycharm"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="cpu_simulator"
             >
               CPU Simulator
             </label>
             <select
               name="cpu_simulator"
               id="cpu_simulator"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="veyon"
             >
               Veyon
             </label>
             <select
               name="veyon"
               id="veyon"
               className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             >
               <option value=""></option>
               <option value="available">Available</option>
               <option value="not_available">Not Available</option>
             </select>
           </div>
           <div className="mb-4 col-span-2">
             <button
               type="submit"
               className="bg-biru-uhamka text-white px-4 py-2 shadow-md rounded-md flex items-center"
             >
               <FaCirclePlus className="mr-2" />
               Tambah
             </button>
           </div>
         </Form>
       </div>
     </div>
   </Wrapper>
 );
};
export default TambahDataDetailPemeriksaanSoftwareFtti1;
