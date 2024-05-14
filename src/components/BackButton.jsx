import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
 const navigate = useNavigate();

 const handleBack = () => {
   navigate(-1); // This will navigate back to the previous page in history
 };

 return (
   <>
     <button className="text-white shadow shadow-2xl bg-biru-uhamka flex items-center mx-4 p-2 my-3  rounded rounded-[100px] text-2xl" onClick={handleBack}>
       <IoMdArrowRoundBack className=" text-white" />
     </button>
   </>
 );
}
export default BackButton