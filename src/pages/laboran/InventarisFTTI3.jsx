/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/inventarisFTTI3";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
const InventarisFTTI3 = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          Inventaris FTTI3 - Multimedia
        </h1>

        <button
          type="button"
          className="bg-green-600 rounded-md my-4 px-3 py-1 mr-2 text-white flex text-center items-center"
        >
          <FaCirclePlus className="mr-2" />
          Tambah Aset
        </button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">F.A.215.040302.004.1.2019</td>
                <td className="border p-2">AC</td>
                <td className="border p-2">DAIKIN FTV60BXV14</td>
                <td className="border p-2">-</td>
                <td className="border p-2"></td>
                <td className="p-4 text-white flex items-center text-center justify-center">
                  <Link to={"#"}>
                    <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                      <MdEditDocument className="mr-2" />
                      Edit
                    </button>
                  </Link>
                  <button className="flex items-center bg-red-500 rounded-md px-3 py-1 ">
                    <FaTrashCan className="mr-2" />
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
export default InventarisFTTI3;
