/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/peminjamanRuang";
import {Link, useLoaderData, Form, useNavigate, useSearchParams} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import Modal from "@mui/material/Modal";
import {useEffect, useState} from "react";
import { TiCancel } from "react-icons/ti";
import moment from "moment-timezone";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegFilePdf} from "react-icons/fa";

export const loader = async ({request}) => {
  const url = new URL(request.url); // Mendapatkan URL saat ini
  const page = url.searchParams.get("page") || 1;
  try {
    const result = await customFetch.get(`v1/peminjaman/ruang`, {
      withCredentials: true,
      params: {page:page}
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const PeminjamanRuang = () => {
  const { data, pagination } = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);
  let no = 1
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    return () => {
      setShowModal(false); // Menutup modal saat komponen didemount
    };
  }, []);
  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(Number(page));
  }, [searchParams]);
  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
    setCurrentPage(page);
  };
  console.log(pagination)
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm flex flex-col  h-[30em]">
        <h1 className="text-biru-uhamka text-center font-bold text-xl">
          Daftar Pemohon Peminjaman Ruang
        </h1>
        <div className="overflow-auto flex flex-col justify-between h-[25em]">
          <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
            <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">NIDN/NIM</th>
              <th className="border p-2">Keperluan</th>
              <th className="border p-2">Ruang</th>
              <th className="border p-2">Tanggal Peminjaman</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Waktu Peminjaman</th>
              <th className="border p-2">File</th>
              <th className="border p-2">Action</th>
            </tr>
            </thead>

            <tbody className="text-center text-xs">
            {data.map((val) => {
              return (
                  <tr key={val.id}>
                    <td className="border p-2">{no++}</td>
                    <td className="border p-2">{val.nama}</td>
                    <td className="border p-2">{val.nim}</td>
                    <td className="border p-2">{val.keperluan}</td>
                    <td className="border p-2">{val.ruang}</td>
                    <td className="border p-2">
                      {moment
                          .utc(val.tanggal_peminjaman)
                          .tz("Asia/Jakarta")
                          .format("DD/MM/YYYY")}
                    </td>
                    <td className="border px-2">{val.status}</td>
                    <td className="border px-2">{`${val.jam_mulai || "00:00"} - ${val.jam_selesai || "00:00"}`}</td>
                    <td className="border px-2">
                      {val.filename && (
                          <a
                              href={`https://api-lab-ti.my.id/uploads/${val.filename}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex text-xs items-center px-4 py-1 border-2 border-biru-uhamka text-biru-uhamka rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-200 ease-in-out"
                          >
                            <FaRegFilePdf className="mr-2 text-xl"/>{" "}
                            {/* Ikon PDF */}
                            File
                          </a>
                      )}
                    </td>
                    <td className=" p-2 text-white border flex items-center text-center justify-center">
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
          <div className="pagination-controls flex justify-end gap-2 mt-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`pagination-btn text-sky-600  ${currentPage === 1 ? "disabled disabled:text-gray-500" : ""}`}
            >
              <FaArrowAltCircleLeft className={"text-3xl "}/>
            </button>

            <p className={"text-sky-600 text-lg mx-5 underline font-bold"}>
              {

                `${currentPage} of ${pagination.totalPages} `
              }
            </p>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pagination.totalPages || pagination.totalItems == 0}
                className={`pagination-btn text-sky-600  ${
                    currentPage === pagination.totalPages || pagination.totalItems == 0  ? "disabled disabled:text-gray-500" : ""}`}
            >
              <FaArrowAltCircleRight className={" text-3xl "}/>
            </button>
          </div>
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
                    <TiCancel className="mr text-2xl"/>
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
export default PeminjamanRuang;
