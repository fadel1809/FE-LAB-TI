/* eslint-disable no-unused-vars */
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LandingLayout,
  LandingPage,
  Login,
  Register,
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
  PeminjamanAlatKalab,
  PeminjamanRuangKalab,
  HistoryPeminjamanBarangKalab,
  DaftarBarangDipinjamKalab,
  InventarisFTTI1Kalab,
  InventarisFTTI2Kalab,
  InventarisFTTI3Kalab,
  InventarisFTTI4Kalab,
  HistoryInventarisKalab,
  PemeriksaanHardwareAslab,
  PemeriksaanSoftwareAslab,
  HistoryPemeriksaanHardwareAslab,
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
  DeleteDetailPemeriksaanSoftwareFtti4,
  TerimaPeminjamanAlat,
  TolakPeminjamanAlat,
  TerimaPeminjamanRuang,
  TolakPeminjamanRuang,
  TambahDataInventarisFtti1,
  EditInventarisFtti1,
  DeleteInventarisFtti1,
  TambahDataInventarisFtti2,
  EditInventarisFtti2,
  DeleteInventarisFtti2,
  TambahDataInventarisFtti3,
  EditInventarisFtti3,
  DeleteInventarisFtti3,
  TambahDataInventarisFtti4,
  EditInventarisFtti4,
  DeleteInventarisFtti4,
  StatusDikembalikanPeminjamanAlat,
  StatusSelesaiPeminjamanRuang,
  DeleteHistoryPeminjamanAlat,
  DeleteHistoryPeminjamanRuang,
  TambahDataPemeriksaanhardwareAslab,
  DetailPemeriksaanHardwareFtti1Aslab,
  DetailPemeriksaanHardwareFtti2Aslab,
  DetailPemeriksaanHardwareFtti3Aslab,
  DetailPemeriksaanHardwareFtti4Aslab,
  EditPemeriksaanHardwareAslab,
  DeletePemeriksaanHardwareAslab,
  StatusValidasiLaboranPemeriksaanHardwareAslab,
  TambahDataDetailPemeriksaanHardwareFtti1Aslab,
  EditDetailPemeriksaanHardwareFtti1Aslab,
  DeleteDetailPemeriksaanHardwareFtti1Aslab,
  TambahDataDetailPemeriksaanHardwareFtti2Aslab,
  EditDetailPemeriksaanHardwareFtti2Aslab,
  DeleteDetailPemeriksaanHardwareFtti2Aslab,
  TambahDataDetailPemeriksaanHardwareFtti3Aslab,
  EditDetailPemeriksaanHardwareFtti3Aslab,
  DeleteDetailPemeriksaanHardwareFtti3Aslab,
  TambahDataDetailPemeriksaanHardwareFtti4Aslab,
  EditDetailPemeriksaanHardwareFtti4Aslab,
  DeleteDetailPemeriksaanHardwareFtti4Aslab,
  TambahDataPemeriksaanSoftwareAslab,
  DetailPemeriksaanSoftwareFtti1Aslab,
  DetailPemeriksaanSoftwareFtti2Aslab,
  DetailPemeriksaanSoftwareFtti3Aslab,
  DetailPemeriksaanSoftwareFtti4Aslab,
  EditPemeriksaanSoftwareAslab,
  DeletePemeriksaanSoftwareAslab,
  StatusValidasiLaboranPemeriksaanSoftwareAslab,
  TambahDataDetailPemeriksaanSoftwareFtti1Aslab,
  EditDetailPemeriksaanSoftwareFtti1Aslab,
  DeleteDetailPemeriksaanSoftwareFtti1Aslab,
  TambahDataDetailPemeriksaanSoftwareFtti2Aslab,
  EditDetailPemeriksaanSoftwareFtti2Aslab,
  DeleteDetailPemeriksaanSoftwareFtti2Aslab,
  TambahDataDetailPemeriksaanSoftwareFtti3Aslab,
  EditDetailPemeriksaanSoftwareFtti3Aslab,
  DeleteDetailPemeriksaanSoftwareFtti3Aslab,
  TambahDataDetailPemeriksaanSoftwareFtti4Aslab,
  EditDetailPemeriksaanSoftwareFtti4Aslab,
  DeleteDetailPemeriksaanSoftwareFtti4Aslab,
  DeleteHistoryPemeriksaanHardwareAslab,
  HistoryPemeriksaanSoftwareAslab,
  DeleteHistoryPemeriksaanSoftwareAslab,
  TambahDataInventarisFtti1Aslab,
  EditInventarisFtti1Aslab,
  DeleteInventarisFtti1Aslab,
  TambahDataInventarisFtti2Aslab,
  EditInventarisFtti2Aslab,
  DeleteInventarisFtti2Aslab,
  TambahDataInventarisFtti3Aslab,
  EditInventarisFtti3Aslab,
  DeleteInventarisFtti3Aslab,
  TambahDataInventarisFtti4Aslab,
  EditInventarisFtti4Aslab,
  DeleteInventarisFtti4Aslab,
  TambahDataAkunKalab,
  EditDataAkunKalab,
  DeleteAkunKalab,
  DetailPemeriksaanHardwareFtti1Kalab,
  DetailPemeriksaanHardwareFtti2Kalab,
  DetailPemeriksaanHardwareFtti3Kalab,
  DetailPemeriksaanHardwareFtti4Kalab,
  StatusRevisiPemeriksaanHardwareKalab,
  StatusDiterimaPemeriksaanHardwareKalab,
  DetailPemeriksaanSoftwareFtti1Kalab,
  DetailPemeriksaanSoftwareFtti2Kalab,
  DetailPemeriksaanSoftwareFtti3Kalab,
  DetailPemeriksaanSoftwareFtti4Kalab,
  HistoryPemeriksaanHardwareKalab,
  StatusRevisiPemeriksaanSoftwareKalab,
  StatusDiterimaPemeriksaanSoftwareKalab,
  DeleteHistoryPemeriksaanHardwareKalab,
  HistoryPemeriksaanSoftwareKalab,
  DeleteHistoryPemeriksaanSoftwareKalab,
  TerimaPeminjamanAlatKalab,
  TolakPeminjamanAlatKalab,
  StatusDikembalikanPeminjamanAlatKalab,
  DeleteHistoryPeminjamanBarangKalab,
  TerimaPeminjamanRuangKalab,
  TolakPeminjamanRuangKalab,
  DaftarRuangDipinjamKalab,
  StatusSelesaiPeminjamanRuangKalab,
  HistoryPeminjamanRuangKalab,
  DeleteHistoryPeminjamanRuangKalab,
  PeminjamanUser,
  LiveChatLaboran,
  LiveChatAslab
} from "./pages";

