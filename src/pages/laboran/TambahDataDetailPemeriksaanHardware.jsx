import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";

const TambahDataDetailPemeriksaanHardware = () => {
  return (
    <Wrapper>
      <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Tambah Detail Pemeriksaan Hardware
        </h1>
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="periode"
              >
                Periode
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="periode"
                name="periode"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tanggal"
              >
                Tanggal
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="tanggal"
                name="tanggal"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="aslab"
              >
                Nama Asisten Lab/Laboran
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="aslab"
                name="aslab"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="laboratorium"
              >
                Laboratorium
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="laboratorium"
                name="laboratorium"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                Status Pemeriksaan
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="status_pemeriksaan"
                name="status_pemeriksaan"
              />
            </div>
            <div className="mb-4 col-span-2">
              <button
                type="submit"
                className="bg-biru-uhamka text-white px-4 py-2 shadow-md rounded-md flex items-center"
              >
                <FaCirclePlus className="mr-2" />
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default TambahDataDetailPemeriksaanHardware;
