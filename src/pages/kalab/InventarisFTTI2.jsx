/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/inventarisFTTI2";
import { Link,useSubmit, useLoaderData, Form } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import customFetch from "../../utils/customFetch";
export const loader = async ({request}) => {
  try {
     const params = Object.fromEntries([
       ...new URL(request.url).searchParams.entries(),
     ]);
    const {data} = await customFetch.get("v1/inventaris/ftti2", {
      withCredentials: true,
      params:params
    });
    return {data,searchValue:[params]};
  } catch (error) {
    console.log(error);
  }
};
const InventarisFTTI2 = () => {
 const debounce = (onChange) => {
   let timeout;
   return (e) => {
     const form = e.currentTarget.form;
     clearTimeout(timeout);
     timeout = setTimeout(() => {
       onChange(form);
     }, 1500);
   };
 };
 const submit = useSubmit();

 const { data, searchValue } = useLoaderData();
 let no = 1;
 
 return (
   <Wrapper>
     <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
       <h1 className="text-biru-uhamka text-center font-bold text-xl">
         Daftar Inventaris FTTI2 - Jaringan
       </h1>
       <div className="flex justify-end py-2">
         <Form className="flex py-2">
           <input
             placeholder="Cari"
             type="search"
             name="search"
             defaultValue={searchValue[0].search}
             onChange={debounce((form) => submit(form))}
             className="appearance-none text-black placeholder:italic focus:border-biru-uhamka focus:border-2 focus:outline-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
           />
           <button type="submit" className="text-biru-uhamka">
             <FaSearch className="ml-2" />
           </button>
         </Form>
       </div>
       <div className="overflow-auto">
         <table className="table-auto w-full border border-collapse my-5 text-center text-md">
           <thead className="border border-collapse bg-gray-100">
             <tr>
               <th className="border p-4">No.</th>
               <th className="border p-4">No. Aset</th>
               <th className="border p-4">Jenis</th>
               <th className="border p-4">Spesifikasi</th>
               <th className="border p-4">Posisi</th>
               <th className="border p-4">Keterangan</th>
             </tr>
           </thead>
           <tbody className="text-center text-sm">
             {data.data.map((val) => {
               return (
                 <tr key={val.id}>
                   <td className="border p-2">{no++}</td>
                   <td className="border p-2">{val.no_aset}</td>
                   <td className="border p-2">{val.jenis}</td>
                   <td className="border p-2">{val.spesifikasi}</td>
                   <td className="border p-2">{val.posisi}</td>
                   <td className="border p-2">{val.keterangan}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
     </div>
   </Wrapper>
 );
};
export default InventarisFTTI2;
