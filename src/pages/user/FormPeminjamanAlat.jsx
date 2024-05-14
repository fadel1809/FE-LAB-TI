import NavbarUser from "../../components/NavbarUser";
import Wrapper from "../../assets/wrappers/formPeminjaman";
import { BsFillSendPlusFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Link,redirect,Form } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useState } from "react";
import BackButton from "../../components/BackButton";
export const action = async ({request,params}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  try {
    await customFetch.post(`v1/peminjaman/alat/${params.id}`,data,{withCredentials:true})
    toast.success("Peminjaman Berhasil Dibuat");
    return redirect(`/user/${params.id}/peminjaman-saya`)
  } catch (error) {
    console.log(error)
     toast.success("Peminjaman Gagal Dibuat");
  }
}
const FormPeminjamanAlat = () => {
    const today = new Date().toISOString().split("T")[0];
   const [tanggalPeminjaman, setTanggalPeminjaman] = useState("");
   const [tanggalPengembalian, setTanggalPengembalian] = useState("");
  //  const [formattedDate, setFormattedDate] = useState("");

  //  const formatDate = (event) => {
  //    const dateValue = event.target.value;

  //    const formattedDate = dayjs(dateValue).format("DD-MM-YYYY");

  //    setFormattedDate(formattedDate);
  //  };
    const handleTanggalPeminjamanChange = (event) => {
      const selectedDate = event.target.value;
      setTanggalPeminjaman(selectedDate);

      // Calculate the date for tanggal_pengembalian (one day after tanggal_peminjaman)
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayFormatted = nextDay.toISOString().split("T")[0];
      setTanggalPengembalian(nextDayFormatted);
    };
  return (
    <>
      <Wrapper>
        <div className="bg-gray-50">
          <NavbarUser />
          <div className=" bg-white px-7 py-5 rounded-md shadow shadow-2xl max-w-lg mx-auto mb-5">
            <BackButton/>
            <h2 className="text-xl text-center mb-4 text-biru-uhamka font-bold">
              Form Peminjaman Barang Laboratorium
            </h2>
            <div className="bg-blue-200 px-6 py-6 my-6 rounded-md">
              <p>
                Untuk Peminjaman Barang, diskusikan terlebih dahulu dengan
                laboran/aslab sebelum melakukan peminjaman.
              </p>
              <Link to={"https://api.whatsapp.com/send?phone=6287784467864"}>
                <button
                  type="button"
                  className="bg-blue-200 outline outline-2 outline-biru-uhamka hover:bg-blue-300 text-biru-uhamka font-bold py-1 px-7 rounded-full flex items-center my-4"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Whatsapp
                </button>
              </Link>
            </div>
            <Form method="post">
              <div className="mb-4">
                <label htmlFor="nim" className="block mb-1">
                  NIDN
                </label>
                <input
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
                  value={tanggalPengembalian}
                  min={tanggalPeminjaman}
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
