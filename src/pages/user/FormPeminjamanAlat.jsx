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
            <Form method="post">
              <div className="mb-4">
                <label htmlFor="nim" className="block mb-1">
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
                <label htmlFor="keperluan" className="block mb-1">
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
                <label htmlFor="ruang" className="block mb-1">
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
                <label htmlFor="tanggal" className="block mb-1">
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
                <label htmlFor="waktu" className="block mb-1">
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
