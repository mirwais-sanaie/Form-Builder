// Component data type

import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="fixed top-0 mx-auto w-full z-50 bg-background px-5">
      <div className="mx-auto flex items-center justify-between py-3 ">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-mono font-bold">
            LOGO
          </Link>
          <Navigation />
        </div>

        <Button size="sm">Sign In / Sign Up</Button>
      </div>
    </header>
  );
}

export default Header;
