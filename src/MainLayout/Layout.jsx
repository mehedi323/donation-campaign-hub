import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Layout = () => {
  return (
    <div className="max-w-[1300px] mx-auto ">
      <Header></Header>
      <div className="py-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;