/* eslint-disable no-unused-vars */

import Wrapper from "../../assets/wrappers/peminjamanAlat";
import { useState } from "react";
import { LuFileText } from "react-icons/lu";
import { MdEditDocument } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";

import { FaTrashCan } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
const PeminjamanAlat = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-xl">
          Daftar Pemohon Peminjaman Barang
        </h1>
        <table className="table-auto w-full border border-collapse my-5 text-center text-sm">
          <thead className="border border-collapse bg-gray-100">
            <tr>
              <th className="border p-4">Nama</th>
              <th className="border p-4">NIDN/NIK</th>
              <th className="border p-4">Keperluan</th>
              <th className="border p-4">Jenis Barang</th>
              <th className="border p-4">Tanggal Peminjaman</th>
              <th className="border p-4">Tanggal Pengembalian</th>
              <th className="border p-4">status</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="text-center text-xs">
            <tr>
              <td className="border p-2">Nama</td>
              <td className="border px-2">NIDN/NIK</td>
              <td className="border px-2">Keperluan</td>
              <td className="border px-2">Jenis Barang/Alat</td>
              <td className="border px-2">Tanggal Peminjaman</td>
              <td className="border px-2">Tanggal Pengembalian</td>
              <td className="border px-2">pending</td>
              <td className="border px-2">Terima | Tolak</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};
export default PeminjamanAlat;