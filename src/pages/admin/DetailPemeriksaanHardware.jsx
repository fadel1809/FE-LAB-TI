/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const DetailPemeriksaanHardware = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg p-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl mb-4">
          Detail Pemeriksaan Hardware
        </h1>
        <div className="my-4">
          <p>Pemeriksaan :</p>
          <div className="my-2"></div>
          <p>Tanggal : </p>
          <div className="my-2"></div>
          <p>Asisten Lab : </p>
          <div className="my-2"></div>

          <p>Laboratorium : </p>
        </div>
        <Link to={"/dashboard/pemeriksaan/hardware/1/detail/tambah"}>
          <button
            type="button"
            className="bg-green-600 rounded-md my-2 px-3 py-2  text-white inline-flex text-center items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Data
          </button>
        </Link>

        <table className="table-auto w-full border border-collapse my-5">
          <thead className="border border-collapse">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">No. Aset</th>
              <th className="border p-2">Monitor</th>
              <th className="border p-2">Keyboard</th>
              <th className="border p-2">Mouse</th>
              <th className="border p-2">CPU</th>
              <th className="border p-2">RAM</th>
              <th className="border p-2">Motherboard</th>
              <th className="border p-2">VGA</th>
              <th className="border p-2">HDD</th>
              <th className="border p-2">SSD</th>
              <th className="border p-2">Keterangan</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">1</td>
            <td className="border p-2">
              <button className="text-yellow-500 hover:text-yellow-700 mr-2">
                <MdEditDocument />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrashCan />
              </button>
            </td>
            {/* Tambahkan baris lain sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default DetailPemeriksaanHardware;
