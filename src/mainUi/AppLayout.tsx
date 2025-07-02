import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="">
      <Header />

      <div className="h-screen mt-20 container mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
