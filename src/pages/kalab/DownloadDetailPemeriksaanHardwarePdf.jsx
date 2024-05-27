/* eslint-disable react/prop-types */
import { forwardRef, useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";

const DownloadDetailPemeriksaanHardwarePdf = forwardRef(
  ( {idPemeriksaan} , ref) => {
    const [detailPemeriksaanData, setDetailPemeriksaanData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      if (idPemeriksaan) {
        const fetchDetailData = async () => {
          try {
            const response = await customFetch.get(
              `v1/pemeriksaan/hardware/detail/${idPemeriksaan}`,
              { withCredentials: true }
            );
            setUserData(response.data.data.userCreator[0]);
            setDetailPemeriksaanData(response.data.data.detailPemeriksaan);
          } catch (error) {
            console.error("Error fetching detail data:", error);
          }
        };

        fetchDetailData();
      }
    }, [idPemeriksaan]);
    console.log(userData)
    return (
      <div ref={ref}>
        <div className="px-5 py-5">
          <div id="head" className="flex flex-col justify-center text-center">
            <h1 className="font-bold text-lg text-black">
              Maintenance Hardware Laboratorium Teknik Informatika
            </h1>
            <h1 className="font-bold text-lg text-black">
              Fakultas Teknologi Industri dan Informatika{" "}
            </h1>
          </div>
          {userData && (
            <div id="keterangan">
              <table>
                <tbody>
                  <tr>
                    <td>Tanggal</td>
                    <td>: {userData.tanggal}</td>
                  </tr>
                  <tr>
                    <td>Asisten Laboratorium</td>
                    <td>: {userData.staff_lab || ""} </td>
                  </tr>
                  <tr>
                    <td>Laboratorium</td>
                    <td>: {userData.laboratorium || ""} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {detailPemeriksaanData && (
            <div id="table" className="py-10">
              <table className="table-auto xl:overflow-auto-x  border border-collapse">
                <thead className="border border-collapse bg-gray-200">
                  <tr>
                    <th className="border py-2 px-1 text-sm">No. PC</th>
                    <th className="border py-2 px-1 text-sm">No. Aset</th>
                    <th className="border py-2 px-1 text-sm">Monitor</th>
                    <th className="border py-2 px-1 text-sm">Keyboard</th>
                    <th className="border py-2 px-1 text-sm">Mouse</th>
                    <th className="border py-2 px-1 text-sm">CPU</th>
                    <th className="border py-2 px-1 text-sm">RAM</th>
                    <th className="border py-2 px-1 text-sm">Motherboard</th>
                    <th className="border py-2 px-1 text-sm">VGA</th>
                    <th className="border py-2 px-1 text-sm">HDD</th>
                    <th className="border py-2 px-1 text-sm">SSD</th>
                    <th className="border py-2 px-1 text-sm">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {detailPemeriksaanData.map((val) => (
                    <tr key={val.id || ""}>
                      <td className="border px-1 py-2 text-md font-bold">
                        {val.no_pc || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.no_aset || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.monitor || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.keyboard || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.mouse || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.cpu || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.ram || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.motherboard || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.vga || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.hdd || ""}
                      </td>
                      <td className="border px-1 py-2 text-xs">
                        {val.ssd || ""}
                      </td>
                      <td className="border px-2 text-xs">
                        {val.keterangan || ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
);

DownloadDetailPemeriksaanHardwarePdf.displayName =
  "DownloadDetailPemeriksaanHardwarePdf";

export default DownloadDetailPemeriksaanHardwarePdf;
