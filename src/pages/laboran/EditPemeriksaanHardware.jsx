/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Form, redirect, useOutletContext, useLoaderData } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton";
import moment from "moment-timezone";
export const loader = async ({params}) => {
  try {
    const result = await customFetch.get(`v1/pemeriksaan/hardware/${params.idPemeriksaan}`, {
      withCredentials: true,
    });

    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const action = async({request, params}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.tanggal = moment(data.tanggal, "DD/MM/YYYY").format("YYYY-MM-DD");
  try {
    await customFetch.put(`v1/pemeriksaan/hardware/${params.idPemeriksaan}`,data,{withCredentials:true})
    toast.success("Pemriksaan Hardware Berhasil di Edit!")
    return redirect(`/admin/dashboard-laboran/${params.id}/pemeriksaan/hardware`)
  } catch (error) {
    console.log(error)
    return redirect(
          `/admin/dashboard-laboran/${params.id}/pemeriksaan/hardware/${params.idPemeriksaan}/edit`
        );

  }
}
const EditPemeriksaanHardware = () => {
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
const dataContext = useOutletContext();
const dataLoader = useLoaderData()
const data = dataLoader[0]
today = dd + "/" + mm + "/" + yyyy;
return (
  <Wrapper>
    <div className="mx-64 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
      <BackButton />
      <h1 className="text-biru-uhamka font-bold text-xl text-center">
        Edit Pemeriksaan Hardware
      </h1>
      <div>
        <Form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8"
          method="post"
        >
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
              defaultValue={moment
                .utc(data.tanggal)
                .tz("Asia/Jakarta")
                .format("DD/MM/YYYY")}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aslab"
            >
              Nama Laboran
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="staff_lab"
              name="staff_lab"
              defaultValue={data.staff_lab}
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="laboratorium"
            >
              Laboratorium
            </label>
            <div className="relative">
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="laboratorium"
                id="status"
                defaultValue={data.laboratorium}
              >
                <option value="FTTI1">FTTI1</option>
                <option value="FTTI2">FTTI2</option>
                <option value="FTTI3">FTTI3</option>
                <option value="FTTI4">FTTI4</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* You can customize the arrow icon */}
                <FaCircleArrowDown className="text-xl text-biru-uhamka" />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-biru-uhamka text-white px-4 py-2 shadow-md rounded-md flex items-center"
            >
              <FaEdit className="mr-2" />
              Edit
            </button>
          </div>
        </Form>
      </div>
    </div>
  </Wrapper>
);
};
export default EditPemeriksaanHardware;
