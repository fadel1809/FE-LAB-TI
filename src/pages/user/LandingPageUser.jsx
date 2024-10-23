/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import NavbarUser from "../../components/NavbarUser";
import Wrapper from "../../assets/wrappers/landingPage";
import main from "../../assets/image/main.svg";
import hubungiKami from "../../assets/image/hubungiKami.svg";
import Slider from "react-slick";
import CarouselImage1 from "../../assets/image/carousel_1.jpg";
import CarouselImage2 from "../../assets/image/carousel_2.jpg";
import CarouselImage3 from "../../assets/image/carousel_3.jpg";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";
import Chat from "../../components/Chat";
const LandingPageUser = () => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    const fetchMessage = async()=>{
      const result = await customFetch("v1/user/current-user", {
        withCredentials: true,
      });
      const { data } = result.data;
      const { user } = data;
      setUserInfo(user)
    }
    fetchMessage()
  },[])
  
  const handleEmailClick = () => {
    const email = "fadelmaulana12@gmail.com";
    const subject = "Kontak Laboratorium TI";
    const body = "";

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper>
        <NavbarUser />
        <div className="container mx-auto mt-10 mb-10">
          <Chat currentId={userInfo.id} role={userInfo.role} username={userInfo.username} />
          <div
            id="home"
            className="flex flex-wrap  justify-center items-center mt-5"
          >
            <div className="w-full sm:w-full lg:w-1/2">
              <img src={main} alt="lab" className="w-10/12 mx-auto" />
            </div>
            <div className="w-full sm:w-full lg:w-1/2 p-3">
              <h1 className="text-biru-uhamka text-3xl  sm:text-center lg:text-left">
                Selamat Datang Di Website Laboratorium Teknik Informatika
              </h1>
              <p className="text-gray-500 sm:text-justify lg:text-left">
                Kami merupakan pusat penelitian dan inovasi di bidang Teknik
                Informatika yang berkomitmen untuk menghasilkan kontribusi yang
                berarti dalam perkembangan teknologi informasi. Dengan fokus
                pada pengembangan ilmu pengetahuan, kami menyediakan lingkungan
                yang memungkinkan mahasiswa dan peneliti untuk menjelajahi
                ide-ide baru dan menciptakan solusi inovatif. Bergabunglah
                dengan kami dalam perjalanan eksplorasi dan pembelajaran di
                dunia Teknik Informatika.
              </p>
            </div>
          </div>
        </div>
        <div id="about" className="bg-biru-uhamka ">
          <div className="custom-shape-divider-top-1703471906">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="container mx-auto xs:px-2 sm:px-5 md:px-10 xl:px-72 py-20 text-white text-justify  ">
            <h1 className="text-2xl text-center mb-7 title-about">
              ~ Tentang Kami ~
            </h1>
            <p className="text-md leading-relaxed">
              <i>
                "Laboratorium Teknik Informatika Universitas Muhammadiyah Prof.
                Dr. Hamka adalah pusat keunggulan di dunia teknologi informasi,
                menjadi wadah bagi inovasi dan penelitian yang menginspirasi.
                Dengan didukung oleh tim ahli yang berkomitmen, kami menempatkan
                fokus pada pengembangan teknologi terkini, mengintegrasikan
                riset dan aplikasi praktis untuk menciptakan solusi yang relevan
                dan berdampak positif. Dalam perjalanan kami, kami tidak hanya
                menjembatani kesenjangan ilmu pengetahuan, tetapi juga mengambil
                peran aktif dalam memberikan kontribusi positif bagi masyarakat
                dan industri. Melalui kolaborasi yang erat antara mahasiswa,
                peneliti, dan industri, kami menciptakan lingkungan belajar yang
                dinamis, di mana ide-ide cemerlang berkembang menjadi
                proyek-proyek inovatif. Kami mengundang Anda untuk menjelajahi
                dunia kami di Laboratorium Teknik Informatika, tempat di mana
                ide-ide revolusioner bertemu dengan implementasi praktis,
                menciptakan masa depan yang terdepan dalam teknologi informasi.
                Bergabunglah dengan kami dalam membangun jalan menuju
                perkembangan ilmu pengetahuan dan memberikan dampak positif bagi
                masyarakat melalui inovasi teknologi."
              </i>
            </p>
          </div>
        </div>
        <div className="custom-shape-divider-top-1706521740">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* !!!SECTION Layanan!!! */}
        <div
          id="layanan"
          className="container bg-white text-biru-uhamka text-center mb-10 mx-auto px-32"
        >
          <h1 className="text-center mb-4 title-layanan">Layanan Kami</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 ">
            <div className="bg-white p-6 rounded-md border-2 border-biru-uhamka shadow-md text-center">
              <h1 className="text-xl font-semibold mb-4">Peminjaman Alat</h1>
              <p className="text-gray-500 text-left mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                neque magna, laoreet a dignissim eu, placerat non augue.
                Vestibulum justo metus, tristique sed orci eu, volutpat porta
                urna. Nunc et dolor eget lectus eleifend maximus et ullamcorper
                lacus. Fusce sed nisi a velit euismod efficitur. Integer id
                lorem magna. Aliquam efficitur tellus vitae quam pretium
                ultricies. Maecenas maximus dolor sem. In nec libero auctor
                risus condimentum interdum.
              </p>
              <hr className="my-4 border-t-2 border-biru-uhamka " />
              <Link to={"peminjaman-alat"}>
                <button
                  type="button"
                  className=" px-10 py-1 border rounded-full border-biru-uhamka  text-biru-uhamka hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
                >
                  Pinjam Alat
                </button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md border-2 border-biru-uhamka text-center">
              <h1 className="text-xl font-semibold mb-4">Peminjaman Ruang</h1>
              <p className="text-gray-500 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                neque magna, laoreet a dignissim eu, placerat non augue.
                Vestibulum justo metus, tristique sed orci eu, volutpat porta
                urna. Nunc et dolor eget lectus eleifend maximus et ullamcorper
                lacus. Fusce sed nisi a velit euismod efficitur. Integer id
                lorem magna. Aliquam efficitur tellus vitae quam pretium
                ultricies. Maecenas maximus dolor sem. In nec libero auctor
                risus condimentum interdum.
              </p>
              <hr className="my-4 border-t-2 border-biru-uhamka " />
              <Link to={"peminjaman-ruang"}>
                <button
                  type="button"
                  className=" px-10 py-1 border rounded-full border-biru-uhamka  text-biru-uhamka hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
                >
                  Pinjam Ruang
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* SECTION FASILITAS */}
        <div id="fasilitas" className="bg-biru-uhamka mt-10 px-52 py-10">
          <div className="container bg-biru-uhamka text-white mx-auto py-5">
            <h1 className="text-center mb-5 title-fasilitas">Fasilitas</h1>
            <div className="mt-5 mb-10">
              <Slider {...settings}>
                <div className="bg-white">
                  <img
                    src={CarouselImage1}
                    alt="Fasilitas 1"
                    className="w-full h-full object-cover rounded-md aspect-auto"
                  />
                </div>
                <div className="bg-white">
                  <img
                    src={CarouselImage2}
                    alt="Fasilitas 2"
                    className="w-full h-full object-cover rounded-md aspect-auto"
                  />
                </div>
                <div className="bg-white">
                  <img
                    src={CarouselImage3}
                    alt="Fasilitas 2"
                    className="w-full h-full object-cover rounded-md aspect-auto"
                  />
                </div>
                {/* Add more slides as needed */}
              </Slider>
            </div>
          </div>
        </div>
        {/* contact us section */}
        <div
          id="contact"
          className="container rounded-lg border-2 border-biru-uhamka mx-auto my-16 p-8 text-center"
        >
          <h1 className="text-biru-uhamka title-contact  font-bold mb-6">
            Hubungi Kami
          </h1>
          <img src={hubungiKami} className="w-52 mx-auto py-5" />
          <p className="text-gray-700 mb-6">
            Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan
            hubungi kami melalui email:
          </p>
          <button
            onClick={handleEmailClick}
            type="button"
            className="px-8 py-2 border rounded-full border-biru-uhamka text-biru-uhamka hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Email Kami
          </button>
        </div>
        {/* Footer */}
        <div>
          <footer className="bg-biru-uhamka bg-opacity-85 text-white py-6">
            <div className="container mx-auto text-center">
              <p className="text-sm">
                © 2024 Laboratorium Teknik Informatika. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Wrapper>
    </>
  );
};
export default LandingPageUser;
