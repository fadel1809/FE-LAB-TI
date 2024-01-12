import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PemeriksaanSoftware = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl">
          Pemeriksaan Sofware
        </h1>

        <button
          type="button"
          className="bg-green-600 rounded-md my-4 px-3 py-1 mr-2 text-white flex text-center items-center"
        >
          <FaCirclePlus className="mr-2" />
          Tambah Data
        </button>
        <table className="table-auto w-full border border-collapse my-5">
          <thead className="border border-collapse">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">ID Pemeriksaan</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Aslab</th>
              <th className="border p-2">Nama Lab</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Cek 001</td>
              <td className="border p-2">10 Januari</td>
              <td className="border p-2">Adit</td>
              <td className="border p-2">FTTI1</td>
              <td className="border p-2 text-white flex items-center text-center justify-center">
                <Link to="detail">
                  <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                    <LuFileText className="mr-2" />
                    Detail
                  </button>
                </Link>

                <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                  <MdEditDocument className="mr-2" />
                  Edit
                </button>
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
export default PemeriksaanSoftware;
