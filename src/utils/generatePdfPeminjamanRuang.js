// utils/generatePDF.js
import jsPDF from "jspdf";
import "jspdf-autotable";
import customFetch from "./customFetch";
import moment from "moment-timezone";
const dataResponse = async() => {
    const response = await customFetch.get(
        "v1/peminjaman/ruang/history",
        {
            withCredentials: true,
        }
    );
    return response.data.data;
}
const generatePDF = async () => {
    const doc = new jsPDF({orientation:"landscape"});

    const dataHistory = await dataResponse()
    // Judul
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text("Historical Data Peminjaman Ruang Laboratorium Teknik Informatika", 10, 10);
    doc.setFontSize(10);
    doc.setFont("Helvetica", "normal");
    // Keterangan

    // Tabel
    let tableColumn = [
        "ID Peminjaman",
        "Nama",
        "NIDN/NIM",
        "Ruang",
        "Keperluan",
        "Tanggal Peminjaman",
        "Jam Mulai",
        "Jam Selesai",
        "Catatan",
        "Status"
    ];
    let tableRows = [];
    tableRows = dataHistory.map((item) => [
        item.id,
        item.nama,
        item.nim,
        item.ruang,
        item.keperluan,
        moment
            .utc(item.tanggal_peminjaman)
            .tz("Asia/Jakarta")
            .format("DD/MM/YYYY"),
        item.jam_mulai,
        item.jam_selesai,
        item.catatan,
        item.status
    ])
    doc.setFontSize(8);
    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 30,
        startX:10,// posisi tabel dari atas
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
    doc.save(`peminjaman-ruang-${moment().format("DD-MM-YYYY")}.pdf`);
};

export default generatePDF;
