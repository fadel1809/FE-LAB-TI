import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/pusatAkun";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";

const PusatAkun = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-center text-2xl text-biru-uhamka font-bold">
          Pusat Akun
        </h1>
        <Link
          to={"/dashboard-laboran/pemeriksaan/hardware/1/tambah"}
          className="inline-block"
        >
          <button
            type="button"
            className="bg-green-600 rounded-md my-4 px-3 py-1 mr-2 text-white flex text-center items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Akun
          </button>
        </Link>
        <table className="table-auto w-full border border-collapse my-5">
          <thead className="border border-collapse bg-gray-100 text-md">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Password</th>

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

              <td className="border p-2 text-white flex items-center text-center justify-center">
                <Link to={"#"}>
                  <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                    <MdEditDocument className="mr-2" />
                    Edit Akun
                  </button>
                </Link>
                <button className="flex items-center bg-red-500 rounded-md px-3 py-1 ">
                  <FaTrashCan className="mr-2" />
                  Hapus Akun
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
export default PusatAkun;
