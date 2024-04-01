/* eslint-disable no-unused-vars */
import { useState } from "react";
import Wrapper from "../../assets/wrappers/detailPemeriksaanHardware";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan, FaCirclePlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { LuFilePlus2 } from "react-icons/lu";
import customFetch from "../../utils/customFetch";
import { Link, useLoaderData } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
export const loader = async ({ params }) => {
  const response = await customFetch.get(
    `v1/pemeriksaan/software/${params.idPemeriksaan}`,
    {
      withCredentials: true,
    }
  );
  return response.data.data;
};
const DetailPemeriksaanSoftwareFtti4 = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const data = useLoaderData();
    const user = data.userCreator;
             const statusDiterima = user[0].status_pemeriksaan === "diterima";

    const detailPemeriksaan = data.detailPemeriksaan;
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="bg-gray-100 py-5 h-full">
        <div className="mx-10 ml-10  bg-white shadow-lg py-5 px-5 rounded-sm">
          <h1 className="text-biru-uhamka font-bold text-xl mb-4">
            Detail Pemeriksaan Software
          </h1>
          {user.map((val) => {
            return (
              <div className="my-4" key={val.id}>
                <p>kuartal : {val.kuartal}</p>
                <p>Tanggal : {val.tanggal} </p>
                <p>Asisten Lab : {val.staff_lab} </p>
                <p>Laboratorium : {val.laboratorium} </p>
              </div>
            );
          })}

          <Link to={"#"} onClick={() => setShowModal(true)}>
            <button
              type="button"
              className="bg-green-600 rounded-md my-2 px-3 py-2 text-white inline-flex items-center"
            >
              <FaCirclePlus className="mr-2" />
              Tambah Data
            </button>
          </Link>
          {/* Modal for adding new data */}

          {/* Modal for adding new data */}
          {showModal && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 text-xl text-biru-uhamka">
                      <strong>Tambah Data</strong>
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="grid grid-cols-2 gap-4">
                          {/* First Column */}
                          <div className="mb-4">
                            <label
                              htmlFor="noPc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              No. PC
                            </label>
                            <input
                              type="text"
                              id="noPc"
                              name="noPc"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="noAset"
                              className="block text-sm font-medium text-gray-700"
                            >
                              No. Aset
                            </label>
                            <input
                              type="text"
                              id="noAset"
                              name="noAset"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="monitor"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Monitor
                            </label>
                            <input
                              type="text"
                              id="monitor"
                              name="monitor"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="keyboard"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Keyboard
                            </label>
                            <input
                              type="text"
                              id="keyboard"
                              name="keyboard"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="mouse"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Mouse
                            </label>
                            <input
                              type="text"
                              id="mouse"
                              name="mouse"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="cpu"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CPU
                            </label>
                            <input
                              type="text"
                              id="cpu"
                              name="cpu"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="ram"
                              className="block text-sm font-medium text-gray-700"
                            >
                              RAM
                            </label>
                            <input
                              type="text"
                              id="ram"
                              name="ram"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="mobo"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Motherboard
                            </label>
                            <input
                              type="text"
                              id="mobo"
                              name="motherboard"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="vga"
                              className="block text-sm font-medium text-gray-700"
                            >
                              VGA
                            </label>
                            <input
                              type="text"
                              id="vga"
                              name="vga"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="hdd"
                              className="block text-sm font-medium text-gray-700"
                            >
                              HDD
                            </label>
                            <input
                              type="text"
                              id="hdd"
                              name="hdd"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="ssd"
                              className="block text-sm font-medium text-gray-700"
                            >
                              SSD
                            </label>
                            <input
                              type="text"
                              id="ssd"
                              name="ssd"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="keterangan"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Keterangan
                            </label>
                            <input
                              type="text"
                              id="keterangan"
                              name="keterangan"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                        </div>
                        {/* Repeat similar structure for other fields */}

                        <div className="mt-4 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-red-600 rounded-md my-2 px-3 py-2 text-white inline-flex items-center"
                          >
                            <MdCancel className="mr-2" />
                            Batal
                          </button>
                          <button
                            type="submit"
                            className="bg-green-600 rounded-md my-2 px-3 py-2 text-white inline-flex items-center ml-2"
                          >
                            <FaCirclePlus className="mr-2" />
                            Tambah
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* modal edit */}
          {showModalEdit && (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 text-xl text-biru-uhamka">
                      <strong>Edit Data</strong>
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="grid grid-cols-2 gap-4">
                          {/* First Column */}
                          <div className="mb-4">
                            <label
                              htmlFor="noPc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              No. PC
                            </label>
                            <input
                              type="text"
                              id="noPc"
                              name="noPc"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="noAset"
                              className="block text-sm font-medium text-gray-700"
                            >
                              No. Aset
                            </label>
                            <input
                              type="text"
                              id="noAset"
                              name="noAset"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="monitor"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Monitor
                            </label>
                            <input
                              type="text"
                              id="monitor"
                              name="monitor"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="keyboard"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Keyboard
                            </label>
                            <input
                              type="text"
                              id="keyboard"
                              name="keyboard"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="mouse"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Mouse
                            </label>
                            <input
                              type="text"
                              id="mouse"
                              name="mouse"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="cpu"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CPU
                            </label>
                            <input
                              type="text"
                              id="cpu"
                              name="cpu"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="ram"
                              className="block text-sm font-medium text-gray-700"
                            >
                              RAM
                            </label>
                            <input
                              type="text"
                              id="ram"
                              name="ram"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="mobo"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Motherboard
                            </label>
                            <input
                              type="text"
                              id="mobo"
                              name="motherboard"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="vga"
                              className="block text-sm font-medium text-gray-700"
                            >
                              VGA
                            </label>
                            <input
                              type="text"
                              id="vga"
                              name="vga"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="hdd"
                              className="block text-sm font-medium text-gray-700"
                            >
                              HDD
                            </label>
                            <input
                              type="text"
                              id="hdd"
                              name="hdd"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="ssd"
                              className="block text-sm font-medium text-gray-700"
                            >
                              SSD
                            </label>
                            <input
                              type="text"
                              id="ssd"
                              name="ssd"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="keterangan"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Keterangan
                            </label>
                            <input
                              type="text"
                              id="keterangan"
                              name="keterangan"
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                        </div>
                        {/* Repeat similar structure for other fields */}

                        <div className="mt-4 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setShowModalEdit(false)}
                            className="bg-red-600 rounded-md my-2 px-3 py-2 text-white inline-flex items-center"
                          >
                            <MdCancel className="mr-2" />
                            Batal
                          </button>
                          <button
                            type="submit"
                            className="bg-yellow-500 rounded-md my-2 px-3 py-2 text-white inline-flex items-center ml-2"
                          >
                            <MdEditDocument className="mr-2" />
                            Edit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <table className="table-auto sm:overflow-auto-x lg:w-full border border-collapse">
            <thead className="border border-collapse bg-gray-200">
              <tr>
                <th className="border py-2 px-1 text-sm">No. PC</th>
                <th className="border py-2 px-1 text-sm">OS</th>
                <th className="border py-2 px-1 text-sm">Jaringan</th>
                <th className="border py-2 px-1 text-sm">Chrome</th>
                <th className="border py-2 px-1 text-sm">Adobe Reader</th>
                <th className="border py-2 px-1 text-sm">Autocad</th>
                <th className="border py-2 px-1 text-sm">Autodesk</th>
                <th className="border py-2 px-1 text-sm">Compas</th>
                <th className="border py-2 px-1 text-sm">Solidwork</th>
                <th className="border py-2 px-1 text-sm">Team Viewer</th>
                <th className="border py-2 px-1 text-sm">Visual Studio</th>
                <th className="border py-2 px-1 text-sm">Office</th>
                <th className="border px-5 py-2 text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {detailPemeriksaan.map((val) => {
                return (
                  <tr key={val.id}>
                    <td className="border px-1 py-2 text-md font-bold">
                      {val.no_pc}
                    </td>
                    <td className="border px-1 py-2 text-xs">{val.OS}</td>
                    <td className="border px-1 py-2 text-xs">{val.jaringan}</td>
                    <td className="border px-1 py-2 text-xs"> {val.chrome} </td>
                    <td className="border px-1  py-2 text-xs">
                      {val.adobe_reader}
                    </td>
                    <td className="border px-2 text-xs">{val.autocad}</td>
                    <td className="border px-2 text-xs">{val.autodesk}</td>
                    <td className="border px-2 text-xs">{val.compas}</td>
                    <td className="border px-2 text-xs">{val.solidwork}</td>
                    <td className="border px-2 text-xs">{val.teamviewer}</td>
                    <td className="border px-2 text-xs">{val.visual_studio}</td>
                    <td className="border px-1 py-2 text-xs">{val.office}</td>
                    <td className="border py-2 text-lg">
                      <Link to={"#"} onClick={() => setShowModalEdit(true)}>
                        <button
                          type="button"
                          className="text-yellow-500 hover:text-yellow-700 mr-2"
                          disabled={statusDiterima}
                        >
                          <MdEditDocument />
                        </button>
                      </Link>
                      <button
                        className="text-red-500 hover:text-red-700"
                        disabled={statusDiterima}
                      >
                        <FaTrashCan />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
export default DetailPemeriksaanSoftwareFtti4;
