import { Outlet } from "react-router";
import Sidebar from "../component/Sidebar";

export const DashboardPage = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <Outlet />
    </div>
  );
};
