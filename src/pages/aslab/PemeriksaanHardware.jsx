/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/pemeriksaanHardware";
import { useState,useEffect } from "react";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {Link, useLoaderData, useOutletContext, Form, useSearchParams, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdCancel } from "react-icons/md";
import customFetch from "../../utils/customFetch";
import moment from "moment-timezone";
export const loader = async ({request}) => {
    const url = new URL(request.url); // Mendapatkan URL saat ini
    const page = url.searchParams.get("page") || 1; // Baca query string ?page= atau default ke 1
    try {
        const result = await customFetch.get("v1/pemeriksaan/hardware", {
            withCredentials: true,
            params:{
                page: page
            }
        });

        return result;
    } catch (error) {
        console.log(error);
    }
};
const PemeriksaanHardware = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);
    const [showModalValidasiLaboran, setShowModalValidasiLaboran] =useState(false);
    const [selectedPemeriksaanValidasiLaboran,setSelectedPemeriksaanValidasiLaboran] = useState(null)
    let no = 1;
    let detailLink = ""
    const dataContext = useOutletContext();
    const loader = useLoaderData();
    const { data, pagination } = loader.data;

    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        return () => {
            setShowModal(false); // Menutup modal saat komponen didemount
            setShowModalValidasiLaboran(false)
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
            <div className="mx-10 my-5 bg-white shadow-lg py-5 px-5 rounded-sm flex flex-col  h-[32em] ">
                <h1 className="text-biru-uhamka font-bold text-xl text-center">
                    Pemeriksaan Hardware
                </h1>
                <div className="inline-block">


                <Link
                    className="inline-block"
                    to={`tambah`}

                >
                    <button
                        type="button"
                        className="bg-green-600 rounded-md my-2 px-3 py-1 mr-2 text-white flex text-center items-center"
                    >
                        <FaCirclePlus className="mr-2" />
                        Tambah Data
                    </button>
                </Link>
                </div>
                <div className="overflow-auto flex flex-col justify-between h-[25em]">
                    <table className="table-auto w-full border border-collapse my-5">
                        <thead className="border border-collapse bg-gray-100 text-md">
                        <tr>
                            <th className="border p-2">No</th>
                            <th className="border p-2">Tanggal</th>
                            <th className="border p-2">Staff</th>
                            <th className="border p-2">Nama Lab</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2 ">Catatan</th>
                            <th className="border p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-center text-sm">
                        {data.map((val) => {
                            if (val.laboratorium == "FTTI1") {
                                detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti1`;
                            }
                            if (val.laboratorium == "FTTI2") {
                                detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti2`;
                            }
                            if (val.laboratorium == "FTTI3") {
                                detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti3`;
                            }
                            if (val.laboratorium == "FTTI4") {
                                detailLink = `/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/hardware/${val.id}/detail-ftti4`;
                            }
                            return (
                                <tr key={val.id} className={"border"}>
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
                                    <td className="border p-2 text-xs">{val.catatan}</td>
                                    <td className=" p-2 text-white flex items-center text-center justify-center">
                                        <Link to={detailLink}>
                                            <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                                                <LuFileText className="mr-2"/>
                                                Detail
                                            </button>
                                        </Link>
                                        <Link
                                            to={`/admin/dashboard-aslab/${dataContext.id}/pemeriksaan/hardware/${val.id}/edit`}
                                        >
                                            <button className="flex items-center bg-yellow-500 rounded-md px-3 py-1 mr-2 ">
                                                <MdEditDocument className="mr-2"/>
                                                Edit
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
                                            <FaTrashCan className="mr-2"/>
                                            Hapus
                                        </button>

                                        <button
                                            onClick={() => {
                                                setShowModalValidasiLaboran(true);
                                                setSelectedPemeriksaanValidasiLaboran(val.id);
                                            }}
                                            type="button"
                                            className="flex items-center bg-green-600 rounded-md px-3 py-1 ml-2"
                                        >
                                            <FaCheck className="mr-2"/>
                                            Validasi
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
                                        <FaTrashCan className="mr-2"/>
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
                                        <FaCheck className="mr-2"/>
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


export default PemeriksaanHardware;
