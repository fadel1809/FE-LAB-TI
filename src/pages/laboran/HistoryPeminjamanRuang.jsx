import moment from "moment-timezone";

import Wrapper from "../../assets/wrappers/peminjamanAlat";
import {useLoaderData, Form, useNavigate, useSearchParams} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import {useEffect, useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import {FaTrashCan} from "react-icons/fa6";
import Modal from "@mui/material/Modal";
import generatePDF from "../../utils/generatePdfPeminjamanRuang.js";
import {MdOutlinePictureAsPdf} from "react-icons/md";
export const loader = async ({request}) => {
  const url = new URL(request.url); // Mendapatkan URL saat ini
  const page = url.searchParams.get("page") || 1;
  try {
    const result = await customFetch.get("v1/peminjaman/ruang/history", {
      withCredentials: true,
      params: {page:page}
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const HistoryPeminjamanRuang = () => {
  const { data, pagination } = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(Number(page));
  }, [searchParams]);
  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
    setCurrentPage(page);
  };
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm flex flex-col  h-[30em]">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          History Peminjaman Ruang
        </h1>
        <div className={"flex items-center"}>
          <button onClick={() => {
            generatePDF()
          }} type={"button"}
                  className={"flex transition transition-colors items-center text-white hover:text-red-400 hover:bg-gray-200 bg-red-500 px-2 text-sm rounded-md py-1"}>
            <MdOutlinePictureAsPdf className={"mr-2 text-xl"}/>
            Export PDF
          </button>
        </div>
        <div className="overflow-auto flex flex-col justify-between h-[25em]">
          <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
            <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-4">#</th>
              <th className="border p-4">Nama</th>
              <th className="border p-4">NIDN/NIM</th>
              <th className="border p-4">Keperluan</th>
              <th className="border p-4">Ruang</th>
              <th className="border p-4">Tanggal Peminjaman</th>
              <th className="border p-4">Waktu Peminjaman</th>
              <th className="border p-4">Status</th>
              <th className="border p-4">Catatan</th>
              <th className="border p-4">Actions</th>
            </tr>
            </thead>

            <tbody className="text-center text-xs">
            {data.map((val, index) => {
              return (
                  <tr key={val.id}>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{val.nama}</td>
                    <td className="border px-2">{val.nim}</td>
                    <td className="border px-2">{val.keperluan}</td>
                    <td className="border px-2">{val.ruang}</td>
                    <td className="border px-2">
                      {moment
                          .utc(val.tanggal_peminjaman)
                          .tz("Asia/Jakarta")
                          .format("DD/MM/YYYY")}
                    </td>
                    <td className="border px-2">{`${val.jam_mulai} - ${val.jam_selesai}`}</td>
                    <td className="border px-2">{val.status}</td>
                    <td className="border px-2">{val.catatan}</td>
                    <td className="border p-2 text-white flex items-center text-center justify-center">

                      <button
                          onClick={() => {
                            setSelectedPeminjaman(val.id)
                            setShowModal(true)
                          }}
                          type="submit"
                          className="flex items-center bg-red-600 rounded-md px-3 py-1  "
                      >
                        Hapus
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
                disabled={currentPage === pagination.totalPages}
                className={`pagination-btn text-sky-600  ${
                    currentPage === pagination.totalPages ? "disabled disabled:text-gray-500" : ""}`}
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
                    action={`${selectedPeminjaman}/delete`}
                    className="flex items-center justify-center justify-items-center text-center"
                >
                  <button
                      type="submit"
                      className="flex items-center bg-red-500 text-white rounded-md px-3 py-1"
                  >
                    <FaTrashCan className="mr-2"/>
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
export default HistoryPeminjamanRuang;
