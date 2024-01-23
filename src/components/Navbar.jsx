import React from "react";
import { TbBrandDatabricks } from "react-icons/tb";
import { PiUserSquareFill } from "react-icons/pi";


const Navbar = () => {
  return (
    <div className="navbar bg-primary px-7">
      <div className="flex-1">
        <span className="text-3xl ">
          <TbBrandDatabricks className="text-white" />
        </span>
      </div>
      <div className="flex-none">
        <span className="text-3xl">
          <PiUserSquareFill className="text-white"/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
