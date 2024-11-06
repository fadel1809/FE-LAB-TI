/* eslint-disable no-unused-vars */
import { useState } from "react";
import Wrapper from "../../assets/wrappers/detailPemeriksaanHardware";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan, FaCirclePlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { LuFilePlus2 } from "react-icons/lu";
import customFetch from "../../utils/customFetch";
import { Link, useLoaderData, useParams, Form } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Modal from "@mui/material/Modal";
import BackButton from "../../components/BackButton";
import moment from "moment-timezone";

export const loader = async ({ params }) => {
  const response = await customFetch.get(
    `v1/pemeriksaan/hardware/detail/${params.idPemeriksaan}`,
    {
      withCredentials: true,
    }
  );
  return response.data.data;
};
const DetailPemeriksaanHardwareFtti4 = () => {
const [showModal, setShowModal] = useState(false);
const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);
let { id } = useParams();

const data = useLoaderData();
const user = data.userCreator;
const statusDiterima =
  user[0].status_pemeriksaan === "diterima" ||
  user[0].status_pemeriksaan === "validasi_laboran" ||
  user[0].status_pemeriksaan === "validasi_kalab";
const detailPemeriksaan = data.detailPemeriksaan;
return (
  <Wrapper>
    <NavbarAdmin />
    <div className="bg-gray-100 py-5 h-full">
      <div className="mx-10 ml-10  bg-white shadow-xl py-5 px-5 rounded-sm">
        <BackButton/>
        <h1 className="text-biru-uhamka font-bold text-xl mb-4">
          Detail Pemeriksaan Hardware
        </h1>
        {user.map((val) => {
          return (
            <div className="my-4" key={val.id}>
              <p>kuartal : {val.kuartal}</p>
              <p>
                Tanggal :{" "}
                {moment
                  .utc(val.tanggal)
                  .tz("Asia/Jakarta")
                  .format("DD/MM/YYYY")}{" "}
              </p>
              <p>Asisten Lab : {val.staff_lab} </p>
              <p>Laboratorium : {val.laboratorium} </p>
            </div>
          );
        })}

        <Link to={"tambah"} onClick={() => setShowModal(true)}>
          <button
            disabled={statusDiterima}
            type="button"
            className="bg-green-600 disabled:opacity-75 rounded-md my-2 px-3 py-2 text-white inline-flex items-center"
          >
            <FaCirclePlus className="mr-2" />
            Tambah Data
          </button>
        </Link>

        <table className="table-auto lg:overflow-auto-x  border border-collapse">
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
                  <td className="border px-1 py-2 text-xs">{val.no_aset}</td>
                  <td className="border px-1 py-2 text-xs">{val.monitor}</td>
                  <td className="border px-1 py-2 text-xs">{val.keyboard}</td>
                  <td className="border px-1 py-2 text-xs">{val.mouse}</td>
                  <td className="border px-1 py-2 text-xs">{val.cpu}</td>
                  <td className="border px-1 py-2 text-xs">{val.ram}</td>
                  <td className="border px-1 py-2 text-xs">
                    {val.motherboard}
                  </td>
                  <td className="border px-1 py-2 text-xs">{val.vga}</td>
                  <td className="border px-1 py-2 text-xs">{val.hdd}</td>
                  <td className="border px-1  py-2 text-xs">{val.ssd}</td>
                  <td className="border px-2 text-xs">{val.keterangan}</td>
                  <td className="border py-2 text-lg">
                    <Link
                      to={`/admin/dashboard-laboran/${id}/pemeriksaan/hardware/${user[0].id}/detail-ftti4/${val.id}/edit`}
                    >
                      <button
                        type="button"
                        className="text-yellow-500 disabled:opacity-75 hover:text-yellow-700 mr-2"
                        disabled={statusDiterima}
                      >
                        <MdEditDocument />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setSelectedPemeriksaan(val.id);
                      }}
                      className="text-red-500 disabled:opacity-75 hover:text-red-700"
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
export default DetailPemeriksaanHardwareFtti4;
