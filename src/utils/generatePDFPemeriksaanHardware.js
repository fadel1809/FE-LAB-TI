// utils/generatePDF.js
import jsPDF from "jspdf";
import "jspdf-autotable";
import customFetch from "./customFetch";
const dataResponse = async(idDetail) => {
  const response = await customFetch.get(
    `v1/pemeriksaan/hardware/detail/${idDetail}`,
    {
      withCredentials: true,
    }
  );
  return response.data.data;
}
const generatePDF = async (data) => {
  const doc = new jsPDF({orientation:"landscape"});
  const idDetailPemeriksaan = data.idDetailPemeriksaan;
  const laboratorium = data.laboratorium;
  const dataDetail = await dataResponse(idDetailPemeriksaan)
  const dataDetailPemeriksaan = dataDetail.detailPemeriksaan;
  const dataUser = dataDetail.userCreator
  // Judul
  doc.setFontSize(16);
  doc.setFont("Helvetica", "bold");
  doc.text("Maintenance Hardware Laboratorium Teknik Informatika", 10, 10);
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  // Keterangan
  doc.text(`Tanggal: ${dataUser[0].tanggal}`, 10, 20);
  doc.text(`Asisten Laboratorium: ${dataUser[0].staff_lab}`, 10, 30);
  doc.text(`Laboratorium: ${dataUser[0].laboratorium}`, 10, 40);

  // Tabel
  let tableColumn = [];
  let tableRows = [];
  if(laboratorium == "FTTI1"){
    tableColumn = [
      "No. PC",
      "No. Aset",
      "Monitor",
      "Keyboard",
      "Mouse",
      "CPU",
      "RAM",
      "Motherboard",
      "VGA",
      "HDD",
      "SSD",
      "Keterangan"
    ]
    tableRows = dataDetailPemeriksaan.map((item) => [
      item.no_pc,
      item.no_aset,
      item.monitor,
      item.keyboard,
      item.mouse,
      item.cpu,
      item.ram,
      item.motherboard,
      item.vga,
      item.hdd,
      item.ssd,
      item.keterangan,
    ]);
  }else if(laboratorium=="FTTI2"){
  tableColumn = [
    "No. PC",
    "No. Aset",
    "Monitor",
    "Keyboard",
    "Mouse",
    "CPU",
    "RAM",
    "Motherboard",
    "VGA",
    "HDD",
    "SSD",
    "Kabel LAN",
    "Keterangan",
  ];
  tableRows = dataDetailPemeriksaan.map((item) => [
    item.no_pc,
    item.no_aset,
    item.monitor,
    item.keyboard,
    item.mouse,
    item.cpu,
    item.ram,
    item.motherboard,
    item.vga,
    item.hdd,
    item.ssd,
    item.kabel_lan,
    item.keterangan,
  ]);
  }else if(laboratorium=="FTTI3"){
    tableColumn = [
      "No. PC",
      "No. Aset",
      "Monitor",
      "Keyboard",
      "Mouse",
      "CPU",
      "RAM",
      "Motherboard",
      "VGA",
      "HDD",
      "SSD",
      "Keterangan",
    ];
    tableRows = dataDetailPemeriksaan.map((item) => [
      item.no_pc,
      item.no_aset,
      item.monitor,
      item.keyboard,
      item.mouse,
      item.cpu,
      item.ram,
      item.motherboard,
      item.vga,
      item.hdd,
      item.ssd,
      item.keterangan,
    ]);
  }else if(laboratorium=="FTTI4"){
    tableColumn = [
      "No. PC",
      "No. Aset",
      "Monitor",
      "Keyboard",
      "Mouse",
      "CPU",
      "RAM",
      "Motherboard",
      "VGA",
      "HDD",
      "SSD",
      "Keterangan",
    ];
    tableRows = dataDetailPemeriksaan.map((item) => [
      item.no_pc,
      item.no_aset,
      item.monitor,
      item.keyboard,
      item.mouse,
      item.cpu,
      item.ram,
      item.motherboard,
      item.vga,
      item.hdd,
      item.ssd,
      item.keterangan,
    ]);
  }
    
  doc.setFontSize(8);
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 50, // posisi tabel dari atas
    theme: "plain", // Tabel tanpa styling background belang
    pageBreak:"auto",
    rowPageBreak: "avoid",
    styles: {
      lineColor: [0, 0, 0], // Warna border hitam
      lineWidth: 0.5, // Lebar border
      textColor: [0, 0, 0], // Warna teks hitam
      fontSize: 8,
      halign: "center"
    },
    headStyles: {
      fillColor: [255, 255, 255], // Background putih
      textColor: [0, 0, 0], // Warna teks header hitam
      lineWidth: 0.5,
    },
    alternateRowStyles: {
      fillColor: [255, 255, 255], // Background putih tanpa warna berbeda di setiap baris
    },
    tableLineColor: [0, 0, 0], // Border hitam
    tableLineWidth: 0.5, // Lebar border tabel
  });

  // Download PDF
  doc.save(`pemeriksaan-hardware-${laboratorium.toLowerCase()}.pdf`);
};

export default generatePDF;
