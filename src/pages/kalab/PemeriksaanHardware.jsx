/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import {useEffect, useState} from "react";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";
import Modal from "@mui/material/Modal";
import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {Link, useLoaderData, useOutletContext, Form, useNavigate, useSearchParams} from "react-router-dom";
import { MdCancel } from "react-icons/md";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCheck} from "react-icons/fa";
import customFetch from "../../utils/customFetch";
import moment from "moment-timezone";

export const loader =  async({request}) => {
    const url = new URL(request.url); // Mendapatkan URL saat ini
    const page = url.searchParams.get("page") || 1;
    const response = await customFetch.get("v1/pemeriksaan/hasil-pemeriksaan-hardware-kalab", {withCredentials:true, params:{
            page: page,
        }})
    const {data} = response
    return data
}
const HasilPemeriksaanHardware = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRevisi, setShowModalRevisi] = useState(false);
    const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);

    const loaderData = useLoaderData()
    const dataContext = useOutletContext()
    let no = 1;
    let detailLink = ""
    const {pagination} = loaderData
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        return () => {
            setShowModal(false);
            setShowModalRevisi(false)// Menutup modal saat komponen didemount
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
    return (
        <Wrapper>
            <div className="mx-10 my-5 bg-white shadow-lg py-5 px-5 rounded-sm flex flex-col h-[32em]">
                <h1 className="text-biru-uhamka font-bold text-xl text-center">
                    Hasil Pemeriksaan Hardware
                </h1>

                <div className="overflow-auto flex flex-col justify-between h-[28em]">
                    <table className="table-auto w-full border-collapse my-5">
                        <thead className="border-collapse bg-gray-100 text-md">
                        <tr className={"border"}>
                            <th className="border p-2">#</th>
                            <th className="border p-2">Kuartal</th>
                            <th className="border p-2">Tanggal</th>
                            <th className="border p-2">Staff</th>
                            <th className="border p-2">Nama Lab</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Catatan</th>
                            <th className="border p-2">Aksi</th>
                        </tr>
                        </thead>
                        <tbody className="text-center text-sm ">
                        {loaderData.data.map((val) => {
                            if (val.laboratorium == "FTTI1") {
                                detailLink = `/admin/dashboard-kalab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti1`;
                            }
                            if (val.laboratorium == "FTTI2") {
                                detailLink = `/admin/dashboard-kalab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti2`;
                            }
                            if (val.laboratorium == "FTTI3") {
                                detailLink = `/admin/dashboard-kalab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti3`;
                            }
                            if (val.laboratorium == "FTTI4") {
                                detailLink = `/admin/dashboard-kalab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti4`;
                            }
                            return (
                                <tr key={val.id} className={"border"}>
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
                                        {val.status_pemeriksaan === "validasi_kalab" &&
                                            "validasi kalab"}
                                    </td>
                                    <td className="border p-2 text-xs">
                                        {val.catatan}
                                    </td>
                                    <td className="  p-2  text-white flex item-center text-center justify-center">
                                        <Link to={detailLink}>
                                            <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                                                <LuFileText className="mr-2"/>
                                                Detail
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setSelectedPemeriksaan(val.id)
                                                setShowModalRevisi(true)
                                            }}
                                            type="submit"
                                            className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 "
                                        >
                                            <BiRevision className="mr-2"/>
                                            Revisi
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowModal(true);
                                                setSelectedPemeriksaan(val.id);
                                            }}
                                            type="submit"
                                            className="flex items-center bg-green-600 rounded-md px-3 py-1 "
                                        >
                                            <FaCheck className="mr-2"/>
                                            Diterima
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                        {/* Tambahkan baris lain sesuai kebutuhan */}
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
                                <h1 className=" text-xl mb-2 font-bold text-center text-green-600">
                                    Konfirmasi Validasi
                                </h1>
                                <h1 className=" text-md mb-5 ">
                                    Apakah anda yakin dengan pemeriksaan ini?
                                </h1>

                                <Form
                                    method="post"
                                    onSubmit={() => setShowModal(false)}
                                    action={`${selectedPemeriksaan}/diterima`}
                                    className="flex items-center justify-center justify-items-center text-center"
                                >
                                    <button
                                        type="submit"
                                        className="flex items-center bg-green-500 text-white rounded-md px-3 py-1"
                                    >
                                        <FaCheck className="mr-2"/>
                                        Diterima
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Modal>
                    <Modal
                        open={showModalRevisi}
                        onClose={() => setShowModalRevisi(false)}
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
                                <h1 className=" text-xl mb-2 font-bold text-center text-yellow-600">
                                    Konfirmasi Revisi
                                </h1>
                                <h1 className=" text-md mb-3 text-center text-gray-600">
                                    Beri alasan revisi
                                </h1>

                                <Form
                                    method="post"
                                    onSubmit={() => setShowModalRevisi(false)}
                                    className="flex flex-col justify-center items-center"
                                    action={`${selectedPemeriksaan}/status-revisi`}
                                >
                                    <input
                                        type="text"
                                        name="catatan"
                                        className="appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center bg-yellow-500 w-1/2 rounded-md px-5 py-1 text-white"
                                    >
                                        <BiRevision className="mr text-xl"/>
                                        Revisi
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
export default HasilPemeriksaanHardware;
