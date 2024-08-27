/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Wrapper from "../../assets/wrappers/dahsboardAdmin";
import { MdOutlineSupervisorAccount } from "react-icons/md";

import { GoChecklist } from "react-icons/go";
import { PiListChecksBold } from "react-icons/pi";
import { MdManageHistory } from "react-icons/md";
import { TbHistory } from "react-icons/tb";
import { BiRevision } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { MdBookmarkAdded } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GrMultimedia } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import customFetch from "../../utils/customFetch";
import { useState,useEffect } from "react";

import { useLoaderData } from "react-router-dom";
const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white border border-gray-100 shadow-2xl rounded-lg mx-2 my-2 p-6 flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <h4 className="text-biru-uhamka font-bold text-sm">{title}</h4>
          <p className="text-gray-600 text-xs font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardKalab = () => {
    
    const [dataRT, setDataRT] = useState([]);

    const fetchData = async () => {
      try {
        const result = await customFetch.get("v1/dashboard/dashboard-kalab", {
          withCredentials: true,
        });
        setDataRT(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      const interval = setInterval(fetchData, 100); // Poll every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }, [dataRT]);
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <div className="flex space-x-4 mx-10 my-10">
          <div className="grid md:grid-cols-3">
            <DashboardCard
              title="Pemeriksaan Hardware Butuh Validasi"
              value={dataRT?.data?.validasiKalabCount?.validasi_laboran_count||0}
              icon={<GoChecklist className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Pemeriksaan Software Butuh Validasi"
              value={
                dataRT?.data?.softwareValidasiKalabCount?.validasi_laboran_count || 0
              }
              icon={<PiListChecksBold className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="History Pemeriksaan Hardware"
              value={dataRT?.data?.historyHardware?.history_hardware_count || 0}
              icon={<MdManageHistory className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="History Pemeriksaan Software"
              value={dataRT?.data?.historySoftware?.history_software_count || 0}
              icon={<TbHistory className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Permohonan Peminjaman Alat"
              value={
                dataRT?.data?.validasiLaboranPeminjamanAlat?.peminjaman_alat_pending || 0
              }
              icon={<TbTools className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Permohonan Peminjaman Ruang"
              value={
                dataRT?.data?.validasiLaboranPeminjamanRuang?.peminjaman_ruang_pending || 0
              }
              icon={<RiComputerLine className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Barang Sedang Dipinjam"
              value={dataRT?.data?.barangDipinjam?.barang_dipinjam || 0}
              icon={<MdBookmarkAdded className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Ruang Sedang Dipinjam"
              value={dataRT?.data?.ruangDipinjam?.ruang_dipinjam || 0}
              icon={<MdBookmarkAdded className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI1"
              value={dataRT?.data?.inventarisFtti1?.inventaris_ftti1 || 0}
              icon={<GrCloudSoftware className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI2"
              value={dataRT?.data?.inventarisFtti2?.inventaris_ftti2 || 0}
              icon={<LiaNetworkWiredSolid className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI3"
              value={dataRT?.data?.inventarisFtti3?.inventaris_ftti3 || 0}
              icon={<GrMultimedia className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI4"
              value={dataRT?.data?.inventarisFtti4?.inventaris_ftti4 || 0}
              icon={
                <HiOutlineComputerDesktop className="text-blue-500 text-3xl" />
              }
            />
            <DashboardCard
              title="Jumlah Akun Staff"
              value={dataRT?.data?.jumlahAkun?.staff_count || 0}
              icon={
                <MdOutlineSupervisorAccount className="text-blue-500 text-3xl" />
              }
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardKalab;
