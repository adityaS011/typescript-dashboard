import { TextField } from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { PiUserCircleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="p-4 border-b bg-slate-100 border-gray-200 flex justify-between items-center">
      <div className="text-lg font-bold">WorkFlew</div>
      <TextField
        className="w-100 "
        variant="outlined"
        size="small"
        label={
          <div className="flex items-center gap-2">
            <LuSearch />
            <span>Spotlight Search</span>
          </div>
        }
      />
      <div className="text-md flex items-center gap-2">
        <PiUserCircleLight size={32} />
        <span>User</span>
      </div>
    </div>
  );
};

export default Navbar;
