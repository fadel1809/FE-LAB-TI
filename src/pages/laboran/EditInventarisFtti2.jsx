/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { MdEdit, MdEditDocument } from "react-icons/md";
import {
  Form,
  redirect,
  useOutletContext,
  useLoaderData,
} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";
export const loader = async ({ params }) => {
  try {
    const result = await customFetch.get(
      `v1/inventaris/ftti2/${params.idInventaris}`,
      { withCredentials: true }
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.put(`v1/inventaris/ftti2/${params.idInventaris}`, data, {
      withCredentials: true,
    });
    toast.success("Berhasil Edit Data Aset");
    return redirect(`/admin/dashboard-laboran/${params.id}/inventaris/FTTI2`);
  } catch (error) {
    console.log(error);
  }
};
const EditInventarisFtti2 = () => {
     const { data } = useLoaderData();
     const dataLoader = data[0];
  return (
    <Wrapper>
      <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Edit Data Aset Inventaris FTTI2
        </h1>
        <div>
          <Form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
            method="post"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="no_aset"
              >
                Nomor Aset
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="no_aset"
                name="no_aset"
                defaultValue={dataLoader.no_aset}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jenis"
              >
                Jenis
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="jenis"
                name="jenis"
                defaultValue={dataLoader.jenis}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="spesifikasi"
              >
                Spesifikasi
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="spesifikasi"
                name="spesifikasi"
                defaultValue={dataLoader.spesifikasi}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="posisi"
              >
                Posisi
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="posisi"
                name="posisi"
                defaultValue={dataLoader.posisi}
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="keterangan"
              >
                Keterangan
              </label>

              <textarea
                required
                name="keterangan"
                id="keterangan"
                cols="30"
                rows="5"
                defaultValue={dataLoader.keterangan}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-biru-uhamka text-white px-4 py-2 shadow-md rounded-md flex items-center"
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
export default EditInventarisFtti2;
