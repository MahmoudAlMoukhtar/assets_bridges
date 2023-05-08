import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";
import {ImMenu} from "react-icons/im";

export default function Topbar({theme, navbarModal, setNavBarModal}) {
  return (
    <div className="topbar shadow-lg">
      <div
        className={
          theme === "black"
            ? "topbarWrapper bg-zinc-800 text-white"
            : "topbarWrapper"
        }
      >
        <Link to="/admin" className="topLeft">
          <span className={theme === "black" ? "logo text-white" : "logo"}>
            Assets Bridges
          </span>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer"></div>
          <ImMenu
            size={25}
            onClick={() => setNavBarModal(!navbarModal)}
            className="cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
  );
}
