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
  EditPemeriksaanHardware,
  DeletePemeriksaanHardware,
  ValidasiLaboranPemeriksaanHardware,
  PemeriksaanSoftware,
  HasilPemeriksaanHardware,
  HasilPemeriksaanSoftware,
  HistoryPemeriksaanHardwareLaboran,
  HistoryPemeriksaanSoftwareLaboran,
  DetailPemeriksaanHardwareFtti1,
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
  DashboardLayout,
  LandingPageUser,
  AccessRights,
  DetailPemeriksaanHardwareFtti2,
  DetailpemeriksaanHardwareFtti3,
  DetailPemeriksaanHardwareFtti4,
  DetailPemeriksaanSoftwareFtti1,
  DetailPemeriksaanSoftwareFtti2,
  DetailPemeriksaanSoftwareFtti3,
  DetailPemeriksaanSoftwareFtti4
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { loader as dahsboardLoader } from "./pages/DashboardAdminLayout";
import { loader as authLoader } from "./pages/AccessRights";
import { loader as aslabUserLoader } from "./pages/aslab/DashboarAslabLayout";
import { loader as pemeriksaanHardwareAslabLoader } from "./pages/aslab/PemeriksaanHardware";
import { loader as laboranUserLoader } from "./pages/laboran/DashboardAdminLayout";
import { loader as kalabUserLoader } from "./pages/kalab/DashboardKalabLayout";
import { loader as pemeriksaanHardwareLaboranLoader } from "./pages/laboran/PemeriksaanHardware";
import { loader as detailPemeriksaanHardwareLaboranFtti1Loader } from "./pages/laboran/DetailPemeriksaanHardwareFtti1";
import { loader as pemeriksaanSoftwareLaboranLoader } from "./pages/laboran/PemeriksaanSoftware";
import {loader as detailPemeriksaanHardwareLaboranFtti4Loader} from "./pages/laboran/DetailPemeriksaanHardwareFtti4"
import {loader as detailPemeriksaanHardwareLaboranFtti2Loader} from "./pages/laboran/DetailpemeriksaanHardwareFtti2"
import {loader as detailPemeriksaanHardwareLaboranFtti3Loader} from "./pages/laboran/DetailPemeriksaanHardwareFtti3"
import {loader as detailPemeriksaanSoftwareLaboranFtti1Loader} from "./pages/laboran/DetailPemeriksaanSoftwareFtti1"
import {loader as detailPemeriksaanSoftwareLaboranFtti2Loader} from "./pages/laboran/DetailPemeriksaanSoftwareFtti2"
import {loader as detailPemeriksaanSoftwareLaboranFtti3Loader} from "./pages/laboran/DetailPemeriksaanSoftwareFtti3"
import { loader as detailPemeriksaanSoftwareLaboranFtti4Loader } from "./pages/laboran/DetailPemeriksaanSoftwareFtti4";
import {loader as historyPemeriksaanSoftwareLaboranLoader} from "./pages/laboran/HistoryPemeriksaanSoftware"
import {loader as historyPemeriksaanHardwareLaboranLoader} from "./pages/laboran/HistoryPemeriksaanHardware"
import {loader as hasilPemeriksaanHardwareLaboranLoader} from "./pages/laboran/HasilPemeriksaanHardware"
import { loader as hasilPemeriksaanSoftwareLaboranLoader } from "./pages/laboran/HasilPemeriksaanSoftware";
import {loader as editPemeriksaanHardwareLaboranLoader} from "./pages/laboran/EditPemeriksaanHardware"
import {action as tambahDataPemeriksaanHardwareLaboranAction} from "./pages/laboran/TambahDataPemeriksaanHardware"
import {action as editPemeriksaanHardwareLaboranAction} from "./pages/laboran/EditPemeriksaanHardware"
import {action as DeletePemeriksaanHardwareLaboranAction} from "./pages/laboran/DeletePemeriksaanHardware"
import {action as StatusValidasiLaboranPemeriksaanHardwareLaboranAction} from "./pages/laboran/ValidasiLaboranPemeriksaanHardware"
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
        action: loginAction,
      },
      {
        path: "auth",
        element: <AccessRights />,
        loader: authLoader,
      },
      {
        path: "user/:id",
        children: [
          {
            index: true,
            element: <LandingPageUser />,
          },
          {
            path: "peminjaman-alat",
            element: <FormPeminjamanAlat />,
          },
          {
            path: "peminjaman-ruang",
            element: <FormPeminjamanRuang />,
          },
        ],
      },
      {
        path: "admin",
        children: [
          {
            index: true,
            element: <DashboardLayout />,
            loader: dahsboardLoader,
          },
          {
            path: "dashboard-laboran/:id",
            element: <DashboardAdminLayout />,
            loader: laboranUserLoader,
            children: [
              {
                index: true,
                element: <DashboardAdmin />,
              },
              {
                path: "pemeriksaan/hardware",
                element: <PemeriksaanHardware />,
                loader: pemeriksaanHardwareLaboranLoader,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/edit",
                element: <EditPemeriksaanHardware/>,
                loader: editPemeriksaanHardwareLaboranLoader,
                action: editPemeriksaanHardwareLaboranAction
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/delete",
                element: <DeletePemeriksaanHardware/>,
                action: DeletePemeriksaanHardwareLaboranAction
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/validasi-laboran",
                element: <ValidasiLaboranPemeriksaanHardware/>,
                action: StatusValidasiLaboranPemeriksaanHardwareLaboranAction
              },
              {
                path: "pemeriksaan/software",
                element: <PemeriksaanSoftware />,
                loader: pemeriksaanSoftwareLaboranLoader,
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
                loader : hasilPemeriksaanHardwareLaboranLoader
              },
              {
                path: "pemeriksaan/konfirmasi-software",
                element: <HasilPemeriksaanSoftware />,
                loader: hasilPemeriksaanSoftwareLaboranLoader
              },
              {
                path: "pemeriksaan/hardware/tambah",
                element: <TambahDataPemeriksaanHardware />,
                action: tambahDataPemeriksaanHardwareLaboranAction
                
              },
              {
                path: "pemeriksaan/hardware/history",
                element: <HistoryPemeriksaanHardwareLaboran />,
                loader: historyPemeriksaanHardwareLaboranLoader
              },
              {
                path: "pemeriksaan/software/history",
                element: <HistoryPemeriksaanSoftwareLaboran/>,
                loader: historyPemeriksaanSoftwareLaboranLoader
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
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanHardwareFtti1 />,
            loader: detailPemeriksaanHardwareLaboranFtti1Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanHardwareFtti2 />,
            loader: detailPemeriksaanHardwareLaboranFtti2Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3",
            element: <DetailpemeriksaanHardwareFtti3 />,
            loader: detailPemeriksaanHardwareLaboranFtti3Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanHardwareFtti4 />,
            loader: detailPemeriksaanHardwareLaboranFtti4Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanSoftwareFtti1 />,
            loader: detailPemeriksaanSoftwareLaboranFtti1Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanSoftwareFtti2 />,
            loader: detailPemeriksaanSoftwareLaboranFtti2Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanSoftwareFtti3 />,
            loader: detailPemeriksaanSoftwareLaboranFtti3Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanSoftwareFtti4 />,
            loader: detailPemeriksaanSoftwareLaboranFtti4Loader,
          },
          {
            path: "dashboard-kalab/:id",
            element: <DashboardKalabLayout />,
            loader: kalabUserLoader,
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
            path: "dashboard-aslab/:id",
            element: <DashboardAslabLayout />,
            loader: aslabUserLoader,
            children: [
              {
                index: true,
                element: <DashboardAslab />,
              },
              {
                path: "pemeriksaan/hardware",
                element: <PemeriksaanHardwareAslab />,
                loader: pemeriksaanHardwareAslabLoader,
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
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
