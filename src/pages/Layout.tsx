import { Outlet } from "react-router";
import NavBar from "../Layout/NavBar";

const LayoutPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPage;
