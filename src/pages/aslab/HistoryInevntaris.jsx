import { FaTrashCan } from "react-icons/fa6";
import Wrapper from "../../assets/wrappers/historyInventaris";
const HistoryInevntaris = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          History Inventaris
        </h1>
        <table className="table-auto w-full border border-collapse my-5 text-center text-md">
          <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-4">No.</th>
              <th className="border p-4">No. Aset</th>
              <th className="border p-4">Jenis</th>
              <th className="border p-4">Spesifikasi</th>
              <th className="border p-4">Posisi</th>
              <th className="border p-4">Keterangan</th>
              <th className="border p-4">Lab</th>
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
              <td className="border p-2">FTTI1</td>
              <td className="border p-2 text-white flex items-center text-center justify-center">
                <button
                  disabled
                  className="flex items-center bg-red-300 rounded-md px-3 py-1 "
                >
                  <FaTrashCan className="mr-2" />
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default HistoryInevntaris;
