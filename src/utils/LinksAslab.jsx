import { RxDashboard } from "react-icons/rx";
import { FaListCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import { FaWarehouse } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GrMultimedia } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsChatLeft } from "react-icons/bs";

const links = [
  {
    text: "Dashboard",
    path: ".",
    icon: <RxDashboard />,
  },
  {
    text: "Pemeriksaan",
    icon: <FaListCheck />,
    children: [
      {
        text: "Hardware",
        path: "pemeriksaan/hardware",
        icon: <FaTools />,
      },
      {
        text: "Software",
        path: "pemeriksaan/software",
        icon: <TbDeviceDesktopCog />,
      },
      {
        text: "History Pemeriksaan Hardware",
        path: "pemeriksaan/hardware/history",
        icon: <GoHistory />,
        longText: true,
      },
      {
        text: "History Pemeriksaan Software",
        path: "pemeriksaan/software/history",
        icon: <GoHistory />,
        longText: true,
      },
    ],
  },
  {
    text: "Inventaris",
    icon: <FaWarehouse />,
    children: [
      {
        text: "FTTI1",
        path: "inventaris/FTTI1",
        icon: <GrCloudSoftware />,
      },
      {
        text: "FTTI2",
        path: "inventaris/FTTI2",
        icon: <LiaNetworkWiredSolid />,
      },
      {
        text: "FTTI3",
        path: "inventaris/FTTI3",
        icon: <GrMultimedia />,
      },
      {
        text: "FTTI4",
        path: "inventaris/FTTI4",
        icon: <HiOutlineComputerDesktop />,
      },
    ],
  },
  {
    text: "Livechat",
    icon: <BsChatLeft />,
    path: "livechat",
  },
];
export default links;
