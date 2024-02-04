import { RxDashboard } from "react-icons/rx";
import { FaListCheck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { LuBookUp } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";

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
    ],
  },
  {
    text: "Inventaris",
    icon: <FaWarehouse />,
    path: "inventaris",
  },
];
export default links;
