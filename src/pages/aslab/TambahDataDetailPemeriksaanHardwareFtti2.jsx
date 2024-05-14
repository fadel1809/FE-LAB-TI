import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { Form, redirect } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import NavbarAdmin from "../../components/NavbarAdmin";
import BackButton from "../../components/BackButton";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(
      `v1/pemeriksaan/detail-hardware/${params.idPemeriksaan}`,
      data,
      { withCredentials: true }
    );
    toast.success("Detail Pemeriksaan Hardware Berhasil Dibuat!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/hardware/${params.idPemeriksaan}/detail-ftti2`
    );
  } catch (error) {
    console.log(error);
    toast.error("Detail Pemeriksaan Hardware Gagal Dibuat!");
    return error;
  }
};
const TambahDataDetailPemeriksaanHardwareFtti2 = () => {
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="mx-64 my-10 bg-white shadow-xl py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Tambah Detail Pemeriksaan Hardware FTTI2
        </h1>
        <div>
          <Form
            method="post"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="periode"
              >
                No. PC
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="no_pc"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tanggal"
              >
                No. Aset
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="no_aset"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="aslab"
              >
                Monitor
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="monitor"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="laboratorium"
              >
                Keyboard
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="keyboard"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                Mouse
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="mouse"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                CPU
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="cpu"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                RAM
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="ram"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                Motherboard
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="motherboard"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                VGA
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="vga"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                HDD
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="hdd"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                SSD
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="ssd"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                Kabel Lan
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="kabel_lan"
                defaultValue={"Connect"}
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status_pemeriksaan"
              >
                Keterangan
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="keterangan"
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
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default TambahDataDetailPemeriksaanHardwareFtti2;
