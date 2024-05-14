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
      `/admin/dashboard-laboran/${params.id}/pemeriksaan/software/${params.idPemeriksaan}/detail-ftti2`
    );
  } catch (error) {
    console.log(error);
    toast.error("Detail Pemeriksaan Hardware Gagal Dibuat!");
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
const EditDetailPemeriksaanSoftwareFtti2 = () => {
        const dataLoader = useLoaderData();
        const data = dataLoader[0];
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="mx-64 my-10 bg-white shadow-xl py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Edit Detail Pemeriksaan Software FTTI2
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
                htmlFor="devcpp"
              >
                Dev-C++
              </label>
              <select
              defaultValue={data.devcpp}
                name="devcpp"
                id="devcpp"
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
                htmlFor="xampp"
              >
                XAMPP
              </label>
              <select
              defaultValue={data.xampp}
                name="xampp"
                id="xampp"
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
                htmlFor="netbeans"
              >
                Netbeans
              </label>
              <select
              defaultValue={data.netbeans}
                name="netbeans"
                id="netbeans"
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="matlab"
              >
                Matlab
              </label>
              <select
              defaultValue={data.matlab}
                name="matlab"
                id="matlab"
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
                htmlFor="balsamic"
              >
                Balsamic
              </label>
              <select
              defaultValue={data.balsamic}
                name="balsamic"
                id="balsamic"
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
                htmlFor="pycharm"
              >
                Pycharm
              </label>
              <select
              defaultValue={data.pycharm}
                name="pycharm"
                id="pycharm"
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
                htmlFor="cpu_simulator"
              >
                CPU Simulator
              </label>
              <select
              defaultValue={data.cpu_simulator}
                name="cpu_simulator"
                id="cpu_simulator"
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
                htmlFor="photoshop"
              >
                Phostoshop
              </label>
              <select
              defaultValue={data.photoshop}
                name="photoshop"
                id="photoshop"
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
                htmlFor="python"
              >
                Python
              </label>
              <select
              defaultValue={data.python}
                name="python"
                id="python"
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
                htmlFor="veyon"
              >
                Veyon
              </label>
              <select
              defaultValue={data.veyon}
                name="veyon"
                id="veyon"
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
                htmlFor="composer"
              >
                Composer
              </label>
              <select
              defaultValue={data.composer}
                name="composer"
                id="composer"
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
                htmlFor="arduino_ide"
              >
                Arduino IDE
              </label>
              <select
              defaultValue={data.arduino_ide}
                name="arduino_ide"
                id="arduino_ide"
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
export default EditDetailPemeriksaanSoftwareFtti2;
