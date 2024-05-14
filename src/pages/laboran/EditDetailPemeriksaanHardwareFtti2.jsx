/* eslint-disable no-unused-vars */
import { redirect, useLoaderData, Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { MdEditDocument } from "react-icons/md";
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import NavbarAdmin from "../../components/NavbarAdmin";
import BackButton from "../../components/BackButton";
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(
      `v1/pemeriksaan/detail-hardware/${params.idPemeriksaan}/detail/${params.idDetail}`,
      data,
      { withCredentials: true }
    );
    toast.success("Detail Pemeriksaan Berhasil di Ubah");
    return redirect(
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/hardware/${params.idPemeriksaan}/detail-ftti1`
    );
  } catch (error) {
    console.log(error);
  }
};
export const loader = async ({ params }) => {
  try {
    const response = await customFetch.get(
      `v1/pemeriksaan/detail-hardware/${params.idPemeriksaan}/detail/${params.idDetail}`,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
const EditDetailPemeriksaanHardwareFtti2 = () => {
  const dataLoader = useLoaderData();
  const data = dataLoader[0];
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="mx-64 my-10 bg-white shadow-xl py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Edit Detail Pemeriksaan Hardware FTTI2
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
                defaultValue={data.no_pc}
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
                defaultValue={data.no_aset}
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
                defaultValue={data.monitor}
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
                defaultValue={data.keyboard}
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
                defaultValue={data.mouse}
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
                defaultValue={data.cpu}
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
                defaultValue={data.ram}
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
                defaultValue={data.motherboard}
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
                defaultValue={data.vga}
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
                defaultValue={data.hdd}
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
                defaultValue={data.ssd}
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
                defaultValue={data.kabel_lan}
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
                defaultValue={data.keterangan}
              />
            </div>
            <div className="mb-4 col-span-2">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 shadow-md rounded-md flex items-center"
              >
                <MdEditDocument className="mr-2" />
                Edit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
}
export default EditDetailPemeriksaanHardwareFtti2