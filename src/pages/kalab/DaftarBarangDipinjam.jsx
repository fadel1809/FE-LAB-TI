import Wrapper from "../../assets/wrappers/peminjamanAlat";
import {useLoaderData, Form, useNavigate, useSearchParams} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import moment from "moment-timezone";
import {useEffect, useState} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export const loader = async ({request}) => {
  const url = new URL(request.url); // Mendapatkan URL saat ini
  const page = url.searchParams.get("page") || 1;
  try {
    const result = await customFetch.get("v1/peminjaman/alat/diterima", {
      withCredentials: true,
      params: {page:page}
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const DaftarBarangDipinjam = () => {
  const {data, pagination} = useLoaderData()
  let no=1
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
        <div className="mx-5 my-10 bg-white shadow-lg py-5 px-5 rounded-sm max-w-[65.625em] flex flex-col h-[30em]">
          <h1 className="text-biru-uhamka font-bold text-xl text-center">
            Daftar Status Alat Dipinjam
          </h1>
          <div className="overflow-auto flex flex-col justify-between h-[25em]">
            <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
              <thead className="border border-collapse bg-gray-100">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">NIDN/NIM</th>
                <th className="border p-2">Keperluan</th>
                <th className="border p-2">Jenis Barang</th>
                <th className="border p-2">Tanggal Peminjaman</th>
                <th className="border p-2">Tanggal Pengembalian</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Waktu Peminjaman</th>
                <th className="border p-2">Actions</th>
              </tr>
              </thead>

              <tbody className="text-center text-xs">
              {data.map((val) => {
                return (
                    <tr key={val.id}>
                      <td className="border px-2">{no++}</td>
                      <td className="border px-2">{val.nama}</td>
                      <td className="border px-2">{val.nidn}</td>
                      <td className="border px-2">{val.keperluan}</td>
                      <td className="border px-2">{val.jenis_barang}</td>
                      <td className="border px-2">
                        {moment
                            .utc(val.tanggal_peminjaman)
                            .tz("Asia/Jakarta")
                            .format("DD/MM/YYYY")}
                      </td>
                      <td className="border px-2">
                        {moment
                            .utc(val.tanggal_pengembalian)
                            .tz("Asia/Jakarta")
                            .format("DD/MM/YYYY")}
                      </td>
                      <td className="border px-2">{val.status}</td>
                      <td className="border px-2">{`${val.jam_mulai} - ${val.jam_selesai}`}</td>
                      <td className="border p-2 text-white flex items-center text-center justify-center">
                        <Form
                            type="submit"
                            method="post"
                            action={`${val.id}/dikembalikan`}
                        >
                          <button className="flex items-center bg-green-600 rounded-md px-3 py-1 ">
                            Dikembalikan
                          </button>
                        </Form>
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
                      currentPage === pagination.totalPages || pagination.totalItems === 0 ? "disabled disabled:text-gray-500" : ""}`}
              >
                <FaArrowAltCircleRight className={" text-3xl "}/>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
  );
};
export default DaftarBarangDipinjam;
