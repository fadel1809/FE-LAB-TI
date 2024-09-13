import jsPDF from "jspdf";
import "jspdf-autotable";
import customFetch from "./customFetch";

const dataResponse = async (idDetail) => {
  try {
    const response = await customFetch.get(
      `v1/pemeriksaan/software/detail/${idDetail}`,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

const generatePDF = async (data) => {
  try {
    if (!data || !data.idDetailPemeriksaan || !data.laboratorium) {
      throw new Error("Invalid data provided");
    }

    const doc = new jsPDF({ orientation: "landscape" });
    const idDetailPemeriksaan = data.idDetailPemeriksaan;
    const laboratorium = data.laboratorium;
    const dataDetail = await dataResponse(idDetailPemeriksaan);

    if (
      !dataDetail ||
      !dataDetail.detailPemeriksaan ||
      !dataDetail.userCreator
    ) {
      throw new Error("Incomplete data received from API");
    }

    const dataDetailPemeriksaan = dataDetail.detailPemeriksaan;
    const dataUser = dataDetail.userCreator;

    if (dataUser.length === 0 || dataDetailPemeriksaan.length === 0) {
      throw new Error("No data available to generate PDF");
    }

    // Judul
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text("Maintenance Software Laboratorium Teknik Informatika", 10, 10);
    doc.setFontSize(10);
    doc.setFont("Helvetica", "normal");

    // Keterangan
    doc.text(`Tanggal: ${dataUser[0].tanggal}`, 10, 20);
    doc.text(`Asisten Laboratorium: ${dataUser[0].staff_lab}`, 10, 30);
    doc.text(`Laboratorium: ${dataUser[0].laboratorium}`, 10, 40);

    // Tabel
    let tableColumn = [];
    let tableRows = [];
    if (laboratorium === "FTTI1") {
      tableColumn = [
        "No. PC",
        "OS",
        "Jaringan",
        "Chrome",
        "Dev C++",
        "XAMPP",
        "Netbeans",
        "Office",
        "Matlab",
        "Adobe Reader",
        "Python",
        "Visual Studio Code",
        "Sublime Text",
        "Pycharm",
        "CPU Simulator",
        "Veyon",
      ];
      tableRows = dataDetailPemeriksaan.map((item) => [
        item.no_pc,
        item.OS,
        item.jaringan,
        item.chrome,
        item.devcpp,
        item.xampp,
        item.netbeans,
        item.office,
        item.matlab,
        item.adobe_reader,
        item.python,
        item.visual_studio,
        item.sublime,
        item.pycharm,
        item.cpu_simulator,
        item.veyon,
      ]);
    } else if (laboratorium === "FTTI2") {
      tableColumn = [
        "No. PC",
        "OS",
        "Jaringan",
        "Chrome",
        "Dev C++",
        "XAMPP",
        "Netbeans",
        "Office",
        "Matlab",
        "Adobe Reader",
        "Visual Studio Code",
        "Balsamic",
        "Pycharm",
        "CPU Simulator",
        "Photoshop",
        "Python",
        "Veyon",
        "Composer",
        "Arduino IDE",
      ];
      tableRows = dataDetailPemeriksaan.map((item) => [
        item.no_pc,
        item.OS,
        item.jaringan,
        item.chrome,
        item.devcpp,
        item.xampp,
        item.netbeans,
        item.office,
        item.matlab,
        item.adobe_reader,
        item.visual_studio,
        item.balsamic,
        item.pycharm,
        item.cpu_simulator,
        item.photoshop,
        item.python,
        item.veyon,
        item.composer,
        item.arduino_ide,
      ]);
    } else if (laboratorium === "FTTI3") {
      tableColumn = [
        "No. PC",
        "OS",
        "Jaringan",
        "Chrome",
        "Dev C++",
        "XAMPP",
        "Netbeans",
        "Office",
        "Matlab",
        "Adobe Reader",
        "Visual Studio Code",
        "Pycharm",
        "Astah",
        "Start UML",
        "Visio",
      ];
      tableRows = dataDetailPemeriksaan.map((item) => [
        item.no_pc,
        item.OS,
        item.jaringan,
        item.chrome,
        item.devcpp,
        item.xampp,
        item.netbeans,
        item.office,
        item.matlab,
        item.adobe_reader,
        item.visual_studio,
        item.pycharm,
        item.astah,
        item.start_uml,
        item.visio,
      ]);
    } else if (laboratorium === "FTTI4") {
      tableColumn = [
        "No. PC",
        "OS",
        "Jaringan",
        "Chrome",
        "Adobe Reader",
        "Autocad",
        "Autodesk",
        "Compas",
        "Solidwork",
        "Team Viewer",
        "Visual Studio Code",
        "Office",
      ];
      tableRows = dataDetailPemeriksaan.map((item) => [
        item.no_pc,
        item.OS,
        item.jaringan,
        item.chrome,
        item.adobe_reader,
        item.autocad,
        item.autodesk,
        item.compas,
        item.solidwork,
        item.teamviewer,
        item.visual_studio,
        item.office,
      ]);
    }

    doc.setFontSize(6);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 50, // posisi tabel dari atas
      theme: "plain", // Tabel tanpa styling background belang
      pageBreak: "auto",
      rowPageBreak: "avoid",
      styles: {
        lineColor: [0, 0, 0], // Warna border hitam
        lineWidth: 0.5, // Lebar border
        textColor: [0, 0, 0], // Warna teks hitam
        fontSize: 6,
        halign: "center",
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
    doc.save(`pemeriksaan-software-${laboratorium.toLowerCase()}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

export default generatePDF;
