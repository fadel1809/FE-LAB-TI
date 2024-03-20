import NavbarPolos from "../../components/NavbarPolos";
import Wrapper from "../../assets/wrappers/formPeminjaman";
import { BsFillSendPlusFill } from "react-icons/bs";

const FormPeminjamanAlat = () => {
  return (
    <>
      <Wrapper>
        <div className="bg-gray-50">
          <NavbarPolos />
          <div className=" bg-white px-7 py-5 rounded-md shadow shadow-lg max-w-lg mx-auto mb-5">
            <h2 className="text-xl text-center mb-4 text-biru-uhamka font-bold">
              Form Peminjaman Barang Laboratorium
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nama" className="block mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="nim" className="block mb-1">
                  NIM
                </label>
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="keperluan" className="block mb-1">
                  Keperluan
                </label>
                <textarea
                  id="keperluan"
                  name="keperluan"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                  cols="20"
                  rows="2"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="ruang" className="block mb-1">
                  Jenis Barang
                </label>
                <input type="text" name="jenis_barang" id="" />
              </div>
              <div className="mb-4">
                <label htmlFor="tanggal" className="block mb-1">
                  Tanggal Peminjaman
                </label>
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal_peminjaman"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-biru-uhamka "
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="waktu" className="block mb-1">
                  Tanggal Pengembalian
                </label>
                <input
                  type="date"
                  id="waktu"
                  name="tanggal_pengembalian"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-biru-uhamka text-white px-4 py-2 rounded-md flex items-center"
              >
                Submit
                <BsFillSendPlusFill className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default FormPeminjamanAlat;
