import Wrapper from "../../assets/wrappers/peminjamanRuang";
const PeminjamanRuang = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl">
          Daftar Pemohon Peminjaman Ruang
        </h1>
        <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
          <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-4">Nama</th>
              <th className="border p-4">NIM</th>
              <th className="border p-4">Keperluan</th>
              <th className="border p-4">Ruang</th>
              <th className="border p-4">Tanggal Peminjaman</th>
              <th className="border p-4">Waktu Peminjaman</th>
              <th className="border p-4">Status</th>
              <th className="border p-4"></th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-center text-xs">
            <tr>
              <td className="border p-2">Nama</td>
              <td className="border px-2">NIM</td>
              <td className="border px-2">Keperluan</td>
              <td className="border px-2">Jenis Barang/Alat</td>
              <td className="border px-2">Tanggal Peminjaman</td>
              <td className="border px-2">Waktu Peminjaman</td>
              <td className="border px-2">pending</td>
              <td className="border px-2">Terima | Tolak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default PeminjamanRuang;
