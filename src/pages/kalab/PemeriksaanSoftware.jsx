/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanSoftware";
import { useState } from "react";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
const PemeriksaanSoftware = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Pemeriksaan Software
        </h1>

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
                    <strong>Edit Data</strong>
                  </h3>
                  <div className="mt-3">
                    <form>
                      <div className="mb-4 w-full">
                        <label htmlFor="tanggal" className="block">
                          Tanggal
                        </label>
                        <input
                          type="text"
                          id="tanggal"
                          className="mt-1 p-2 border border-gray-200 rounded-md w-full "
                          name="tanggal"
                        />
                      </div>
                      <div className="mb-4 w-full">
                        <label className="block" htmlFor="aslab">
                          Aslab
                        </label>
                        <input
                          type="text"
                          id="Aslab"
                          className="mt-1 p-2 border border-gray-200 rounded-md w-full"
                        />
                      </div>
                      <div className="mb-4 w-full">
                        <label htmlFor="laboratorium" className="block">
                          Nama Laboratorium
                        </label>
                        <div className="relative">
                          <select
                            className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                            name="status"
                            id="status"
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
                        className="bg-yellow-500 rounded-md my-2 px-3 py-2 text-white inline-flex items-center ml-2"
                      >
                        <MdEditDocument className="mr-2" />
                        Edit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="overflow-auto">
          <table className="table-auto w-full border border-collapse my-5">
            <thead className="border border-collapse bg-gray-100 text-md text-center">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">ID Pemeriksaan</th>
                <th className="border p-2">Tanggal</th>
                <th className="border p-2">Aslab</th>
                <th className="border p-2">Nama Lab</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              <tr>
                <td className="border p-2 ">1</td>
                <td className="border p-2">Cek 001</td>
                <td className="border p-2">10 Januari</td>
                <td className="border p-2">Adit</td>
                <td className="border p-2">FTTI1</td>
                <td className="border p-2"></td>
                <td className="p-4 text-white flex items-center text-center justify-center">
                  <Link to={"/dashboard-laboran/pemeriksaan/hardware/1/detail"}>
                    <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                      <LuFileText className="mr-2" />
                      Detail
                    </button>
                  </Link>
                  <Link to={"#"} onClick={() => setShowModal(true)}>
                    <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                      <BiRevision className="mr-2" />
                      Revisi
                    </button>
                  </Link>
                  <button className="flex items-center bg-green-600 rounded-md px-3 py-1 ">
                    <FaCheck className="mr-2" />
                    Diterima
                  </button>
                </td>
              </tr>
              {/* Tambahkan baris lain sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
export default PemeriksaanSoftware;
