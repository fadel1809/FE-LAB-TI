/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/historyPemeriksaan";
import { LuFileText } from "react-icons/lu";
import customFetch from "../../utils/customFetch";
import { FaTrashCan } from "react-icons/fa6";
import {Link, useLoaderData, useOutletContext, Form, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Modal from "@mui/material/Modal";
import moment from "moment-timezone";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export const loader = async({request}) => {
    const url = new URL(request.url); // Mendapatkan URL saat ini
    const page = url.searchParams.get("page") || 1;
    const response = await customFetch.get("v1/pemeriksaan/history/software",{withCredentials:true, params:{
            page: page,
        }})
    const { data } = response;
    return data;

}
const HistoryPemeriksaanSoftware = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPemeriksaan, setSelectedPemeriksaan] = useState(null);
    let detailLink = "";
    const dataContext = useOutletContext();
    let no = 1;
    const data = useLoaderData();
    const dataHistory = data.data;
    const {pagination} = data
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
    return (
        <Wrapper>
            <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm flex flex-col h-[29em]">
                <h1 className="text-center text-biru-uhamka text-xl font-bold">
                    History Pemeriksaan Software
                </h1>
                <div className="overflow-auto flex flex-col justify-between h-[25em]">
                    <table className="table-auto w-full border border-collapse my-5">
                        <thead className="border border-collapse bg-gray-100 text-md">
                        <tr>
                            <th className="border p-2">#</th>
                            <th className="border p-2">Kuartal</th>
                            <th className="border p-2">Tanggal</th>
                            <th className="border p-2">Aslab</th>
                            <th className="border p-2">Nama Lab</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Aksi</th>
                        </tr>
                        </thead>
                        <tbody className="text-center text-sm">
                        {dataHistory.map((val) => {
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
                                    <td className="border p-2">{val.kuartal}</td>
                                    <td className="border p-2">
                                        {moment
                                            .utc(val.tanggal)
                                            .tz("Asia/Jakarta")
                                            .format("DD/MM/YYYY")}
                                    </td>
                                    <td className="border p-2">{val.staff_lab}</td>
                                    <td className="border p-2">{val.laboratorium}</td>
                                    <td className="border p-2">{val.status_pemeriksaan}</td>
                                    <td className=" border p-2 text-white flex items-center text-center justify-center">
                                        <Link to={detailLink}>
                                            <button className="flex items-center bg-sky-600 rounded-md px-3 py-1 mr-2 ">
                                                <LuFileText className="mr-2"/>
                                                Detail
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => {
                                                setShowModal(true);
                                                setSelectedPemeriksaan(val.id);
                                            }}
                                            className="flex items-center bg-red-500 rounded-md px-3 py-1 "
                                        >
                                            <FaTrashCan className="mr-2"/>
                                            Hapus
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
                </div>
            </div>
        </Wrapper>
    );
};
export default HistoryPemeriksaanSoftware;
