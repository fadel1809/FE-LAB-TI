import { useState } from "react";
import Wrapper from "../../assets/wrappers/detailPemeriksaanHardware";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan, FaCirclePlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";

const DetailPemeriksaanHardware = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      noPc: 1,
      noAset: "F.A.215.060101.040.1.2022",
      monitor: "SAMSUNG C24F390FHE",
      // ... other fields
    },
  ]);
  const [newData, setNewData] = useState({
    noPc: "",
    noAset: "",
    monitor: "",
    // ... other fields
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    // Assume validation passes for simplicity
    setData((prevData) => [...prevData, newData]);
    setNewData({
      noPc: "",
      noAset: "",
      monitor: "",
      // ... other fields
    });
    setShowModal(false);
  };
  return (
    <Wrapper>
      <NavbarAdmin />
      <div className="bg-gray-100 py-5 h-screen">
        <div className="mx-10 ml-10  bg-white shadow-lg py-5 px-5 rounded-sm">
          <h1 className="text-biru-uhamka font-bold text-xl mb-4">
            Detail Pemeriksaan Hardware
          </h1>
          <div className="my-4">
            <p>Pemeriksaan :</p>
            <p>Tanggal :</p>
            <p>Asisten Lab :</p>
            <p>Laboratorium :</p>
          </div>
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
                    <h3 className="text-lg leading-6 font-medium text-biru-uhamka">
                      Tambah Data
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
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
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
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="noPc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Keterangan
                            </label>
                            <input
                              type="text"
                              id="noPc"
                              name="noPc"
                              value={newData.noPc}
                              onChange={handleInputChange}
                              className="mt-1 p-2 border rounded-md w-full"
                            />
                          </div>
                          {/* Repeat similar structure for other fields */}
                        </div>

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

          <table className="table-auto w-full border border-collapse">
            <thead className="border border-collapse bg-gray-200">
              <tr>
                <th className="border py-2 px-1 text-sm">No. PC</th>
                <th className="border py-2 px-1 text-sm">No. Aset</th>
                <th className="border py-2 px-1 text-sm">Monitor</th>
                <th className="border py-2 px-1 text-sm">Keyboard</th>
                <th className="border py-2 px-1 text-sm">Mouse</th>
                <th className="border py-2 px-1 text-sm">CPU</th>
                <th className="border py-2 px-1 text-sm">RAM</th>
                <th className="border py-2 px-1 text-sm">Motherboard</th>
                <th className="border py-2 px-1 text-sm">VGA</th>
                <th className="border py-2 px-1 text-sm">HDD</th>
                <th className="border py-2 px-1 text-sm">SSD</th>
                <th className="border py-2 px-1 text-sm">Keterangan</th>
                <th className="border py-2 px-1 text-sm">Status</th>
                <th className="border px-5 py-2 text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-1 py-2 text-md font-bold">1</td>
                <td className="border px-1 py-2 text-xs">
                  F.A.215.060101.040.1.2022
                </td>
                <td className="border px-1 py-2 text-xs">SAMSUNG C24F390FHE</td>
                <td className="border px-1 py-2 text-xs">Logitech K100</td>
                <td className="border px-1 py-2 text-xs">Logitech B100</td>
                <td className="border px-1 py-2 text-xs">i7-11700F</td>
                <td className="border px-1 py-2 text-xs">16GB DDR4</td>
                <td className="border px-1 py-2 text-xs">
                  ASUS PRIME H510M- E
                </td>
                <td className="border px-1 py-2 text-xs">
                  GeForce RTX 3050 8GB
                </td>
                <td className="border px-1 py-2 text-xs">SEAGATE 500GB</td>
                <td className="border px-1  py-2 text-xs">
                  SSD VGEN RESCUE 240GB
                </td>
                <td className="border px-2 text-xs">SSD rusak</td>
                <td className="border px-2 py-2 text-xs">Pengecekan</td>
                <td className="border py-2 text-lg">
                  <button className="text-yellow-500 hover:text-yellow-700 mr-2">
                    <MdEditDocument />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailPemeriksaanHardware;
