/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/peminjamanAlat";
import { Link, useLoaderData, Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TiCancel } from "react-icons/ti";

export const loader = async () => {
  try {
     const result = await customFetch.get(`v1/peminjaman/alat`, {
       withCredentials: true,
     });
     return result.data;
  } catch (error) {
    console.log(error)
  }
 
}
const PeminjamanAlat = () => {
  const {data} = useLoaderData()
   const [showModal, setShowModal] = useState(false);
   const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          Daftar Pemohon Peminjaman Barang
        </h1>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
            <thead className="border border-collapse bg-gray-100">
              <tr>
                <th className="border p-4">Nama</th>
                <th className="border p-4">NIDN/NIK</th>
                <th className="border p-4">Keperluan</th>
                <th className="border p-4">Jenis Barang</th>
                <th className="border p-4">Tanggal Peminjaman</th>
                <th className="border p-4">Tanggal Pengembalian</th>
                <th className="border p-4">status</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="text-center text-xs">
              {data.map((val) => {
                return (
                  <tr key={val.id}>
                    <td className="border p-2">{val.nama}</td>
                    <td className="border px-2">{val.nidn}</td>
                    <td className="border px-2">{val.keperluan}</td>
                    <td className="border px-2">{val.jenis_barang}</td>
                    <td className="border px-2">
                      {" "}
                      {dayjs(val.tanggal_peminjaman).format("DD-MM-YYYY")}
                    </td>
                    <td className="border px-2">
                      {dayjs(val.tanggal_pengembalian).format("DD-MM-YYYY")}
                    </td>
                    <td className="border px-2"> {val.status} </td>
                    <td className="p-4 border text-white flex items-center text-center justify-center">
                      <Form method="post" action={`${val.id}/terima`}>
                        <button
                          type="submit"
                          className="flex items-center bg-green-600 rounded-md px-3 py-1 mr-2 "
                        >
                          Terima
                        </button>
                      </Form>

                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedPeminjaman(val.id);
                        }}
                        className="flex items-center bg-red-500 rounded-md px-3 py-1 "
                      >
                        Tolak
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
                className="flex flex-col justify-center"
                style={{
                  background: "white",
                  padding: "50px 30px",
                  borderRadius: "8px",
                }}
              >
                <h1 className=" text-xl mb-2 font-bold text-center text-red-600">
                  Konfirmasi Penolakan!
                </h1>
                <h1 className=" text-md mb-3 text-center text-gray-600">
                  Beri alasan untuk menolak
                </h1>

                <Form
                  method="post"
                  onSubmit={() => setShowModal(false)}
                  className="flex flex-col justify-center items-center"
                  action={`${selectedPeminjaman}/tolak`}
                >
                  <input
                    type="text"
                    name="catatan"
                    className="appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="flex items-center bg-red-500 w-1/2 rounded-md px-5 py-1 text-white"
                  >
                    <TiCancel className="mr text-2xl" />
                    Tolak
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
export default PeminjamanAlat;
