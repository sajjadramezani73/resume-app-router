import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
