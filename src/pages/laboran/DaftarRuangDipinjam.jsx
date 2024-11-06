/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/peminjamanAlat";
import { Link,useLoaderData, Form  } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import moment from "moment-timezone";

export const loader = async() => {
  try {
    const result  = await customFetch.get("v1/peminjaman/ruang/diterima",{withCredentials:true})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const DaftarRuangDipinjam = () => {
  const {data} = useLoaderData()
  console.log(data)
  return (  
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl text-center">
          Daftar Status Ruang Dipinjam
        </h1>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
            <thead className="border border-collapse bg-gray-100">
              <tr>
                <th className="border p-4">Nama</th>
                <th className="border p-4">NIM</th>
                <th className="border p-4">Keperluan</th>
                <th className="border p-4">Ruang</th>
                <th className="border p-4">Tanggal Peminjaman</th>
                <th className="border p-4">Waktu Peminjaman</th>
                <th className="border p-4">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center text-xs">
              {data.map(val => {
                return (
                  <tr key={val.id}>
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
                    <td className="p-4 text-white flex items-center text-center justify-center">
                      <Form
                        method="post"
                        type="submit"
                        action={`${val.id}/selesai`}
                      >
                        <button className="flex items-center bg-green-600 rounded-md px-3 py-1 ">
                          Selesai
                        </button>
                      </Form>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
export default DaftarRuangDipinjam;
