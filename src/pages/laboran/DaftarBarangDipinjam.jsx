import Wrapper from "../../assets/wrappers/peminjamanAlat";
import { Link } from "react-router-dom";

const DaftarBarangDipinjam = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Daftar Status Barang Dipinjam
        </h1>
        <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
          <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-4">Nama</th>
              <th className="border p-4">NIDN/NIK</th>
              <th className="border p-4">Keperluan</th>
              <th className="border p-4">Jenis Barang</th>
              <th className="border p-4">Tanggal Peminjaman</th>
              <th className="border p-4">Tanggal Pengembalian</th>
              <th className="border p-4">status</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-center text-xs">
            <tr>
              <td className="border p-2">Nama</td>
              <td className="border px-2">NIDN/NIK</td>
              <td className="border px-2">Keperluan</td>
              <td className="border px-2">Jenis Barang/Alat</td>
              <td className="border px-2">Tanggal Peminjaman</td>
              <td className="border px-2">Tanggal Pengembalian</td>
              <td className="border px-2">dipinjam</td>
              <td className="border p-2 text-white flex items-center text-center justify-center">
                <Link to={"/dashboard/pemeriksaan/software/1/detail"}>
                  <button className="flex items-center bg-green-600 rounded-md px-3 py-1 mr-2 ">
                    Barang Dikembalikan
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default DaftarBarangDipinjam;
