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
  EditPemeriksaanSoftware,
  DeletePemeriksaanSoftware,
  ValidasiLaboranPemeriksaanSoftware,
  HasilPemeriksaanHardware,
  HasilPemeriksaanSoftware,
  HistoryPemeriksaanHardwareLaboran,
  HistoryPemeriksaanSoftwareLaboran,
  DetailPemeriksaanHardwareFtti1,
  TambahDataPemeriksaanHardware,
  TambahDataDetailPemeriksaanHardwareFtti1,
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
  HistoryPeminjamanAlat,
  HistoryPeminjamanRuang,
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
  DetailPemeriksaanSoftwareFtti4,
  StatusRevisiPemeriksaanHardware,
  StatusRevisiPemeriksaanSoftware,
  StatusValidasiKalabPemeriksaanHardware,
  StatusValidasiKalabPemeriksaanSoftware,
  DeleteHistoryPemeriksaanHardware,
  DeleteHistoryPemeriksaanSoftware,
  DaftarRuangDipinjam,
  EditDetailPemeriksaanHardwareFtti1,
  DeleteDetailPemeriksaanHardwareFtti1,
  TambahDataDetailPemeriksaanHardwareFtti2,
  EditDetailPemeriksaanHardwareFtti2,
  DeleteDetailPemeriksaanHardwareFtti2,
  TambahDataDetailPemeriksaanHardwareFtti3,
  EditDetailPemeriksaanHardwareFtti3,
  DeleteDetailPemeriksaanHardwareFtti3,
  TambahDataDetailPemeriksaanHardwareFtti4,
  EditDetailPemeriksaanhardwareFtti4,
  DeleteDetailPemeriksaanHardwareFtti4,
  TambahDataDetailPemeriksaanSoftwareFtti1,
  EditDetailPemeriksaanSoftwareFtti1,
  DeleteDetailPemeriksaanSoftwareFtti1,
  TambahDataDetailPemeriksaanSoftwareFtti2,
  EditDetailPemeriksaanSoftwareFtti2,
  DeleteDetailPemeriksaanSoftwareFtti2,
  TambahDataDetailPemeriksaanSoftwareFtti3,
  EditDetailPemeriksaanSoftwareFtti3,
  DeleteDetailPemeriksaanSoftwareFtti3,
  TambahDataDetailPemeriksaanSoftwareFtti4,
  EditDetailPemeriksaanSoftwareFtti4,
  DeleteDetailPemeriksaanSoftwareFtti4
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
import {loader as editPemeriksaanSoftwareLaboranLoader} from "./pages/laboran/EditPemeriksaanSoftware"
import {loader as editDetailPemeriksaanHardwareFtti1LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti1"
import {loader as editDetailPemeriksaanHardwareFtti2LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti2"
import {loader as editDetailPemeriksaanHardwareFtti3LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti3"
import {loader as editDetailPemeriksaanHardwareFtti4LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanhardwareFtti4"
import {loader as editDetailPemeriksaanSoftwareFtti1LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti1" 
import {loader as editDetailPemeriksaanSoftwareFtti2LaboranLoader} from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti2"
import { loader as editDetailPemeriksaanSoftwareFtti3LaboranLoader } from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti3";
import { loader as editDetailPemeriksaanSoftwareFtti4LaboranLoader } from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti4";

import {action as tambahDataPemeriksaanHardwareLaboranAction} from "./pages/laboran/TambahDataPemeriksaanHardware"
import {action as editPemeriksaanHardwareLaboranAction} from "./pages/laboran/EditPemeriksaanHardware"
import {action as editPemeriksaanSoftwareLaboranAction} from "./pages/laboran/EditPemeriksaanSoftware"
import {action as DeletePemeriksaanHardwareLaboranAction} from "./pages/laboran/DeletePemeriksaanHardware"
import {action as StatusValidasiLaboranPemeriksaanHardwareLaboranAction} from "./pages/laboran/ValidasiLaboranPemeriksaanHardware"
import {action as tambahDataPemeriksaanSoftwareLaboranAction} from "./pages/laboran/TambahDataPemeriksaanSoftware"
import {action as DeletePemeriksaanSoftwareLaboranAction} from "./pages/laboran/DeletePemeriksaanSoftware"
import {action as StatusValidasiLaboranPemeriksaanSoftwareLaboranAction} from "./pages/laboran/ValidasiLaboranPemeriksaanSoftware"
import {action as statusRevisiPemeriksaanHardwareLaboranAction} from "./pages/laboran/StatusRevisiPemeriksaanHardware"
import {action as statusRevisiPemeriksaanSoftwareLaboranAction} from "./pages/laboran/StatusRevisiPemeriksaanSoftware"
import {action as statusValdasiKalabPemeriksaanHardwareLaboranAction} from "./pages/laboran/StatusValidasiKalabPemeriksaanHardware"
import {action as statusValidasiKalabPemeriksaanSoftwareLaboranAction} from "./pages/laboran/StatusValidasiKalabPemeriksaanSoftware"
import {action as deleteHistoryPemeriksaanHardwareLaboranAction} from "./pages/laboran/DeleteHistoryPemeriksaanHardware"
import {action as deleteHistoryPemeriksaanSoftwareLaboranAction} from "./pages/laboran/DeleteHistoryPemeriksaanSoftware"
import {action as tambahDetailPemeriksaanHardwareFtti1LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanHardwareFtti1"
import {action as editDetailPemeriksaanHardwareFtti1LaboranAction} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti1"
import {action as deleteDetailPemeriksaanHardwareFtti1LaboranAction} from "./pages/laboran/DeleteDetailPemeriksaanHardwareFtti1"
import {action as tambahDetailPemeriksaanHardwareFtti2LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanHardwareFtti2"
import {action as editDetailPemeriksaanHardwareFtti2LaboranAction} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti2"
import { action as deleteDetailPemeriksaanHardwareFtti2LaboranAction } from "./pages/laboran/DeleteDetailPemeriksaanHardwareFtti2";
import {action as tambahDetailPemeriksaanHardwareFtti3LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanHardwareFtti3"
import {action as editDetailPemeriksaanHardwareFtti3LaboranAction} from "./pages/laboran/EditDetailPemeriksaanHardwareFtti3"
import {action as deleteDetailPemeriksaanHardwareFtti3LaboranAction} from "./pages/laboran/DeleteDetailPemeriksaanHardwareFtti3"
import {action as tambahDetailPemeriksaanHardwareFtti4LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanHardwareFtti4"
import {action as editDetailPemeriksaanHardwareFtti4LaboranAction}  from "./pages/laboran/EditDetailPemeriksaanhardwareFtti4"
import { action as deleteDetailPemeriksaanHardwareFtti4LaboranAction } from "./pages/laboran/DeleteDetailPemeriksaanHardwareFtti4";
import {action as tambahDetailPemeriksaanSoftwareFtti1LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanSoftwareFtti1"
import {action as editDetailPemeriksaanSofwareFtti1LaboranAction} from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti1"
import {action as deleteDetailPemeriksaanSoftwareFtti1LaboranAction} from "./pages/laboran/DeleteDetailPemeriksaanSoftwareFtti1"
import {action as tambahDetailPemeriksaanSoftwareFtti2LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanSoftwareFtti2"
import {action as editDetailPemeriksaanSoftwareFtti2LaboranAction} from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti2"
import {action as deleteDetailPemeriksaanSoftwareFtti2LaboranAction} from "./pages/laboran/DeleteDetailPemeriksaanSoftwareFtti2"
import {action as tambahDetailPemeriksaanSoftwareFtti3LaboranAction} from "./pages/laboran/TambahDataDetailPemeriksaanSoftwareFtti3"
import { action as editDetailPemeriksaanSoftwareFtti3LaboranAction } from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti3";
import { action as deleteDetailPemeriksaanSoftwareFtti3LaboranAction } from "./pages/laboran/DeleteDetailPemeriksaanSoftwareFtti3";
import { action as tambahDetailPemeriksaanSoftwareFtti4LaboranAction } from "./pages/laboran/TambahDataDetailPemeriksaanSoftwareFtti4";
import { action as editDetailPemeriksaanSoftwareFtti4LaboranAction } from "./pages/laboran/EditDetailPemeriksaanSoftwareFtti4";
import { action as deleteDetailPemeriksaanSoftwareFtti4LaboranAction } from "./pages/laboran/DeleteDetailPemeriksaanSoftwareFtti4";


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
                element: <EditPemeriksaanHardware />,
                loader: editPemeriksaanHardwareLaboranLoader,
                action: editPemeriksaanHardwareLaboranAction,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/edit",
                element: <EditPemeriksaanSoftware />,
                loader: editPemeriksaanSoftwareLaboranLoader,
                action: editPemeriksaanSoftwareLaboranAction,
                exact: true,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/delete",
                element: <DeletePemeriksaanHardware />,
                action: DeletePemeriksaanHardwareLaboranAction,
                exact: true,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/delete",
                element: <DeletePemeriksaanSoftware />,
                action: DeletePemeriksaanSoftwareLaboranAction,
                exact: true,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/validasi-laboran",
                element: <ValidasiLaboranPemeriksaanHardware />,
                action: StatusValidasiLaboranPemeriksaanHardwareLaboranAction,
                exact: true,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/validasi-laboran",
                element: <ValidasiLaboranPemeriksaanSoftware />,
                action: StatusValidasiLaboranPemeriksaanSoftwareLaboranAction,
                exact: true,
              },
              {
                path: "pemeriksaan/software",
                element: <PemeriksaanSoftware />,
                loader: pemeriksaanSoftwareLaboranLoader,
              },
              {
                path: "pemeriksaan/software/tambah",
                element: <TambahDataPemeriksaanSoftware />,
                action: tambahDataPemeriksaanSoftwareLaboranAction,
              },

              {
                path: "pemeriksaan/konfirmasi-hardware",
                element: <HasilPemeriksaanHardware />,
                loader: hasilPemeriksaanHardwareLaboranLoader,
              },
              {
                path: "pemeriksaan/konfirmasi-hardware/:idPemeriksaan/status-revisi",
                element: <StatusRevisiPemeriksaanHardware />,
                action: statusRevisiPemeriksaanHardwareLaboranAction,
              },
              {
                path: "pemeriksaan/konfirmasi-hardware/:idPemeriksaan/validasi-kalab",
                element: <StatusValidasiKalabPemeriksaanHardware />,
                action: statusValdasiKalabPemeriksaanHardwareLaboranAction,
              },
              {
                path: "pemeriksaan/konfirmasi-software",
                element: <HasilPemeriksaanSoftware />,
                loader: hasilPemeriksaanSoftwareLaboranLoader,
              },
              {
                path: "pemeriksaan/konfirmasi-software/:idPemeriksaan/status-revisi",
                element: <StatusRevisiPemeriksaanSoftware />,
                action: statusRevisiPemeriksaanSoftwareLaboranAction,
              },
              {
                path: "pemeriksaan/konfirmasi-software/:idPemeriksaan/validasi-kalab",
                element: <StatusValidasiKalabPemeriksaanSoftware />,
                action: statusValidasiKalabPemeriksaanSoftwareLaboranAction,
              },
              {
                path: "pemeriksaan/hardware/tambah",
                element: <TambahDataPemeriksaanHardware />,
                action: tambahDataPemeriksaanHardwareLaboranAction,
              },
              {
                path: "pemeriksaan/hardware/history",
                element: <HistoryPemeriksaanHardwareLaboran />,
                loader: historyPemeriksaanHardwareLaboranLoader,
              },
              {
                path: "pemeriksaan/hardware/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanHardware />,
                action: deleteHistoryPemeriksaanHardwareLaboranAction,
              },
              {
                path: "pemeriksaan/software/history",
                element: <HistoryPemeriksaanSoftwareLaboran />,
                loader: historyPemeriksaanSoftwareLaboranLoader,
              },
              {
                path: "pemeriksaan/software/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanSoftware />,
                action: deleteHistoryPemeriksaanSoftwareLaboranAction,
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
                path: "peminjaman/daftar-alat-dipinjam",
                element: <DaftarBarangDipinjam />,
              },
              {
                path: "peminjaman/daftar-ruang-dipinjam",
                element: <DaftarRuangDipinjam />,
              },
              {
                path: "peminjaman/history-peminjaman-alat",
                element: <HistoryPeminjamanAlat />,
              },
              {
                path: "peminjaman/history-peminjaman-ruang",
                element: <HistoryPeminjamanRuang />,
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
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti1 />,
            action: tambahDetailPemeriksaanHardwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti1 />,
            loader: editDetailPemeriksaanHardwareFtti1LaboranLoader,
            action: editDetailPemeriksaanHardwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti1 />,
            action: deleteDetailPemeriksaanHardwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanHardwareFtti2 />,
            loader: detailPemeriksaanHardwareLaboranFtti2Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti2 />,
            action: tambahDetailPemeriksaanHardwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti2 />,
            loader: editDetailPemeriksaanHardwareFtti2LaboranLoader,
            action: editDetailPemeriksaanHardwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti2 />,
            action: deleteDetailPemeriksaanHardwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3",
            element: <DetailpemeriksaanHardwareFtti3 />,
            loader: detailPemeriksaanHardwareLaboranFtti3Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti3 />,
            action: tambahDetailPemeriksaanHardwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti3 />,
            loader: editDetailPemeriksaanHardwareFtti3LaboranLoader,
            action: editDetailPemeriksaanHardwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti3 />,
            action: deleteDetailPemeriksaanHardwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanHardwareFtti4 />,
            loader: detailPemeriksaanHardwareLaboranFtti4Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti4 />,
            action: tambahDetailPemeriksaanHardwareFtti4LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/:idDetail/edit",
            element: <EditDetailPemeriksaanhardwareFtti4 />,
            loader: editDetailPemeriksaanHardwareFtti4LaboranLoader,
            action: editDetailPemeriksaanHardwareFtti4LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti4 />,
            action: deleteDetailPemeriksaanHardwareFtti4LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanSoftwareFtti1 />,
            loader: detailPemeriksaanSoftwareLaboranFtti1Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti1 />,
            action: tambahDetailPemeriksaanSoftwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti1 />,
            loader: editDetailPemeriksaanSoftwareFtti1LaboranLoader,
            action: editDetailPemeriksaanSofwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti1 />,
            action: deleteDetailPemeriksaanSoftwareFtti1LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanSoftwareFtti2 />,
            loader: detailPemeriksaanSoftwareLaboranFtti2Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti2 />,
            action: tambahDetailPemeriksaanSoftwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti2 />,
            loader: editDetailPemeriksaanSoftwareFtti2LaboranLoader,
            action: editDetailPemeriksaanSoftwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti2 />,
            action: deleteDetailPemeriksaanSoftwareFtti2LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanSoftwareFtti3 />,
            loader: detailPemeriksaanSoftwareLaboranFtti3Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti3 />,
            action: tambahDetailPemeriksaanSoftwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti3 />,
            loader: editDetailPemeriksaanSoftwareFtti3LaboranLoader,
            action: editDetailPemeriksaanSoftwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti3 />,
            action: deleteDetailPemeriksaanSoftwareFtti3LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanSoftwareFtti4 />,
            loader: detailPemeriksaanSoftwareLaboranFtti4Loader,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti4 />,
            action: tambahDetailPemeriksaanSoftwareFtti4LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti4 />,
            loader: editDetailPemeriksaanSoftwareFtti4LaboranLoader,
            action: editDetailPemeriksaanSoftwareFtti4LaboranAction,
          },
          {
            path: "dashboard-laboran/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti4 />,
            action: deleteDetailPemeriksaanSoftwareFtti4LaboranAction
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
