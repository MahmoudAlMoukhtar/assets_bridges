import React from "react";
import {HashLink} from "react-router-hash-link";

const styles = {
  linkPages:
    "hover:text-white p-[8px] hover:bg-[#eab308] hover:text-black hover:font-semibold hover:rounded-[4px]",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({navBarModal, setNavBarModal}) => {
  return (
    <div
      id="modal-nav"
      className={navBarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        dir="rtl"
        className="bg-[#c9b289] flex flex-col gap-y-4 fixed z-10 top-0 right-0  w-60 min-h-full shadow-2xl animate__animated animate__fadeInRight"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-center gap-12">
          <HashLink
            className="text-sm lg:text-md"
            to={"/#"}
            onClick={() => setNavBarModal(false)}
          >
            الصفحة الرئيسية
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#aboutus"}
            onClick={() => setNavBarModal(false)}
          >
            من نحن
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#AddedValues"}
            onClick={() => setNavBarModal(false)}
          >
            قيمنا
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#experiences"}
            onClick={() => setNavBarModal(false)}
          >
            خبراتنا
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#ourTeam"}
            onClick={() => setNavBarModal(false)}
          >
            فريقنا
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#ServiceRequest"}
            onClick={() => setNavBarModal(false)}
          >
            طلب خدمة
          </HashLink>
          <HashLink
            className="text-sm lg:text-md"
            to={"/#contactUs"}
            onClick={() => setNavBarModal(false)}
          >
            تواصل معنا
          </HashLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
