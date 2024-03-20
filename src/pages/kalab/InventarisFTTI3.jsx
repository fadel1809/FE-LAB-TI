import Wrapper from "../../assets/wrappers/inventarisFTTI3";
import { Link } from "react-router-dom";
import { RiCheckFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
const InventarisFTTI3 = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          Inventaris FTTI3 - Multimedia
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
                <td className="border p-2 text-white flex items-center text-center justify-center">
                  <Link to={"#"}>
                    <button className="flex items-center bg-green-500 rounded-md px-3 py-1 mr-2 ">
                      <RiCheckFill className="mr-1" />
                      Konfirmasi
                    </button>
                  </Link>
                  <button className="flex items-center bg-red-500 rounded-md px-3 py-1 ">
                    <MdCancel className="mr-1" />
                    Tolak
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
