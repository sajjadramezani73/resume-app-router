import { Outlet } from "react-router-dom";
import Sidebar from "../container/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-full flex">
      <div className="w-[300px] min-w-[300px] shadow-left">
        <div className="h-20 bg-primary/80"></div>
        <div className="p-4 pr-0">
          <Sidebar />
        </div>
      </div>
      <div className="flex-grow">
        <div className="h-20 bg-primary"></div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
