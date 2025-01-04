/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/inventarisFTTI1";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import {Link, useLoaderData, Form, useNavigate, useSearchParams, useSubmit} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import {useEffect, useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaSearch} from "react-icons/fa";
import Modal from "@mui/material/Modal";

export const loader = async ({request}) => {
  const url = new URL(request.url); // Mendapatkan URL saat ini
  const page = url.searchParams.get("page") || 1;
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(page, params)

  try {
    const result = await customFetch.get("v1/inventaris/ftti2",{withCredentials:true,params: {page,params}})
    const data = result.data

    return {data:data.data,pagination:data.pagination,searchValue:[params]}
  } catch (error) {
    console.log(error)
    return { data: [], pagination: { totalPages: 1 }, searchValue: [] };
  }
}
const InventarisFTTI1 = () => {
  const {data,pagination,searchValue}= useLoaderData()

  let no = 1
  const [showModal, setShowModal] = useState(false);
  const [selectedAset, setSelectedAset] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const page = searchParams.get("page") || 1;
    setCurrentPage(Number(page));
  }, [searchParams]);
  const handlePageChange = (page) => {
    const search = searchParams.get("search") || ""; // Ambil nilai search dari URL
    navigate(`?page=${page}&search=${search}`);
    setCurrentPage(page);
  };
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1500);
    };
  };
  const submit = useSubmit();
  return (
      <Wrapper>
        <div className="mx-10 my-5 bg-white shadow-lg py-5 px-5 rounded-sm h-[32em]">
          <h1 className="text-biru-uhamka text-center font-bold text-xl">
            Inventaris FTTI2 - Jaringan
          </h1>
          <div className={"flex justify-between mt-2"}>

            <div className="flex justify-end " >
              <Form className="flex py-2">
                <input
                    placeholder="Cari"
                    type="search"
                    name="search"
                    defaultValue={searchValue[0].search}
                    onChange={debounce((form) => submit(form))}
                    className="appearance-none text-black placeholder:italic focus:border-biru-uhamka focus:border-2 focus:outline-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
                <button type="submit" className="text-biru-uhamka">
                  <FaSearch className="ml-2"/>
                </button>
              </Form>
            </div>
          </div>

          <div className="overflow-auto flex flex-col justify-between h-[23em]">
            <table className="table-auto w-full border border-collapse my-5 text-center text-md h-0">
              <thead className="border border-collapse bg-gray-100">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">No. Aset</th>
                <th className="border p-2">Jenis</th>
                <th className="border p-2">Spesifikasi</th>
                <th className="border p-2">Posisi</th>
                <th className="border p-2">Keterangan</th>

              </tr>
              </thead>
              <tbody className="text-center text-sm">
              {data.map((val) => {
                return (
                    <tr key={val.id} className={"border"}>
                      <td className="border p-2">{no++}</td>
                      <td className="border p-2">{val.no_aset}</td>
                      <td className="border p-2">{val.jenis}</td>
                      <td className="border p-2">{val.spesifikasi}</td>
                      <td className="border p-2">{val.posisi}</td>
                      <td className="border p-2">{val.keterangan}</td>

                    </tr>
                );
              })}
              </tbody>
            </table>
            <div className="pagination-controls flex justify-end gap-2 mt-auto">
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

          </div>
        </div>
      </Wrapper>
  );
};
export default InventarisFTTI1;
