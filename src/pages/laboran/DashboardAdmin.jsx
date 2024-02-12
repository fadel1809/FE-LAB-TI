import { BsFileEarmarkCheck } from "react-icons/bs";

import Wrapper from "../../assets/wrappers/dahsboardAdmin";
// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <div className="ml-4">
          <h1 className="text-biru-uhamka font-bold text-lg">{title}</h1>
          <p className="text-gray-600 text-sm">{value}</p>
        </div>
      </div>
    </div>
  );
};
const DashboardAdmin = () => {
  return (
    <Wrapper>
      <div className="mx-10 my-10 bg-white shadow-lg py-5 px-5 rounded-sm">
        <h1 className="text-biru-uhamka font-bold text-lg">Dashboard</h1>
        <div className="flex space-x-4 mx-10 my-10">
          <DashboardCard
            title="Pemeriksaan"
            value="1"
            icon={<BsFileEarmarkCheck className="text-blue-500 text-3xl" />}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default DashboardAdmin;
