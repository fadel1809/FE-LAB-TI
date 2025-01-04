import NavbarUser from "../../components/NavbarUser";
import Wrapper from "../../assets/wrappers/formPeminjaman";
import { BsFillSendPlusFill } from "react-icons/bs";
import { redirect,Form } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import { useEffect } from "react";
import Chat from "../../components/Chat";
import { MdOutlineAttachFile } from "react-icons/md";
import moment from "moment-timezone";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`v1/peminjaman/ruang/${params.id}`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Peminjaman Berhasil Dibuat");
    return redirect(`/user/${params.id}/peminjaman-saya`);
  } catch (error) {
    console.log(error);
    toast.success("Peminjaman Gagal Dibuat");
  }
};
const FormPeminjamanRuang = () => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
      const fetchMessage = async () => {
        const result = await customFetch("v1/user/current-user", {
          withCredentials: true,
        });
        const { data } = result.data;
        const { user } = data;
        setUserInfo(user);
      };
      fetchMessage();
    }, []);
     // const today = new Date().toISOString().split("T")[0];
const date = new Date();
  const today = moment
    .utc(date)
    .tz("Asia/Jakarta")
    .format("YYYY-MM-DD");


   const [jamMulai, setJamMulai] = useState("");
   const [jamSelesai, setJamSelesai] = useState("");

   const handleJamMulaiChange = (event) => {
      const selectedTime = event.target.value;
      setJamMulai(selectedTime);

      // Calculate one hour after the selected time for jam_mulai
      const oneHourAfter = new Date("2000-01-01T" + selectedTime);
      oneHourAfter.setHours(oneHourAfter.getHours() + 1);

      // Format the one hour after time as HH:MM
      const formattedOneHourAfter = oneHourAfter.toTimeString().slice(0, 5);

      // Set the min time for jam_selesai to be one hour after jam_mulai
      setJamSelesai(formattedOneHourAfter);
  };
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  const handleRemoveFile = () => {
    setFileName(""); // Reset file name
    document.getElementById("upload").value = ""; // Clear input file
  };
  return (
    <Wrapper>
      <div className="bg-gray-50">
        <NavbarUser username={userInfo.username || userInfo.id_user} />
        <Chat
          currentId={userInfo.id}
          role={userInfo.role}
          username={userInfo.username}
        />
        <div className=" bg-white px-7 py-5 rounded-md shadow shadow-2xl max-w-lg mx-auto mb-5">
          <BackButton />
          <h2 className="text-xl text-center mb-4 text-biru-uhamka font-bold">
            Form Peminjaman Ruang Laboratorium
          </h2>
          <div className="bg-blue-200 px-6 py-6 my-6 rounded-md text-gray-700 ">
            <p>
              Untuk Peminjaman Barang, diskusikan terlebih dahulu pada kolom
              livechat dengan laboran/aslab sebelum melakukan peminjaman.
            </p>
          </div>

          <Form method="post" enctype="multipart/form-data">
            <div className="mb-4">
              <label
                  htmlFor="nim"
                  className="block mb-1 text-gray-700 font-semibold"
              >
                NIDN/NIM
              </label>
              <input
                  type="text"
                  id="nim"
                  placeholder="NIDN/NIM"
                  name="nim"
                  className="read-only:bg-gray-100 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                  readOnly={true}
                  value={userInfo.id_user}
              />
            </div>
            <div className="mb-4">
              <label
                  htmlFor="ruang"
                  className="block mb-1 text-gray-700 font-semibold"
              >
                Ruang
              </label>
              <select
                  id="ruang"
                  name="ruang"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
              >
                <option value="FTTI1">FTTI1</option>
                <option value="FTTI2">FTTI2</option>
                <option value="FTTI3">FTTI3</option>
                <option value="FTTI4">FTTI4</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                  htmlFor="keperluan"
                  className="block mb-1 text-gray-700 font-semibold"
              >
                Keperluan
              </label>
              <textarea
                  id="keperluan"
                  name="keperluan"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                  cols="20"
                  rows="2"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                  htmlFor="tanggal"
                  className="block mb-1 text-gray-700 font-semibold"
              >
                Tanggal Peminjaman
              </label>
              <input
                  type="date"
                  id="tanggal"
                  name="tanggal_peminjaman"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-biru-uhamka"
                  required
                  min={today}
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                  htmlFor="waktu"
                  className="block mb-1 text-gray-700 font-semibold"
              >
                Waktu Peminjaman
              </label>
              <div className="flex">
                <input
                    type="time"
                    id="waktu"
                    name="jam_mulai"
                    className="w-full mr-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    value={jamMulai}
                    onChange={handleJamMulaiChange}
                />
                <input
                    type="time"
                    id="waktu"
                    name="jam_selesai"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                    value={jamSelesai}
                    min={jamMulai}
                    onChange={(event) => setJamSelesai(event.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                  htmlFor="upload"
                  className="block mb-2 font-semibold text-gray-700"
              >
                Upload file pendukung (Kartu Tanda Mahasiswa) (.pdf)
              </label>
              <div
                  className="relative flex items-center border border-gray-300 rounded-lg p-2 hover:border-blue-500 transition duration-200 focus-within:border-blue-500">
                {/* Ikon lampiran */}
                <MdOutlineAttachFile className="text-gray-500 mx-2"/>

                {/* Placeholder untuk nama file */}
                <span
                    className={`flex-1 px-2 ${
                        fileName ? "text-gray-700" : "text-gray-400"
                    }`}
                >
          {fileName || "Pilih file..."}
        </span>

                {/* Input file */}
                <input
                    type="file"
                    id="upload"
                    name="filename"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                />

                {/* Button Pilih File */}
                <span
                    className="px-4 py-2 bg-biru-uhamka text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-200">
          Pilih File
        </span>
              </div>

              {/* Tombol Hapus File */}
              {fileName && (
                  <div className="mt-2">
                    <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-red-500 hover:text-red-700 transition duration-200"
                    >
                      Hapus File
                    </button>
                  </div>
              )}


        </div>
        <button
            type="submit"
            className="bg-biru-uhamka text-white px-4 py-2 rounded-md flex items-center"
        >
          Submit
          <BsFillSendPlusFill className="ml-2"/>
        </button>
      </Form>
    </div>
</div>
</Wrapper>
)
  ;
};
export default FormPeminjamanRuang;
