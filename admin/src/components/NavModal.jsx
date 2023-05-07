import React from "react";
import {BsFillBoxSeamFill} from "react-icons/bs";
import {HiInbox} from "react-icons/hi";
import {CgProfile} from "react-icons/cg";
import {NavLink} from "react-router-dom";

const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-[#4caf50] py-6 px-2 font-semibold w-full hover:border-l-8 hover:border-[#FF932D] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal, theme}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-zinc-800 flex flex-col gap-y-4 fixed z-10 top-0 left-0 w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <div
          className={
            theme === "black" ? " bg-zinc-800 w-60 " : " bg-white w-60 "
          }
        >
          <div
            className={
              theme === "black"
                ? "sidebarWrapper bg-zinc-800"
                : "sidebarWrapper bg-white"
            }
          >
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <NavLink
                  to="/admin"
                  className="link"
                  onClick={() => setNavBarModal(false)}
                >
                  <li className="sidebarListItem active">Home</li>
                </NavLink>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <NavLink
                  to="/admin/messages"
                  className="link flex items-center gap-2"
                >
                  <div>
                    <HiInbox size={30} />
                  </div>
                  <li className="sidebarListItem">Messages</li>
                </NavLink>
                <NavLink
                  to="/admin/services"
                  className="link flex items-center gap-2"
                >
                  <div>
                    <BsFillBoxSeamFill size={25} />
                  </div>
                  <li className="sidebarListItem">Serviceses Requests</li>
                </NavLink>
                <NavLink
                  to="/admin/changePassword"
                  className="link flex items-center gap-2"
                >
                  <div>
                    <CgProfile size={25} />
                  </div>
                  <li className="sidebarListItem">Change Password</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
