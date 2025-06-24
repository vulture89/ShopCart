"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