import { loader as dahsboardLoader } from "./pages/DashboardAdminLayout";
import { loader as authLoader } from "./pages/AccessRights";
import { loader as aslabUserLoader } from "./pages/aslab/DashboarAslabLayout";
import { loader as pemeriksaanHardwareAslabLoader } from "./pages/aslab/PemeriksaanHardware";
import { loader as pemeriksaanSoftwareAslabLoader } from "./pages/aslab/PemeriksaanSoftware";
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
import {loader as peminjamanAlatLaboranLoader} from "./pages/laboran/PeminjamanAlat"
import {loader as peminjamanRuangLaboranLoader} from "./pages/laboran/PeminjamanRuang"
import {loader as peminjamanRuangDipinjamLaboranLoader} from "./pages/laboran/DaftarRuangDipinjam"
import {loader as peminjamanAlatDipinjamLaboranLoader} from "./pages/laboran/DaftarBarangDipinjam"
import {loader as historyPeminjamanAlatLaboranLoader} from "./pages/laboran/HistoryPeminjamanAlat"
import {loader as  historyPeminjamanRuangLaboranLoader} from "./pages/laboran/HistoryPeminjamanRuang"
import {loader as inventarisFtti1LaboranLoader} from "./pages/laboran/InventarisFTTI1"
import { loader as inventarisFtti2LaboranLoader } from "./pages/laboran/InventarisFTTI2";
import {loader as inventarisFtti3LaboranLoader} from "./pages/laboran/InventarisFTTI3"
import {loader as inventarisFtti4LaboranLoader} from "./pages/laboran/InventarisFTTI4"
import {loader as editInventarisFtti1LaboranLoader} from "./pages/laboran/EditInventarisFtti1"
import { loader as editInventarisFtti2LaboranLoader } from "./pages/laboran/EditInventarisFtti2";
import { loader as editInventarisFtti3LaboranLoader } from "./pages/laboran/EditInventarisFtti3";
import { loader as editInventarisFtti4LaboranLoader } from "./pages/laboran/EditInventarisFtti4";
import {loader as detailPemeriksaanHardwareFtti1AslabLoader} from "./pages/aslab/DetailPemeriksaanHardwareFtti1"
import { loader as detailPemeriksaanHardwareFtti2AslabLoader } from "./pages/aslab/DetailPemeriksaanHardwareFtti2";
import { loader as detailPemeriksaanHardwareFtti3AslabLoader } from "./pages/aslab/DetailPemeriksaanHardwareFtti3";
import { loader as detailPemeriksaanHardwareFtti4AslabLoader } from "./pages/aslab/DetailPemeriksaanHardwareFtti4";
import {loader as editPemeriksaanHardwareAslabLoader} from "./pages/aslab/EditPemeriksaanHardware"
import { loader as editDetailPemeriksaanHardwareFtti1AslabLoader } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti1";
import { loader as editDetailPemeriksaanHardwareFtti2AslabLoader } from "./pages/aslab/EditDetailPemerikssaanHardwareFtti2";
import { loader as editDetailPemeriksaanHardwareFtti3AslabLoader } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti3";
import { loader as editDetailPemeriksaanHardwareFtti4AslabLoader } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti4";
import {loader as detailPemeriksaanSoftwareFtti1AslabLoader} from "./pages/aslab/DetailPemeriksaanSoftwareFtti1"
import { loader as detailPemeriksaanSoftwareFtti2AslabLoader } from "./pages/aslab/DetailPemeriksaanSoftwareFtti2";
import { loader as detailPemeriksaanSoftwareFtti3AslabLoader } from "./pages/aslab/DetailPemeriksaanSoftwareFtti3";
import { loader as detailPemeriksaanSoftwareFtti4AslabLoader } from "./pages/aslab/DetailPemeriksaanSoftwareFtti4";
import { loader as editPemeriksaanSoftwareAslabLoader } from "./pages/aslab/EditPemeriksaanSoftware";
import { loader as editDetailPemeriksaanSoftwareFtti1AslabLoader } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti1";
import { loader as editDetailPemeriksaanSoftwareFtti2AslabLoader } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti2";
import { loader as editDetailPemeriksaanSoftwareFtti3AslabLoader } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti3";
import { loader as editDetailPemeriksaanSoftwareFtti4AslabLoader } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti4";
import {loader as historyPemeriksaanHardwareAslabLoader} from "./pages/aslab/HistoryPemeriksaanHardware"
import {loader as historyPemeriksaanSoftwareAslabLoader} from "./pages/aslab/HistoryPemeriksaanSoftware"
import {loader as inventarisFtti1AslabLoader} from "./pages/aslab/InventarisFTTI1"
import {loader as editInventarisFtti1AslabLoader} from "./pages/aslab/EditInventarisFtti1"
import { loader as inventarisFtti2AslabLoader } from "./pages/aslab/InventarisFTTI2";
import { loader as editInventarisFtti2AslabLoader } from "./pages/aslab/EditInventarisFtti2";
import { loader as inventarisFtti3AslabLoader } from "./pages/aslab/InventarisFTTI3";
import { loader as editInventarisFtti3AslabLoader } from "./pages/aslab/EditInventarisFtti3";
import { loader as inventarisFtti4AslabLoader } from "./pages/aslab/InventarisFTTI4";
import { loader as editInventarisFtti4AslabLoader } from "./pages/aslab/EditInventarisFtti4";
import {loader as pusatAkunKalabLoader} from "./pages/kalab/PusatAkun"
import {loader as editAkunKalabLoader} from "./pages/kalab/EditDataAkun"
import {loader as pemeriksaanHardwareKalabLoader} from "./pages/kalab/PemeriksaanHardware"
import {loader as detailPemeriksaanHardwareFtti1KalabLoader} from "./pages/kalab/DetailPemeriksaanHardwareFtti1"
import { loader as detailPemeriksaanHardwareFtti2KalabLoader } from "./pages/kalab/DetailPemeriksaanHardwareFtti2";
import { loader as detailPemeriksaanHardwareFtti3KalabLoader } from "./pages/kalab/DetailPemeriksaanHardwareFtti3";
import { loader as detailPemeriksaanHardwareFtti4KalabLoader } from "./pages/kalab/DetailPemeriksaanHardwareFtti4";
import { loader as pemeriksaanSoftwareKalabLoader } from "./pages/kalab/PemeriksaanSoftware";
import { loader as detailPemeriksaanSoftwareFtti1KalabLoader } from "./pages/kalab/DetailPemeriksaanSoftwareFtti1";
import { loader as detailPemeriksaanSoftwareFtti2KalabLoader } from "./pages/kalab/DetailPemeriksaanSoftwareFtti2";
import {loader as detailPemeriksaanSoftwareFtti3KalabLoader} from "./pages/kalab/DetailPemeriksaanSoftwareFtti3"
import { loader as detailPemeriksaanSoftwareFtti4KalabLoader } from "./pages/kalab/DetailPemeriksaanSoftwareFtti4";
import {loader as historyPemeriksaanHardwareKalabLoader} from "./pages/kalab/HistoryPemeriksaanHardware"
import { loader as historyPemeriksaanSoftwareKalabLoader } from "./pages/kalab/HistoryPemeriksaanSoftware";
import {loader as peminjamanAlatKalabLoader} from "./pages/kalab/PeminjamanAlat"
import {loader as daftarBarangDipinjamKalabLoader} from "./pages/kalab/DaftarBarangDipinjam"
import {loader as HistoryPeminjamanBarangKalabLoader} from "./pages/kalab/HistoryPeminjamanBarang"
import { loader as peminjamanRuangKalabLoader } from "./pages/kalab/PeminjamanRuang";
import {loader as daftarRuangDipinjamKalabLoader} from "./pages/kalab/DaftarRuangDipinjam"
import { loader as historyPeminjamanRuangKalabLoader } from "./pages/kalab/HistoryPeminjamanRuang";
import {loader as inventarisFtti1kalabLoader} from "./pages/kalab/InventarisFTTI1"
import { loader as inventarisFtti2kalabLoader } from "./pages/kalab/InventarisFTTI2";
import { loader as inventarisFtti3kalabLoader } from "./pages/kalab/InventarisFTTI3";
import { loader as inventarisFtti4kalabLoader } from "./pages/kalab/InventarisFTTI4";
import {loader as peminjamanUserLoader} from "./pages/user/PeminjamanUser"
import {loader as liveChatAdminLoader} from "./pages/laboran/LiveChat";
import { loader as liveChatAslabLoader } from "./pages/aslab/LiveChat";

