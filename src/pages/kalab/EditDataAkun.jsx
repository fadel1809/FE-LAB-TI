/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { Form, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(`v1/akun/staff/${params.idAkun}`, data, {
      withCredentials: true,
    });
    toast.success("Akun Staff Berhasil Diedit!");
    return redirect(`/admin/dashboard-kalab/${params.id}/pusat-akun`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const loader = async ({ request, params }) => {
  try {
    const result = await customFetch.get(`v1/akun/staff/${params.idAkun}`,{withCredentials:true})
    return result.data
  } catch (error) {
    console.log(error);
    return error;
  }
};

const EditDataAkun = () => {
  const {data} = useLoaderData()
  const dataLoader = data[0]
 return (
   <Wrapper>
     <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
       <BackButton/>
       <h1 className="text-biru-uhamka font-bold text-xl text-center">
         Edit Akun Staff
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
               defaultValue={dataLoader.email}
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
               defaultValue={dataLoader.username}
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
                 defaultValue={dataLoader.role}
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
               <MdEditDocument className="mr-2" />
               Edit
             </button>
           </div>
         </Form>
       </div>
     </div>
   </Wrapper>
 );
};
export default EditDataAkun;
