/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/inventarisFTTI1";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { Link, useLoaderData, Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
export const loader = async () => {
  try {
    const result = await customFetch.get("v1/inventaris/ftti1", {
      withCredentials: true,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const InventarisFTTI1 = () => {
const { data } = useLoaderData();
let no = 1;
return (
  <Wrapper>
    <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
      <h1 className="text-biru-uhamka text-center font-bold text-xl">
        Daftar Inventaris FTTI1 - RPL
      </h1>
 
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
            {data.map((val) => {
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
export default InventarisFTTI1;