//!!ACTION!!
import { action as loginAction } from "./pages/Login";
import {action as registerAction}from "./pages/Register"
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
import {action as TerimaPeminjamanAlatLaboranAction} from "./pages/laboran/TerimaPeminjamanAlat"
import {action as TolakPeminjamanAlatLaboranAction} from "./pages/laboran/TolakPeminjamanAlat"
import {action as TerimaPeminjamanRuangLaboranAction} from "./pages/laboran/TerimaPeminjamanRuang"
import {action as TolakPeminjamanRuangLaboranAction} from "./pages/laboran/TolakPeminjamanRuang"
import {action as tambahDataInventarisFtti1LaboranAction} from "./pages/laboran/TambahDataInventarisFtti1"
import {action as editInventarisFtti1LaboranAction} from "./pages/laboran/EditInventarisFtti1"
import {action as DeleteInventarisFtti1LaboranAction} from "./pages/laboran/DeleteInventarisFtti1"
import { action as tambahDataInventarisFtti2LaboranAction } from "./pages/laboran/TambahDataInventarisFtti2";
import { action as editInventarisFtti2LaboranAction } from "./pages/laboran/EditInventarisFtti2";
import { action as DeleteInventarisFtti2LaboranAction } from "./pages/laboran/DeleteInventarisFtti2";
import { action as tambahDataInventarisFtti3LaboranAction } from "./pages/laboran/TambahDataInventarisFtti3";
import { action as editInventarisFtti3LaboranAction } from "./pages/laboran/EditInventarisFtti3";
import { action as DeleteInventarisFtti3LaboranAction } from "./pages/laboran/DeleteInventarisFtti3";
import { action as tambahDataInventarisFtti4LaboranAction } from "./pages/laboran/TambahDataInventarisFtti4";
import { action as editInventarisFtti4LaboranAction } from "./pages/laboran/EditInventarisFtti4";
import { action as DeleteInventarisFtti4LaboranAction } from "./pages/laboran/DeleteInventarisFtti4";
import {action as statusDikembalikanPeminjamanAlatLaboranAction} from "./pages/laboran/StatusDikembalikanPeminjamanAlat"
import {action as statusSelesaiPeminjamanRuangLaboranAction} from "./pages/laboran/StatusSelesaiPeminjamanRuang"
import {action as deleteHistoryPeminjamanAlatLaboranAction} from "./pages/laboran/DeleteHistoryPeminjamanAlat"
import { action as deleteHistoryPeminjamanRuangLaboranAction } from "./pages/laboran/DeleteHistoryPeminjamanRuang";
import {action as tambahDataPemeriksaanhardwareAslabAction} from "./pages/aslab/TambahDataPemeriksaanHardware"
import {action as editPemeriksaanHardwareAslabAction} from "./pages/aslab/EditPemeriksaanHardware"
import {action as deletePemeriksaanHardwareAslabAction} from "./pages/aslab/DeletePemeriksaanHardware"
import {action as statusValidasiLaboranPemeriksaanHardwareAslabAcion} from "./pages/aslab/StatusValidasiLaboranPemeriksaanHardware"
import {action as tambahDataDetailPemeriksaanHardwareFtti1AslabAction} from "./pages/aslab/TambahDataDetailPemeriksaanHardwareFtti1"
import { action as editDetailPemeriksaanHardwareFtti1AslabAction } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti1";
import { action as deleteDetailPemeriksaanHardwareFtti1AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanHardwareFtti1";
import { action as tambahDataDetailPemeriksaanHardwareFtti2AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanHardwareFtti2";
import { action as editDetailPemeriksaanHardwareFtti2AslabAction } from "./pages/aslab/EditDetailPemerikssaanHardwareFtti2";
import { action as deleteDetailPemeriksaanHardwareFtti2AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanHardwareFtti2";
import { action as tambahDataDetailPemeriksaanHardwareFtti3AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanHardwareFtti3";
import { action as editDetailPemeriksaanHardwareFtti3AslabAction } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti3";
import { action as deleteDetailPemeriksaanHardwareFtti3AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanHardwareFtti3";
import { action as tambahDataDetailPemeriksaanHardwareFtti4AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanHardwareFtti4";
import { action as editDetailPemeriksaanHardwareFtti4AslabAction } from "./pages/aslab/EditDetailPemeriksaanHardwareFtti4";
import { action as deleteDetailPemeriksaanHardwareFtti4AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanHardwareFtti4";
import {action as tambahDataPemeriksaanSoftwareAslabAction} from "./pages/aslab/TambahDataPemeriksaanSoftware"
import { action as editPemeriksaanSoftwareAslabAction } from "./pages/aslab/EditPemeriksaanSoftware";
import { action as deletePemeriksaanSoftwareAslabAction } from "./pages/aslab/DeletePemeriksaanSoftware";
import { action as statusValidasiLaboranPemeriksaanSoftwareAslabAcion } from "./pages/aslab/StatusValidasiLaboranPemeriksaanSoftware";
import { action as tambahDataDetailPemeriksaanSoftwareFtti1AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanSoftwareFtti1";
import { action as editDetailPemeriksaanSoftwareFtti1AslabAction } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti1";
import { action as deleteDetailPemeriksaanSoftwareFtti1AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanSoftwareFtti1";
import { action as tambahDataDetailPemeriksaanSoftwareFtti2AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanSoftwareFtti2";
import { action as editDetailPemeriksaanSoftwareFtti2AslabAction } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti2";
import { action as deleteDetailPemeriksaanSoftwareFtti2AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanSoftwareFtti2";
import { action as tambahDataDetailPemeriksaanSoftwareFtti3AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanSoftwareFtti3";
import { action as editDetailPemeriksaanSoftwareFtti3AslabAction } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti3";
import { action as deleteDetailPemeriksaanSoftwareFtti3AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanSoftwareFtti3";
import { action as tambahDataDetailPemeriksaanSoftwareFtti4AslabAction } from "./pages/aslab/TambahDataDetailPemeriksaanSoftwareFtti4";
import { action as editDetailPemeriksaanSoftwareFtti4AslabAction } from "./pages/aslab/EditDetailPemeriksaanSoftwareFtti4";
import { action as deleteDetailPemeriksaanSoftwareFtti4AslabAction } from "./pages/aslab/DeleteDetailPemeriksaanSoftwareFtti4";
import {action as deleteHistoryPemeriksaanHardwareAslabAction} from "./pages/aslab/DeleteHistoryPemeriksaanHardware"
import { action as deleteHistoryPemeriksaanSoftwareAslabAction } from "./pages/aslab/DeleteHistoryPemeriksaanSoftware";
import {action as tambahDataInventarisFtti1AslabAction} from "./pages/aslab/TambahDataInventarisFtti1"
import {action as editInventarisFtti1AslabAction} from "./pages/aslab/EditInventarisFtti1"
import {action as deleteInventarisFtti1AslabAction} from "./pages/aslab/DeleteInventarisFtti1"
import { action as tambahDataInventarisFtti2AslabAction } from "./pages/aslab/TambahDataInventarisFtti2";
import { action as editInventarisFtti2AslabAction } from "./pages/aslab/EditInventarisFtti2";
import { action as deleteInventarisFtti2AslabAction } from "./pages/aslab/DeleteInventarisFtti2";
import { action as tambahDataInventarisFtti3AslabAction } from "./pages/aslab/TambahDataInventarisFtti3";
import { action as editInventarisFtti3AslabAction } from "./pages/aslab/EditInventarisFtti3";
import { action as deleteInventarisFtti3AslabAction } from "./pages/aslab/DeleteInventarisFtti3";
import { action as tambahDataInventarisFtti4AslabAction } from "./pages/aslab/TambahDataInventarisFtti4";
import { action as editInventarisFtti4AslabAction } from "./pages/aslab/EditInventarisFtti4";
import { action as deleteInventarisFtti4AslabAction } from "./pages/aslab/DeleteInventarisFtti4";
import {action as tambahDataAkunKalabAction} from "./pages/kalab/TambahDataAkun"
import {action as editAkunKalabAction} from "./pages/kalab/EditDataAkun"
import { action as deleteAkunKalabAction} from "./pages/kalab/DeleteAkun"
import {action as statusRevisiPemeriksaanHardwareKalabAction} from "./pages/kalab/StatusRevisiPemeriksaanHardware"
import { action as statusDiterimaPemeriksaanHardwareKalabAction } from "./pages/kalab/StatusDiterimaPemeriksaanHardware";
import { action as statusRevisiPemeriksaanSoftwareKalabAction } from "./pages/kalab/StatusRevisiPemeriksaanSoftware";
import { action as statusDiterimaPemeriksaanSoftwareKalabAction } from "./pages/kalab/StatusDiterimaPemeriksaanSoftware";
import {action as deleteHistoryPemeriksaanHardwareKalabAction} from "./pages/kalab/DeleteHistoryPemeriksaanHardware"
import { action as deleteHistoryPemeriksaanSoftwareKalabAction } from "./pages/kalab/DeleteHistoryPemeriksaanSoftware";
import {action as terimaPeminjamanAlatKalabAction} from "./pages/kalab/TerimaPeminjamanAlat"
import { action as tolakPeminjamanAlatKalabAction } from "./pages/kalab/TolakPeminjamanAlat";
import {action as statusDikembalikanPeminjamanAlatKalabAction} from "./pages/kalab/StatusDikembalikanPeminjamanAlat"
import {action as deleteHistoryPeminjamanBarangKalabAction} from "./pages/kalab/DeleteHistoryPeminjamanBarang"
import { action as terimaPeminjamanRuangKalabAction } from "./pages/kalab/TerimaPeminjamanRuang";
import { action as tolakPeminjamanRuangKalabAction } from "./pages/kalab/TolakPeminjamanRuang";
import {action as statusSelesaiPeminjamanRuangKalabAction} from "./pages/kalab/StatusSelesaiPeminjamanRuang"
import { action as deleteHistoryPeminjamanRuangKalabAction } from "./pages/kalab/DeleteHistoryPeminjamanRuang";
import {action as formPeminjamanAlatAction} from "./pages/user/FormPeminjamanAlat"
import { action as formPeminjamanRuangAction } from "./pages/user/FormPeminjamanRuang";

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
        path: "register",
        element: <Register />,
        action: registerAction,
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
            action: formPeminjamanAlatAction,
          },
          {
            path: "peminjaman-ruang",
            element: <FormPeminjamanRuang />,
            action: formPeminjamanRuangAction,
          },
          {
            path: "peminjaman-saya",
            element: <PeminjamanUser />,
            loader: peminjamanUserLoader,
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
                path: "livechat",
                element: <LiveChatLaboran />,
                exact: true,
                loader: liveChatAdminLoader,
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
                loader: peminjamanAlatLaboranLoader,
                exact: true,
              },
              {
                path: "peminjaman/alat/:idPeminjaman/terima",
                element: <TerimaPeminjamanAlat />,
                action: TerimaPeminjamanAlatLaboranAction,
              },
              {
                path: "peminjaman/alat/:idPeminjaman/tolak",
                element: <TolakPeminjamanAlat />,
                action: TolakPeminjamanAlatLaboranAction,
              },
              {
                path: "peminjaman/ruang",
                element: <PeminjamanRuang />,
                loader: peminjamanRuangLaboranLoader,
              },
              {
                path: "peminjaman/ruang/:idPeminjaman/terima",
                element: <TerimaPeminjamanRuang />,
                action: TerimaPeminjamanRuangLaboranAction,
              },
              {
                path: "peminjaman/ruang/:idPeminjaman/tolak",
                element: <TolakPeminjamanRuang />,
                action: TolakPeminjamanRuangLaboranAction,
              },
              {
                path: "peminjaman/daftar-alat-dipinjam",
                element: <DaftarBarangDipinjam />,
                loader: peminjamanAlatDipinjamLaboranLoader,
              },
              {
                path: "peminjaman/daftar-alat-dipinjam/:idPeminjaman/dikembalikan",
                element: <StatusDikembalikanPeminjamanAlat />,
                action: statusDikembalikanPeminjamanAlatLaboranAction,
              },
              {
                path: "peminjaman/daftar-ruang-dipinjam",
                element: <DaftarRuangDipinjam />,
                loader: peminjamanRuangDipinjamLaboranLoader,
              },
              {
                path: "peminjaman/daftar-ruang-dipinjam/:idPeminjaman/selesai",
                element: <StatusSelesaiPeminjamanRuang />,
                action: statusSelesaiPeminjamanRuangLaboranAction,
              },
              {
                path: "peminjaman/history-peminjaman-alat",
                element: <HistoryPeminjamanAlat />,
                loader: historyPeminjamanAlatLaboranLoader,
              },
              {
                path: "peminjaman/history-peminjaman-alat/:idPeminjaman/delete",
                element: <DeleteHistoryPeminjamanAlat />,
                action: deleteHistoryPeminjamanAlatLaboranAction,
              },
              {
                path: "peminjaman/history-peminjaman-ruang",
                element: <HistoryPeminjamanRuang />,
                loader: historyPeminjamanRuangLaboranLoader,
              },
              {
                path: "peminjaman/history-peminjaman-ruang/:idPeminjaman/delete",
                element: <DeleteHistoryPeminjamanRuang />,
                action: deleteHistoryPeminjamanRuangLaboranAction,
              },
              {
                path: "inventaris/FTTI1",
                element: <InventarisFTTI1 />,
                loader: inventarisFtti1LaboranLoader,
              },
              {
                path: "inventaris/FTTI1/tambah",
                element: <TambahDataInventarisFtti1 />,
                action: tambahDataInventarisFtti1LaboranAction,
              },
              {
                path: "inventaris/FTTI1/:idInventaris/edit",
                element: <EditInventarisFtti1 />,
                loader: editInventarisFtti1LaboranLoader,
                action: editInventarisFtti1LaboranAction,
              },
              {
                path: "inventaris/FTTI1/:idInventaris/delete",
                element: DeleteInventarisFtti1,
                action: DeleteInventarisFtti1LaboranAction,
              },
              {
                path: "inventaris/FTTI2",
                element: <InventarisFTTI2 />,
                loader: inventarisFtti2LaboranLoader,
              },
              {
                path: "inventaris/FTTI2/tambah",
                element: <TambahDataInventarisFtti2 />,
                action: tambahDataInventarisFtti2LaboranAction,
              },
              {
                path: "inventaris/FTTI2/:idInventaris/edit",
                element: <EditInventarisFtti2 />,
                loader: editInventarisFtti2LaboranLoader,
                action: editInventarisFtti2LaboranAction,
              },
              {
                path: "inventaris/FTTI2/:idInventaris/delete",
                element: <DeleteInventarisFtti2 />,
                action: DeleteInventarisFtti2LaboranAction,
              },
              {
                path: "inventaris/FTTI3",
                element: <InventarisFTTI3 />,
                loader: inventarisFtti3LaboranLoader,
              },
              {
                path: "inventaris/FTTI3/tambah",
                element: <TambahDataInventarisFtti3 />,
                action: tambahDataInventarisFtti3LaboranAction,
              },
              {
                path: "inventaris/FTTI3/:idInventaris/edit",
                element: <EditInventarisFtti3 />,
                loader: editInventarisFtti3LaboranLoader,
                action: editInventarisFtti3LaboranAction,
              },
              {
                path: "inventaris/FTTI3/:idInventaris/delete",
                element: <DeleteInventarisFtti3 />,
                action: DeleteInventarisFtti3LaboranAction,
              },
              {
                path: "inventaris/FTTI4",
                element: <InventarisFTTI4 />,
                loader: inventarisFtti4LaboranLoader,
              },
              {
                path: "inventaris/FTTI4/tambah",
                element: <TambahDataInventarisFtti4 />,
                action: tambahDataInventarisFtti4LaboranAction,
              },
              {
                path: "inventaris/FTTI4/:idInventaris/edit",
                element: <EditInventarisFtti4 />,
                loader: editInventarisFtti4LaboranLoader,
                action: editInventarisFtti4LaboranAction,
              },
              {
                path: "inventaris/FTTI4/:idInventaris/delete",
                element: <DeleteInventarisFtti4 />,
                action: DeleteInventarisFtti4LaboranAction,
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
            action: deleteDetailPemeriksaanSoftwareFtti4LaboranAction,
          },
          {
            path: "dashboard-kalab/:id",
            element: <DashboardKalabLayout />,
            loader: kalabUserLoader,
            children: [
              {
                index: true,
                element: <DashboardKalab />,
                // loader:dashboardKalabLoader
              },
              {
                path: "pemeriksaan/hardware",
                element: <PemeriksaanHardwareKalab />,
                loader: pemeriksaanHardwareKalabLoader,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/status-revisi",
                element: <StatusRevisiPemeriksaanHardwareKalab />,
                action: statusRevisiPemeriksaanHardwareKalabAction,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/diterima",
                element: <StatusDiterimaPemeriksaanHardwareKalab />,
                action: statusDiterimaPemeriksaanHardwareKalabAction,
              },
              {
                path: "pemeriksaan/software",
                element: <PemeriksaanSoftwareKalab />,
                loader: pemeriksaanSoftwareKalabLoader,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/status-revisi",
                element: <StatusRevisiPemeriksaanSoftwareKalab />,
                action: statusRevisiPemeriksaanSoftwareKalabAction,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/diterima",
                element: <StatusDiterimaPemeriksaanSoftwareKalab />,
                action: statusDiterimaPemeriksaanSoftwareKalabAction,
              },
              {
                path: "pemeriksaan/hardware/history",
                element: <HistoryPemeriksaanHardwareKalab />,
                loader: historyPemeriksaanHardwareKalabLoader,
              },
              {
                path: "pemeriksaan/hardware/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanHardwareKalab />,
                action: deleteHistoryPemeriksaanHardwareKalabAction,
              },
              {
                path: "pemeriksaan/software/history",
                element: <HistoryPemeriksaanSoftwareKalab />,
                loader: historyPemeriksaanSoftwareKalabLoader,
              },
              {
                path: "pemeriksaan/software/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanSoftwareKalab />,
                action: deleteHistoryPemeriksaanSoftwareKalabAction,
              },
              {
                path: "pusat-akun",
                element: <PusatAkun />,
                loader: pusatAkunKalabLoader,
              },
              {
                path: "pusat-akun/tambah",
                element: <TambahDataAkunKalab />,
                action: tambahDataAkunKalabAction,
              },
              {
                path: "pusat-akun/:idAkun/edit",
                element: <EditDataAkunKalab />,
                loader: editAkunKalabLoader,
                action: editAkunKalabAction,
              },
              {
                path: "pusat-akun/:idAkun/delete",
                element: <DeleteAkunKalab />,
                action: deleteAkunKalabAction,
              },
              {
                path: "peminjaman/alat",
                element: <PeminjamanAlatKalab />,
                loader: peminjamanAlatKalabLoader,
              },
              {
                path: "peminjaman/alat/:idPeminjaman/terima",
                element: <TerimaPeminjamanAlatKalab />,
                action: terimaPeminjamanAlatKalabAction,
              },
              {
                path: "peminjaman/alat/:idPeminjaman/tolak",
                element: <TolakPeminjamanAlatKalab />,
                action: tolakPeminjamanAlatKalabAction,
              },
              {
                path: "peminjaman/daftar-barang-dipinjam",
                element: <DaftarBarangDipinjamKalab />,
                loader: daftarBarangDipinjamKalabLoader,
              },
              {
                path: "peminjaman/daftar-barang-dipinjam/:idPeminjaman/dikembalikan",
                element: <StatusDikembalikanPeminjamanAlatKalab />,
                action: statusDikembalikanPeminjamanAlatKalabAction,
              },
              {
                path: "peminjaman/history-peminjaman-barang",
                element: <HistoryPeminjamanBarangKalab />,
                loader: HistoryPeminjamanBarangKalabLoader,
              },
              {
                path: "peminjaman/history-peminjaman-barang/:idPeminjaman/delete",
                element: <DeleteHistoryPeminjamanBarangKalab />,
                action: deleteHistoryPeminjamanBarangKalabAction,
              },
              {
                path: "peminjaman/ruang",
                element: <PeminjamanRuangKalab />,
                loader: peminjamanRuangKalabLoader,
              },
              {
                path: "peminjaman/ruang/:idPeminjaman/terima",
                element: <TerimaPeminjamanRuangKalab />,
                action: terimaPeminjamanRuangKalabAction,
              },
              {
                path: "peminjaman/ruang/:idPeminjaman/tolak",
                element: <TolakPeminjamanRuangKalab />,
                action: tolakPeminjamanRuangKalabAction,
              },
              {
                path: "peminjaman/daftar-ruang-dipinjam",
                element: <DaftarRuangDipinjamKalab />,
                loader: daftarRuangDipinjamKalabLoader,
              },
              {
                path: "peminjaman/daftar-ruang-dipinjam/:idPeminjaman/selesai",
                element: <StatusSelesaiPeminjamanRuangKalab />,
                action: statusSelesaiPeminjamanRuangKalabAction,
              },
              {
                path: "peminjaman/history-peminjaman-ruang",
                element: <HistoryPeminjamanRuangKalab />,
                loader: historyPeminjamanRuangKalabLoader,
              },
              {
                path: "peminjaman/history-peminjaman-ruang/:idPeminjaman/delete",
                element: <DeleteHistoryPeminjamanRuangKalab />,
                action: deleteHistoryPeminjamanRuangKalabAction,
              },
              {
                path: "inventaris/FTTI1",
                element: <InventarisFTTI1Kalab />,
                loader: inventarisFtti1kalabLoader,
              },
              {
                path: "inventaris/FTTI2",
                element: <InventarisFTTI2Kalab />,
                loader: inventarisFtti2kalabLoader,
              },
              {
                path: "inventaris/FTTI3",
                element: <InventarisFTTI3Kalab />,
                loader: inventarisFtti3kalabLoader,
              },
              {
                path: "inventaris/FTTI4",
                element: <InventarisFTTI4Kalab />,
                loader: inventarisFtti4kalabLoader,
              },
              {
                path: "inventaris/history",
                element: <HistoryInventarisKalab />,
              },
            ],
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanHardwareFtti1Kalab />,
            loader: detailPemeriksaanHardwareFtti1KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanHardwareFtti2Kalab />,
            loader: detailPemeriksaanHardwareFtti2KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanHardwareFtti3Kalab />,
            loader: detailPemeriksaanHardwareFtti3KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanHardwareFtti4Kalab />,
            loader: detailPemeriksaanHardwareFtti4KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanSoftwareFtti1Kalab />,
            loader: detailPemeriksaanSoftwareFtti1KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanSoftwareFtti2Kalab />,
            loader: detailPemeriksaanSoftwareFtti2KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanSoftwareFtti3Kalab />,
            loader: detailPemeriksaanSoftwareFtti3KalabLoader,
          },
          {
            path: "dashboard-kalab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanSoftwareFtti4Kalab />,
            loader: detailPemeriksaanSoftwareFtti4KalabLoader,
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
                path: "livechat",
                element: <LiveChatAslab />,
                exact: true,
                loader: liveChatAslabLoader
              },
              {
                path: "pemeriksaan/hardware",
                element: <PemeriksaanHardwareAslab />,
                loader: pemeriksaanHardwareAslabLoader,
              },
              {
                path: "pemeriksaan/hardware/tambah",
                element: <TambahDataPemeriksaanhardwareAslab />,
                action: tambahDataPemeriksaanhardwareAslabAction,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/edit",
                element: <EditPemeriksaanHardwareAslab />,
                loader: editPemeriksaanHardwareAslabLoader,
                action: editPemeriksaanHardwareAslabAction,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/delete",
                element: <DeletePemeriksaanHardwareAslab />,
                action: deletePemeriksaanHardwareAslabAction,
              },
              {
                path: "pemeriksaan/hardware/:idPemeriksaan/validasi-laboran",
                element: <StatusValidasiLaboranPemeriksaanHardwareAslab />,
                action: statusValidasiLaboranPemeriksaanHardwareAslabAcion,
              },
              {
                path: "pemeriksaan/software",
                element: <PemeriksaanSoftwareAslab />,
                loader: pemeriksaanSoftwareAslabLoader,
              },
              {
                path: "pemeriksaan/software/tambah",
                element: <TambahDataPemeriksaanSoftwareAslab />,
                action: tambahDataPemeriksaanSoftwareAslabAction,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/edit",
                element: <EditPemeriksaanSoftwareAslab />,
                loader: editPemeriksaanSoftwareAslabLoader,
                action: editPemeriksaanSoftwareAslabAction,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/delete",
                element: <DeletePemeriksaanSoftwareAslab />,
                action: deletePemeriksaanSoftwareAslabAction,
              },
              {
                path: "pemeriksaan/software/:idPemeriksaan/validasi-laboran",
                element: <StatusValidasiLaboranPemeriksaanSoftwareAslab />,
                action: statusValidasiLaboranPemeriksaanSoftwareAslabAcion,
              },
              {
                path: "pemeriksaan/hardware/history",
                element: <HistoryPemeriksaanHardwareAslab />,
                loader: historyPemeriksaanHardwareAslabLoader,
              },
              {
                path: "pemeriksaan/hardware/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanHardwareAslab />,
                action: deleteHistoryPemeriksaanHardwareAslabAction,
              },
              {
                path: "pemeriksaan/software/history",
                element: <HistoryPemeriksaanSoftwareAslab />,
                loader: historyPemeriksaanSoftwareAslabLoader,
              },
              {
                path: "pemeriksaan/software/history/:idPemeriksaan/delete",
                element: <DeleteHistoryPemeriksaanSoftwareAslab />,
                action: deleteHistoryPemeriksaanSoftwareAslabAction,
              },
              {
                path: "inventaris/FTTI1",
                element: <InventarisFTTI1Aslab />,
                loader: inventarisFtti1AslabLoader,
              },
              {
                path: "inventaris/FTTI1/tambah",
                element: <TambahDataInventarisFtti1Aslab />,
                action: tambahDataInventarisFtti1AslabAction,
              },
              {
                path: "inventaris/FTTI1/:idInventaris/edit",
                element: <EditInventarisFtti1Aslab />,
                loader: editInventarisFtti1AslabLoader,
                action: editInventarisFtti1AslabAction,
              },
              {
                path: "inventaris/FTTI1/:idInventaris/delete",
                element: <DeleteInventarisFtti1Aslab />,
                action: deleteInventarisFtti1AslabAction,
              },
              {
                path: "inventaris/FTTI2",
                element: <InventarisFTTI2Aslab />,
                loader: inventarisFtti2AslabLoader,
              },
              {
                path: "inventaris/FTTI2/tambah",
                element: <TambahDataInventarisFtti2Aslab />,
                action: tambahDataInventarisFtti2AslabAction,
              },
              {
                path: "inventaris/FTTI2/:idInventaris/edit",
                element: <EditInventarisFtti2Aslab />,
                loader: editInventarisFtti2AslabLoader,
                action: editInventarisFtti2AslabAction,
              },
              {
                path: "inventaris/FTTI2/:idInventaris/delete",
                element: <DeleteInventarisFtti2Aslab />,
                action: deleteInventarisFtti2AslabAction,
              },
              {
                path: "inventaris/FTTI3",
                element: <InventarisFTTI3Aslab />,
                loader: inventarisFtti3AslabLoader,
              },
              {
                path: "inventaris/FTTI3/tambah",
                element: <TambahDataInventarisFtti3Aslab />,
                action: tambahDataInventarisFtti3AslabAction,
              },
              {
                path: "inventaris/FTTI3/:idInventaris/edit",
                element: <EditInventarisFtti3Aslab />,
                loader: editInventarisFtti3AslabLoader,
                action: editInventarisFtti3AslabAction,
              },
              {
                path: "inventaris/FTTI3/:idInventaris/delete",
                element: <DeleteInventarisFtti3Aslab />,
                action: deleteInventarisFtti3AslabAction,
              },
              {
                path: "inventaris/FTTI4",
                element: <InventarisFTTI4Aslab />,
                loader: inventarisFtti4AslabLoader,
              },
              {
                path: "inventaris/FTTI4/tambah",
                element: <TambahDataInventarisFtti4Aslab />,
                action: tambahDataInventarisFtti4AslabAction,
              },
              {
                path: "inventaris/FTTI4/:idInventaris/edit",
                element: <EditInventarisFtti4Aslab />,
                loader: editInventarisFtti4AslabLoader,
                action: editInventarisFtti4AslabAction,
              },
              {
                path: "inventaris/FTTI4/:idInventaris/delete",
                element: <DeleteInventarisFtti4Aslab />,
                action: deleteInventarisFtti4AslabAction,
              },
              {
                path: "inventaris/history",
                element: <HistoryInventarisAslab />,
              },
            ],
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanHardwareFtti1Aslab />,
            loader: detailPemeriksaanHardwareFtti1AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti1Aslab />,
            action: tambahDataDetailPemeriksaanHardwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti1Aslab />,
            loader: editDetailPemeriksaanHardwareFtti1AslabLoader,
            action: editDetailPemeriksaanHardwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti1/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti1Aslab />,
            action: deleteDetailPemeriksaanHardwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanHardwareFtti2Aslab />,
            loader: detailPemeriksaanHardwareFtti2AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti2Aslab />,
            action: tambahDataDetailPemeriksaanHardwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti2Aslab />,
            loader: editDetailPemeriksaanHardwareFtti2AslabLoader,
            action: editDetailPemeriksaanHardwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti2/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti2Aslab />,
            action: deleteDetailPemeriksaanHardwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanHardwareFtti3Aslab />,
            loader: detailPemeriksaanHardwareFtti3AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti3Aslab />,
            action: tambahDataDetailPemeriksaanHardwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti3Aslab />,
            loader: editDetailPemeriksaanHardwareFtti3AslabLoader,
            action: editDetailPemeriksaanHardwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti3/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti3Aslab />,
            action: deleteDetailPemeriksaanHardwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanHardwareFtti4Aslab />,
            loader: detailPemeriksaanHardwareFtti4AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/tambah",
            element: <TambahDataDetailPemeriksaanHardwareFtti4Aslab />,
            action: tambahDataDetailPemeriksaanHardwareFtti4AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/:idDetail/edit",
            element: <EditDetailPemeriksaanHardwareFtti4Aslab />,
            loader: editDetailPemeriksaanHardwareFtti4AslabLoader,
            action: editDetailPemeriksaanHardwareFtti4AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/hardware/:idPemeriksaan/detail-ftti4/:idDetail/delete",
            element: <DeleteDetailPemeriksaanHardwareFtti4Aslab />,
            action: deleteDetailPemeriksaanHardwareFtti4AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1",
            element: <DetailPemeriksaanSoftwareFtti1Aslab />,
            loader: detailPemeriksaanSoftwareFtti1AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti1Aslab />,
            action: tambahDataDetailPemeriksaanSoftwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti1Aslab />,
            loader: editDetailPemeriksaanSoftwareFtti1AslabLoader,
            action: editDetailPemeriksaanSoftwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti1/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti1Aslab />,
            action: deleteDetailPemeriksaanSoftwareFtti1AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2",
            element: <DetailPemeriksaanSoftwareFtti2Aslab />,
            loader: detailPemeriksaanSoftwareFtti2AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti2Aslab />,
            action: tambahDataDetailPemeriksaanSoftwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti2Aslab />,
            loader: editDetailPemeriksaanSoftwareFtti2AslabLoader,
            action: editDetailPemeriksaanSoftwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti2/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti2Aslab />,
            action: deleteDetailPemeriksaanSoftwareFtti2AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3",
            element: <DetailPemeriksaanSoftwareFtti3Aslab />,
            loader: detailPemeriksaanSoftwareFtti3AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti3Aslab />,
            action: tambahDataDetailPemeriksaanSoftwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti3Aslab />,
            loader: editDetailPemeriksaanSoftwareFtti3AslabLoader,
            action: editDetailPemeriksaanSoftwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti3/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti3Aslab />,
            action: deleteDetailPemeriksaanSoftwareFtti3AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4",
            element: <DetailPemeriksaanSoftwareFtti4Aslab />,
            loader: detailPemeriksaanSoftwareFtti4AslabLoader,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/tambah",
            element: <TambahDataDetailPemeriksaanSoftwareFtti4Aslab />,
            action: tambahDataDetailPemeriksaanSoftwareFtti4AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/:idDetail/edit",
            element: <EditDetailPemeriksaanSoftwareFtti4Aslab />,
            loader: editDetailPemeriksaanSoftwareFtti4AslabLoader,
            action: editDetailPemeriksaanSoftwareFtti4AslabAction,
          },
          {
            path: "dashboard-aslab/:id/pemeriksaan/software/:idPemeriksaan/detail-ftti4/:idDetail/delete",
            element: <DeleteDetailPemeriksaanSoftwareFtti4Aslab />,
            action: deleteDetailPemeriksaanSoftwareFtti4AslabAction,
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
