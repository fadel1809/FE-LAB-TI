/* eslint-disable react/prop-types */
import Wrapper from "../../assets/wrappers/dahsboardAdmin";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { TbHistory } from "react-icons/tb";
import { BiRevision } from "react-icons/bi";
import { GrCloudSoftware } from "react-icons/gr";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GrMultimedia } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import customFetch from "../../utils/customFetch";

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
export const loader = async () => {
  try {
    const result = await customFetch.get("v1/dashboard/dashboard-aslab", {
      withCredentials: true,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const DashboardAslab = () => {
    const { data } = useLoaderData();
  
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <div className="flex space-x-4 mx-10 my-10">
          <div className="grid md:grid-cols-3">
            <DashboardCard
              title="Pemeriksaan Hardware Pengecekan"
              value={data.pengecekanCount[0].pengecekan_count}
              icon={<BsFileEarmarkCheck className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Pemeriksaan Software Pengecekan"
              value={data.softwarePengecekanCount[0].pengecekan_count}
              icon={<TbChecklist className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="History Pemeriksaan Hardware"
              value={data.historyHardware[0].history_hardware_count}
              icon={<MdManageHistory className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="History Pemeriksaan Software"
              value={data.historySoftware[0].history_software_count}
              icon={<TbHistory className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Pemeriksaan Hardware Butuh Revisi"
              value={data.revisiHardware[0].revisi_hardware_count}
              icon={<BiRevision className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Pemeriksaan Software Butuh Revisi"
              value="1"
              icon={<BiRevision className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI1"
              value={data.inventarisFtti1[0].inventaris_ftti1}
              icon={<GrCloudSoftware className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI2"
              value={data.inventarisFtti2[0].inventaris_ftti2}
              icon={<LiaNetworkWiredSolid className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI3"
              value={data.inventarisFtti3[0].inventaris_ftti3}
              icon={<GrMultimedia className="text-blue-500 text-3xl" />}
            />
            <DashboardCard
              title="Jumlah Inventaris FTTI4"
              value={data.inventarisFtti4[0].inventaris_ftti4}
              icon={
                <HiOutlineComputerDesktop className="text-blue-500 text-3xl" />
              }
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardAslab;
