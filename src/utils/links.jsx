import { RxDashboard } from "react-icons/rx";
import { FaListCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { LuBookUp } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { TbCheckupList } from "react-icons/tb";
import { RiListCheck3 } from "react-icons/ri";

import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { GrCloudSoftware } from "react-icons/gr";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GrMultimedia } from "react-icons/gr";

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
        longText: true,
      },
      {
        text: "Software",
        path: "pemeriksaan/software",
        icon: <TbDeviceDesktopCog />,
        longText: true,
      },

      {
        text: "History Pemeriksaan",
        path: "pemeriksaan/history",
        icon: <GoHistory />,
        longText: true,
      },
    ],
  },
  {
    text: "Hasil Pemeriksaan",
    icon: <RiListCheck3 />,
    children: [
      {
        text: "Hardware",
        path: "pemeriksaan/konfirmasi-hardware",
        icon: <BsFillClipboardCheckFill />,
      },
      {
        text: "Software",
        path: "pemeriksaan/konfirmasi-software",
        icon: <TbCheckupList />,
      },
    ],
  },
  {
    text: "Peminjaman",
    icon: <LuBookUp />,
    children: [
      {
        text: "Alat",
        path: "peminjaman/alat",
        icon: <FaComputer />,
      },
      {
        text: "Ruang",
        path: "peminjaman/ruang",
        icon: <FaBuildingUser />,
      },
      {
        text: "Daftar Barang Dipinjam",
        path: "peminjaman/daftar-barang-dipinjam",
        icon: <FaBookmark />,
        longText: true,
      },
      {
        text: "History Peminjaman",
        path: "peminjaman/history-peminjaman",
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
      {
        text: "History Inventaris",
        path: "inventaris/history",
        icon: <GoHistory />,
        longText: true,
      },
    ],
  },
];
export default links;
