import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />

      <div className="h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
