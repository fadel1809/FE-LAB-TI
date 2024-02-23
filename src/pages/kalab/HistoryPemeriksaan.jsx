import Wrapper from "../../assets/wrappers/historyPemeriksaan";
import { LuFileText } from "react-icons/lu";

import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HistoryPemeriksaan = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-center text-biru-uhamka text-xl font-bold">
          History Pemeriksaan
        </h1>
        <table className="table-auto w-full border border-collapse my-5">
          <thead className="border border-collapse bg-gray-100 text-md">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">ID Pemeriksaan</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Aslab</th>
              <th className="border p-2">Nama Lab</th>
              <th>Status</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            <tr>
              <td className="border p-2 ">1</td>
              <td className="border p-2">Cek 001</td>
              <td className="border p-2">10 Januari</td>
              <td className="border p-2">Adit</td>
              <td className="border p-2">FTTI1</td>
              <td>Pengecekan</td>
              <td className="border p-2 text-white flex items-center text-center justify-center">
                <Link to={"/dashboard-laboran/pemeriksaan/hardware/1/detail"}>
                  <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                    <LuFileText className="mr-2" />
                    Detail
                  </button>
                </Link>

                <button className="flex items-center bg-red-500 rounded-md px-3 py-1 ">
                  <FaTrashCan className="mr-2" />
                  Hapus
                </button>
              </td>
            </tr>
            {/* Tambahkan baris lain sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default HistoryPemeriksaan;
