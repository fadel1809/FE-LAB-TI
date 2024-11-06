/* eslint-disable no-unused-vars */
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link, useOutletContext, useLoaderData, Form } from "react-router-dom";
import { useState } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Wrapper from "../../assets/wrappers/pemeriksaanSoftware";
import customFetch from "../../utils/customFetch";
import Modal from "@mui/material/Modal";
import moment from "moment-timezone";

export const loader = async () => {
  try {
    const result = await customFetch.get("v1/pemeriksaan/software", {
      withCredentials: true,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
const PemeriksaanSoftware = () => {
 const [showModal, setShowModal] = useState(false);
  const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);
  const [showModalValidasiLaboran, setShowModalValidasiLaboran] = useState(false);
  const [selectedPemeriksaanValidasiLaboran,setSelectedPemeriksaanValidasiLaboran] = useState(null);

  let no = 1;
  let detailLink = ""
  const dataContext = useOutletContext();
  const loader = useLoaderData();
  const { data } = loader.data;
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Pemeriksaan Software
        </h1>
        <Link to={"tambah"} className="inline-block">
          <button
            type="button"
            className="bg-green-600 rounded-md my-2  px-3 py-1 mr-2 text-white flex text-center items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Data
          </button>
        </Link>

        <div className="overflow-auto">
          <table className="table-auto my-5 w-full border border-collapse my-5">
            <thead className="border border-collapse bg-gray-100 text-md">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Tanggal</th>
                <th className="border p-2">Staff</th>
                <th className="border p-2">Nama Lab</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {data.map((val) => {
                if (val.laboratorium == "FTTI1") {
                  detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti1`;
                }
                if (val.laboratorium == "FTTI2") {
                  detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti2`;
                }
                if (val.laboratorium == "FTTI3") {
                  detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti3`;
                }
                if (val.laboratorium == "FTTI4") {
                  detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti4`;
                }
                return (
                  <tr key={val.id}>
                    <td className="border p-2 ">{no++}</td>
                    <td className="border p-2">
                      {moment
                        .utc(val.tanggal)
                        .tz("Asia/Jakarta")
                        .format("DD/MM/YYYY")}
                    </td>
                    <td className="border p-2">{val.staff_lab}</td>
                    <td className="border p-2">{val.laboratorium}</td>
                    <td className="border p-2">{val.status_pemeriksaan}</td>
                    <td className=" p-4 text-white flex items-center text-center justify-center border">
                      <Link to={detailLink}>
                        <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                          <LuFileText className="mr-2" />
                          Detail
                        </button>
                      </Link>
                      <Link
                        to={`/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/software/${val.id}/edit`}
                      >
                        <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                          <MdEditDocument className="mr-2" />
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setSelectedPemeriksaan(val.id);
                        }}
                        className="flex items-center bg-red-500 rounded-md px-3 py-1 "
                      >
                        <FaTrashCan className="mr-2" />
                        Hapus
                      </button>
                      <button
                        onClick={() => {
                          setShowModalValidasiLaboran(true);
                          setSelectedPemeriksaanValidasiLaboran(val.id);
                        }}
                        className="flex items-center bg-green-600 rounded-md px-3 py-1 ml-2"
                      >
                        <FaCheck className="mr-2" />
                        Validasi
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
          <Modal
            open={showModalValidasiLaboran}
            onClose={() => setShowModalValidasiLaboran(false)}
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
                <h1 className=" text-xl mb-2 font-bold text-center text-green-600">
                  Konfirmasi Penyelesaian
                </h1>
                <h1 className=" text-md mb-5 ">
                  Apakah anda yakin sudah selesai melakukan pengecekan?
                </h1>

                <Form
                  onSubmit={() => setShowModalValidasiLaboran(false)}
                  method="post"
                  action={`${selectedPemeriksaanValidasiLaboran}/validasi-laboran`}
                  className="flex items-center justify-center justify-items-center text-center"
                >
                  <button
                    type="submit"
                    className="flex items-center bg-green-500 text-white rounded-md px-3 py-1"
                  >
                    <FaCheck className="mr-2" />
                    Validasi
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
export default PemeriksaanSoftware;
