/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Form, redirect, useOutletContext } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("v1/akun/staff", data, {
      withCredentials: true,
    });
    toast.success("Akun Staff Berhasil Dibuat!");
    return redirect(
      `/admin/dashboard-kalab/${params.id}/pusat-akun`
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
const TambahDataAkun = () => {
 return (
   <Wrapper>
     <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
       <BackButton/>
       <h1 className="text-biru-uhamka font-bold text-xl text-center">
         Tambah Akun Staff
       </h1>
       <div>
         <Form
           className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
           method="post"
         >
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="email"
             >
               Email
             </label>
             <input
               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="email"
               id="email"
               name="email"
             />
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="username"
             >
                Username            
            </label>
             <input
               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="text"
               id="username"
               name="username"
             />
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="password"
             >
               Password
             </label>
             <input
               className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               type="password"
               id="password"
               name="password"
             />
           </div>
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="role"
             >
               Role
             </label>
             <div className="relative">
               <select
                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 name="role"
                 id="role"
               >
                 <option value="aslab">Aslab</option>
                 <option value="laboran">Laboran</option>
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                 {/* You can customize the arrow icon */}
                 <FaCircleArrowDown className="text-xl text-biru-uhamka" />
               </div>
             </div>
           </div>
           <div className="col-span-2">
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
export default TambahDataAkun;
