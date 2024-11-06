/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanSoftware";
import { useState } from "react";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import customFetch from "../../utils/customFetch";
import { Link,useLoaderData,useOutletContext, Form } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import moment from "moment-timezone";

export const loader = async () => {
  const response = await customFetch.get(
    "v1/pemeriksaan/hasil-pemeriksaan-software-laboran",
    { withCredentials: true }
  );
  const { data } = response.data;
  return data;
};
const HasilPemeriksaanSoftware = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);  const loaderData = useLoaderData();
  const dataContext = useOutletContext();
  let no = 1;
  let detailLink = "";
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Hasil Pemeriksaan Software
        </h1>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-collapse my-5">
            <thead className="border border-collapse bg-gray-100 text-md text-center">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Kuartal</th>
                <th className="border p-2">Tanggal</th>
                <th className="border p-2">Aslab</th>
                <th className="border p-2">Nama Lab</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {loaderData.map((val) => {
                if (val.laboratorium == "FTTI1") {
                  detailLink = `/admin/dashboard-laboran/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti1`;
                }
                if (val.laboratorium == "FTTI2") {
                  detailLink = `/admin/dashboard-laboran/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti2`;
                }
                if (val.laboratorium == "FTTI3") {
                  detailLink = `/admin/dashboard-laboran/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti3`;
                }
                if (val.laboratorium == "FTTI4") {
                  detailLink = `/admin/dashboard-laboran/${dataContext.id}/pemeriksaan/software/${val.id}/detail-ftti4`;
                }
                return (
                  <tr key={val.id}>
                    <td className="border p-2 ">{no++}</td>
                    <td className="border p-2">{val.kuartal}</td>
                    <td className="border p-2">
                      {moment
                        .utc(val.tanggal)
                        .tz("Asia/Jakarta")
                        .format("DD/MM/YYYY")}
                    </td>
                    <td className="border p-2">{val.staff_lab}</td>
                    <td className="border p-2">{val.laboratorium}</td>
                    <td className="border p-2">
                      {val.status_pemeriksaan === "validasi_laboran" &&
                        "validasi laboran"}
                    </td>
                    <td className="p-4 text-white flex items-center text-center justify-center">
                      <Link to={detailLink}>
                        <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                          <LuFileText className="mr-2" />
                          Detail
                        </button>
                      </Link>
                      <Form action={`${val.id}/status-revisi`} method="post">
                        <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                          <BiRevision className="mr-2" />
                          Revisi
                        </button>
                      </Form>
                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedPemeriksaan(val.id);
                        }}
                        className="flex items-center bg-green-600 rounded-md px-3 py-1 "
                      >
                        <FaCheck className="mr-2" />
                        Diterima
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
                <h1 className=" text-xl mb-2 font-bold text-center text-green-600">
                  Konfirmasi Validasi
                </h1>
                <h1 className=" text-md mb-5 ">
                  Apakah anda yakin dengan pemeriksaan ini?
                </h1>

                <Form
                  method="post"
                  onSubmit={() => setShowModal(false)}
                  action={`${selectedPemeriksaan}/validasi-kalab`}
                  className="flex items-center justify-center justify-items-center text-center"
                >
                  <button
                    type="submit"
                    className="flex items-center bg-green-500 text-white rounded-md px-3 py-1"
                  >
                    <FaCheck className="mr-2" />
                    Diterima
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
export default HasilPemeriksaanSoftware;
