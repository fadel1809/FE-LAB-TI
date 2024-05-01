import { RxDashboard } from "react-icons/rx";
import { FaListCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { LuBookUp } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
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
    text: "Pusat Akun",
    path: "pusat-akun",
    icon: <FaUsers />,
  },

  {
    text: "Hasil Pemeriksaan",
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
        text: "Daftar Ruang Dipinjam",
        path: "peminjaman/daftar-ruang-dipinjam",
        icon: <FaBookmark />,
        longText: true,
      },
      {
        text: "History Peminjaman Alat",
        path: "peminjaman/history-peminjaman-barang",
        icon: <GoHistory />,
        longText: true,
      },
      {
        text: "History Peminjaman Ruang",
        path: "peminjaman/history-peminjaman-ruang",
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
