import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/landingPage";
import main from "../assets/image/main.svg";
const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container mx-auto mt-10">
          <div
            id="home"
            className="flex flex-wrap  justify-center items-center mt-5"
          >
            <div className="w-full sm:w-full lg:w-1/2">
              <img src={main} alt="lab" className="w-10/12 mx-auto" />
            </div>
            <div className="w-full sm:w-full lg:w-1/2 p-3">
              <h1 className="text-biru-uhamka">
                Selamat Datang Di Website Laboratorium Teknik Informatika
              </h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                purus mi, dapibus in suscipit aliquam, lacinia quis arcu. Etiam
                pellentesque lacinia neque, ut vestibulum elit tempor sit amet.
                Sed finibus sollicitudin elit, in pellentesque lectus faucibus
                eget. Praesent vel sollicitudin nibh. Nam quis faucibus enim, eu
                auctor est. In ullamcorper rhoncus velit eu tempor. Donec
                tincidunt egestas lacus quis facilisis.
              </p>
            </div>
          </div>
        </div>
        <div id="about" className="bg-biru-uhamka">
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
          <div className="container mx-auto py-5 text-white text-center">
            <h1>Tentang Kami</h1>
            <p>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque hendrerit posuere ex vitae interdum. Praesent vel
                tristique libero. In aliquet id est nec dignissim. Donec sit
                amet cursus tortor, a malesuada tellus. Duis condimentum posuere
                sapien, eu eleifend felis suscipit eu. Sed eu metus commodo,
                malesuada sem ac, tempor augue. Aenean vehicula lectus sit amet
                gravida condimentum. Aliquam quis pharetra mauris."
              </i>
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default LandingPage;
