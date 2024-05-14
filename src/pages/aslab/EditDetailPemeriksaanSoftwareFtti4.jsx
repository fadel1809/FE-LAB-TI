/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { Form, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import NavbarAdmin from "../../components/NavbarAdmin";
import { MdEditDocument } from "react-icons/md";
import BackButton from "../../components/BackButton";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(
      `v1/pemeriksaan/detail-software/${params.idPemeriksaan}/detail/${params.idDetail}`,
      data,
      { withCredentials: true }
    );
    toast.success("Detail Pemeriksaan Software Berhasil Diubah!");
    return redirect(
      `/admin/dashboard-aslab/${params.id}/pemeriksaan/software/${params.idPemeriksaan}/detail-ftti4`
    );
  } catch (error) {
    console.log(error);
    toast.error("Detail Pemeriksaan Sofware Gagal Dibuat!");
    return error;
  }
};
export const loader = async ({ params }) => {
  try {
    const response = await customFetch.get(
      `v1/pemeriksaan/detail-software/${params.idPemeriksaan}/detail/${params.idDetail}`,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
const EditDetailPemeriksaanSoftwareFtti4 = () => {
  const dataLoader = useLoaderData();
  const data = dataLoader[0];
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="mx-64 my-10 bg-white shadow-xl py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Edit Detail Pemeriksaan Software FTTI4
        </h1>
        <div>
          <Form
            method="post"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                OS
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="OS"
                defaultValue={data.OS}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jaringan"
              >
                Jaringan
              </label>
              <select
                defaultValue={data.jaringan}
                name="jaringan"
                id="jaringan"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="chrome"
              >
                Chrome
              </label>
              <select
                defaultValue={data.chrome}
                name="chrome"
                id="chrome"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="adobe_reader"
              >
                Adobe Reader
              </label>
              <select
                defaultValue={data.adobe_reader}
                name="adobe_reader"
                id="adobe_reader"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="autocad"
              >
                Autocad
              </label>
              <select
                defaultValue={data.autocad}
                name="autocad"
                id="autocad"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="autodesk"
              >
                Autodesk
              </label>
              <select
                defaultValue={data.autodesk}
                name="autodesk"
                id="autodesk"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="compas"
              >
                Compas
              </label>
              <select
                defaultValue={data.compas}
                name="compas"
                id="compas"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="solidwork"
              >
                Solidwork
              </label>
              <select
                defaultValue={data.solidwork}
                name="solidwork"
                id="solidwork"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="teamviewer"
              >
                TeamViewer
              </label>
              <select
                defaultValue={data.teamviewer}
                name="teamviewer"
                id="teamviewer"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="visual_studio"
              >
                Visual Studio
              </label>
              <select
                defaultValue={data.visual_studio}
                name="visual_studio"
                id="visual_studio"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="office"
              >
                Office
              </label>
              <select
                defaultValue={data.office}
                name="office"
                id="office"
                className="block  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=""></option>
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
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
};
export default EditDetailPemeriksaanSoftwareFtti4;
