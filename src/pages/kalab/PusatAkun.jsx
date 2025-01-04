import { FaCirclePlus } from "react-icons/fa6";
import { Link, useLoaderData,Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/pusatAkun";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import customFetch from "../../utils/customFetch";
import Modal from "@mui/material/Modal";
import { useState,useEffect } from "react";
export const loader = async () => {
  try {
    const result = await customFetch.get("v1/akun/staff",{withCredentials:true})
    return result.data
  } catch (error) {
    console.log(error)
  }
}
const PusatAkun = () => {
   const [showModal, setShowModal] = useState(false);
   const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);
  const {data} = useLoaderData()
    useEffect(() => {
      return () => {
        setShowModal(false); // Menutup modal saat komponen didemount
      };
    }, []);
  let no = 1
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm h-[30em]">
        <h1 className="text-center text-2xl text-biru-uhamka font-bold">
          Pusat Akun
        </h1>
        <Link to={"tambah"} className="inline-block">
          <button
            type="button"
            className="bg-green-600 rounded-md my-4 px-3 py-1 mr-2 text-white flex text-center items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Akun
          </button>
        </Link>
        <div className="overflow-auto h-[10em]">
          <table className="table-auto w-full border border-collapse my-5">
            <thead className="border border-collapse bg-gray-100 text-md">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Role</th>

                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td className="border p-2 ">{no++}</td>
                    <td className="border p-2">{val.email}</td>
                    <td className="border p-2">{val.username}</td>
                    <td className="border p-2">{val.role}</td>
                    <td className="border p-4 text-white flex items-center text-center justify-center">
                      <Link to={`${val.id}/edit`}>
                        <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                          <MdEditDocument className="mr-2" />
                          Edit Akun
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setSelectedPemeriksaan(val.id);
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

              {/* Tambahkan baris lain sesuai kebutuhan */}
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
                  onSubmit={() => setShowModal(false)}
                  action={`${selectedPemeriksaan}/delete`}
                  className="flex items-center justify-center justify-items-center text-center"
                >
                  <button
                    type="submit"
                    className="flex items-center bg-red-500 text-white rounded-md px-3 py-1"
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
export default PusatAkun;
