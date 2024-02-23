/* eslint-disable no-unused-vars */
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
  HasilPemeriksaanHardware,
  HasilPemeriksaanSoftware,
  HistoryPemeriksaan,
  DetailPemeriksaanHardware,
  TambahDataPemeriksaanHardware,
  TambahDataDetailPemeriksaanHardware,
  DashboardAslab,
  DashboardAslabLayout,
  PeminjamanAlat,
  PeminjamanRuang,
  FormPeminjamanAlat,
  FormPeminjamanRuang,
  InventarisFTTI1,
  InventarisFTTI2,
  InventarisFTTI3,
  InventarisFTTI4,
  HistoryInventaris,
  TambahDataPemeriksaanSoftware,
  DetailPemeriksaanSoftware,
  DaftarBarangDipinjam,
  HistoryPeminjaman,
  PemeriksaanHardwareKalab,
  PemeriksaanSoftwareKalab,
  PusatAkun,
  HistoryPemeriksaanKalab,
  PeminjamanAlatKalab,
  PeminjamanRuangKalab,
  HistoryPeminjamanKalab,
  DaftarBarangDipinjamKalab,
  InventarisFTTI1Kalab,
  InventarisFTTI2Kalab,
  InventarisFTTI3Kalab,
  InventarisFTTI4Kalab,
  HistoryInventarisKalab,
  PemeriksaanHardwareAslab,
  PemeriksaanSoftwareAslab,
  HistoryPemeriksaanAslab,
  InventarisFTTI1Aslab,
  InventarisFTTI2Aslab,
  InventarisFTTI3Aslab,
  InventarisFTTI4Aslab,
  HistoryInventarisAslab,
} from "./pages";

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
        path: "peminjaman-alat",
        element: <FormPeminjamanAlat />,
      },
      {
        path: "peminjaman-ruang",
        element: <FormPeminjamanRuang />,
      },
      {
        path: "/dashboard-laboran",
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
            path: "pemeriksaan/konfirmasi-hardware",
            element: <HasilPemeriksaanHardware />,
          },
          {
            path: "pemeriksaan/konfirmasi-software",
            element: <HasilPemeriksaanSoftware />,
          },
          {
            path: "pemeriksaan/hardware/:id/tambah",
            element: <TambahDataPemeriksaanHardware />,
          },
          {
            path: "pemeriksaan/history",
            element: <HistoryPemeriksaan />,
          },
          {
            path: "peminjaman/alat",
            element: <PeminjamanAlat />,
          },
          {
            path: "peminjaman/ruang",
            element: <PeminjamanRuang />,
          },
          {
            path: "peminjaman/daftar-barang-dipinjam",
            element: <DaftarBarangDipinjam />,
          },
          {
            path: "peminjaman/history-peminjaman",
            element: <HistoryPeminjaman />,
          },
          {
            path: "inventaris/FTTI1",
            element: <InventarisFTTI1 />,
          },
          {
            path: "inventaris/FTTI2",
            element: <InventarisFTTI2 />,
          },
          {
            path: "inventaris/FTTI3",
            element: <InventarisFTTI3 />,
          },
          {
            path: "inventaris/FTTI4",
            element: <InventarisFTTI4 />,
          },
          {
            path: "inventaris/history",
            element: <HistoryInventaris />,
          },
        ],
      },
      {
        path: "dashboard-laboran/pemeriksaan/hardware/:id/detail",
        element: <DetailPemeriksaanHardware />,
      },
      {
        path: "dashboard-laboran/pemeriksaan/software/:id/detail",
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
      {
        path: "pemeriksaan/hardware",
        element: <PemeriksaanHardwareKalab />,
      },
      {
        path: "pemeriksaan/software",
        element: <PemeriksaanSoftwareKalab />,
      },
      {
        path: "pemeriksaan/history",
        element: <HistoryPemeriksaanKalab />,
      },
      {
        path: "pusat-akun",
        element: <PusatAkun />,
      },
      {
        path: "peminjaman/alat",
        element: <PeminjamanAlatKalab />,
      },
      {
        path: "peminjaman/ruang",
        element: <PeminjamanRuangKalab />,
      },
      {
        path: "peminjaman/daftar-barang-dipinjam",
        element: <DaftarBarangDipinjamKalab />,
      },
      {
        path: "peminjaman/history",
        element: <HistoryPeminjamanKalab />,
      },
      {
        path: "inventaris/FTTI1",
        element: <InventarisFTTI1Kalab />,
      },
      {
        path: "inventaris/FTTI2",
        element: <InventarisFTTI2Kalab />,
      },
      {
        path: "inventaris/FTTI3",
        element: <InventarisFTTI3Kalab />,
      },
      {
        path: "inventaris/FTTI4",
        element: <InventarisFTTI4Kalab />,
      },
      {
        path: "inventaris/history",
        element: <HistoryInventarisKalab />,
      },
    ],
  },
  {
    path: "/dashboard-aslab",
    element: <DashboardAslabLayout />,
    children: [
      {
        index: true,
        element: <DashboardAslab />,
      },
      {
        path: "pemeriksaan/hardware",
        element: <PemeriksaanHardwareAslab />,
      },
      {
        path: "pemeriksaan/software",
        element: <PemeriksaanSoftwareAslab />,
      },
      {
        path: "pemeriksaan/history",
        element: <HistoryPemeriksaanAslab />,
      },
      {
        path: "inventaris/FTTI1",
        element: <InventarisFTTI1Aslab />,
      },
      {
        path: "inventaris/FTTI2",
        element: <InventarisFTTI2Aslab />,
      },
      {
        path: "inventaris/FTTI3",
        element: <InventarisFTTI3Aslab />,
      },
      {
        path: "inventaris/FTTI4",
        element: <InventarisFTTI4Aslab />,
      },
      {
        path: "inventaris/history",
        element: <HistoryInventarisAslab />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
