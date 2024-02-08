import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LandingLayout,
  LandingPage,
  Login,
  DashboardAdminLayout,
  DashboardAdmin,
  DashboardKalab,
  DashboardKalabLayout,
  PemeriksaanHardware,
  PemeriksaanSoftware,
  DetailPemeriksaanHardware,
  TambahDataPemeriksaanHardware,
  TambahDataDetailPemeriksaanHardware,
} from "./pages";
import TambahDataPemeriksaanSoftware from "./pages/admin/TambahDataPemeriksaanSoftware";
import DetailPemeriksaanSoftware from "./pages/admin/DetailPemeriksaanSoftware";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashboardAdminLayout />,
        children: [
          {
            index: true,
            element: <DashboardAdmin />,
          },

          {
            path: "pemeriksaan/hardware",
            element: <PemeriksaanSoftware />,
          },
          {
            path: "pemeriksaan/software",
            element: <PemeriksaanHardware />,
          },
          {
            path: "pemeriksaan/software/:id/tambah",
            element: <TambahDataPemeriksaanSoftware />,
          },

          {
            path: "pemeriksaan/hardware/:id/detail/tambah",
            element: <TambahDataDetailPemeriksaanHardware />,
          },
          {
            path: "pemeriksaan/hardware/:id/tambah",
            element: <TambahDataPemeriksaanHardware />,
          },
        ],
      },
      {
        path: "dashboard/pemeriksaan/hardware/:id/detail",
        element: <DetailPemeriksaanHardware />,
      },
      {
        path: "dashboard/pemeriksaan/software/:id/detail",
        element: <DetailPemeriksaanSoftware />,
      },
    ],
  },
  {
    path: "/dashboard-kalab",
    element: <DashboardKalabLayout />,
    children: [
      {
        index: true,
        element: <DashboardKalab />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
