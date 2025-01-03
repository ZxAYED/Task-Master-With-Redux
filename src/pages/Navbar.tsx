import { ModeToggle } from "@/components/providers/mode-toogle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16  flex items-center ">
      <div className="flex items-center font-medium  gap-10 w-full">
        <Link className="text-2xl font-bold" to="/">
          TaskMaster
        </Link>
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
        <div className="ml-auto">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
