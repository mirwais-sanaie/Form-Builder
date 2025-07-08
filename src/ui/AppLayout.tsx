import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

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
