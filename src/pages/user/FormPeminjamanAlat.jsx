import NavbarUser from "../../components/NavbarUser";
import Wrapper from "../../assets/wrappers/formPeminjaman";
import { BsFillSendPlusFill } from "react-icons/bs";
import { redirect, Form } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import { useEffect } from "react";
import Chat from "../../components/Chat";
import moment from "moment-timezone";
import { MdOutlineAttachFile } from "react-icons/md";
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Format tanggal_pengembalian menggunakan moment
  data.tanggal_pengembalian = moment(
    data.tanggal_pengembalian,
    "YYYY-MM-DD"
  ).format("YYYY-MM-DD");
  try {
    await customFetch.post(`v1/peminjaman/alat/${params.id}`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Peminjaman Berhasil Dibuat");
    return redirect(`/user/${params.id}/peminjaman-saya`);
  } catch (error) {
    console.log(error);
    toast.error("Peminjaman Gagal Dibuat");
  }
};

const FormPeminjamanAlat = () => {
  const [userInfo, setUserInfo] = useState({});
  const [tanggalPeminjaman, setTanggalPeminjaman] = useState("");
  const [tanggalPengembalian, setTanggalPengembalian] = useState("");

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

  const today = moment().format("YYYY-MM-DD");

  const handleTanggalPeminjamanChange = (event) => {
    const selectedDate = event.target.value;
    setTanggalPeminjaman(selectedDate);

    // Set minimum tanggal pengembalian sebagai hari berikutnya dari tanggal peminjaman
    const nextDay = moment(selectedDate).add(1, "days").format("YYYY-MM-DD");
    setTanggalPengembalian(nextDay);
  };

const [fileName, setFileName] = useState("");
const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    setFileName(e.target.files[0].name);
  }
};
  return (
    <>
      <Wrapper>
        <div className="bg-gray-50">
          <NavbarUser />
          <Chat
            currentId={userInfo.id}
            role={userInfo.role}
            username={userInfo.username}
          />

          <div className=" bg-white px-7 py-5 rounded-md shadow shadow-2xl max-w-lg mx-auto mb-5">
            <BackButton />
            <h2 className="text-xl text-center mb-4 text-biru-uhamka font-bold">
              Form Peminjaman Alat Laboratorium
            </h2>
            <div className="bg-blue-200 px-6 py-6 my-6 rounded-md">
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
                  placeholder="NIDN/NIM"
                  type="text"
                  id="nim"
                  name="nidn"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
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
                  htmlFor="ruang"
                  className="block mb-1 text-gray-700 font-semibold"
                >
                  Jenis Barang
                </label>
                <input
                  type="text"
                  name="jenis_barang"
                  id=""
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
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
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-biru-uhamka "
                  required
                  min={today}
                  value={tanggalPeminjaman}
                  onChange={handleTanggalPeminjamanChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="waktu"
                  className="block mb-1 text-gray-700 font-semibold"
                >
                  Tanggal Pengembalian
                </label>
                <input
                  type="date"
                  id="waktu"
                  name="tanggal_pengembalian"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                  min={tanggalPengembalian}
                  value={tanggalPengembalian}
                  onChange={(event) =>
                    setTanggalPengembalian(event.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="upload"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Upload File Form Peminjaman Alat (.pdf)
                </label>
                <div className="relative flex items-center border border-gray-300 rounded-lg p-2 hover:border-blue-500 transition duration-200 focus-within:border-blue-500">
                  {/* Ikon lampiran */}
                  <MdOutlineAttachFile className="text-gray-500 mx-2" />

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

                  {/* Button pilih file */}
                  <span className="px-4 py-2 bg-biru-uhamka text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-200">
                    Pilih File
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="bg-biru-uhamka text-white px-4 py-2 rounded-md flex items-center"
              >
                Submit
                <BsFillSendPlusFill className="ml-2" />
              </button>
            </Form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FormPeminjamanAlat;
