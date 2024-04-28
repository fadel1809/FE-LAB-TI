/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/inventarisFTTI3";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { Link, useLoaderData, Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import Modal from "@mui/material/Modal";

export const loader = async () => {
  try {
    const result = await customFetch.get("v1/inventaris/ftti3", {
      withCredentials: true,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const InventarisFTTI3 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { data } = useLoaderData();
  let no = 1;
   useEffect(() => {
     return () => {
       setShowModal(false); // Menutup modal saat komponen didemount
     };
   }, []);
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          Inventaris FTTI3 - Multimedia
        </h1>

        <Link to={"tambah"}>
          <button
            type="button"
            className="bg-green-600 rounded-md my-4 px-3 py-1 mr-2 text-white flex text-center items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Aset
          </button>
        </Link>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-collapse my-5 text-center text-md">
            <thead className="border border-collapse bg-gray-100">
              <tr>
                <th className="border p-4">No.</th>
                <th className="border p-4">No. Aset</th>
                <th className="border p-4">Jenis</th>
                <th className="border p-4">Spesifikasi</th>
                <th className="border p-4">Posisi</th>
                <th className="border p-4">Keterangan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td className="border p-2">{no++}</td>
                    <td className="border p-2">{val.no_aset}</td>
                    <td className="border p-2">{val.jenis}</td>
                    <td className="border p-2">{val.spesifikasi}</td>
                    <td className="border p-2">{val.posisi}</td>
                    <td className="border p-2">{val.keterangan}</td>
                    <td className="p-4 text-white flex items-center text-center justify-center">
                      <Link to={`${val.id}/edit`}>
                        <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1  mr-2 ">
                          <MdEditDocument className="mr-2" />
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setSelectedId(val.id);
                        }}
                        type="button"
                        className="flex items-center bg-red-500 rounded-md px-3 py-1 "
                      >
                        <FaTrashCan className="mr-2" />
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              fontFamily: "Montserrat, sans-serif",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: "50px 30px",
                  borderRadius: "8px",
                }}
              >
                <h1 className=" text-xl mb-2 font-bold text-center text-red-600">
                  Konfirmasi Penghapusan
                </h1>
                <h1 className=" text-md mb-5 ">
                  Apakah anda yakin ingin menghapus?
                </h1>

                <Form
                  method="post"
                  action={`${selectedId}/delete`}
                  onSubmit={() => setShowModal(false)}
                  className="flex items-center justify-center justify-items-center text-center"
                >
                  <button
                    type="submit"
                    className="flex items-center text-white bg-red-500 rounded-md px-3 py-1 "
                  >
                    <FaTrashCan className="mr-2" />
                    Hapus
                  </button>
                </Form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </Wrapper>
  );
};
export default InventarisFTTI3;
