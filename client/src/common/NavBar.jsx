import {FiMenu} from "react-icons/fi";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const NavBar = ({navBarModal, setNavBarModal}) => {
  return (
    <nav className="flex flex-row-reverse justify-between items-center text-black w-full p-4">
      <Link to={"/"} className="w-48">
        <img alt="logo_ar" src="/logo_realEstate_ar.png" className="w-full" />
      </Link>
      <ul className="flex flex-row-reverse justify-center items-center gap-4 bg-[#c9b289] translate-x-[-100px] p-2 lg:p-4 font-semibold">
        <button onClick={() => setNavBarModal(!navBarModal)}>
          <FiMenu size={30} />
        </button>
        <div
          dir="rtl"
          className="justify-center items-center gap-4 hidden lg:flex"
        >
          <HashLink className="text-sm lg:text-md" to={"/#"}>
            الصفحة الرئيسية
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#aboutus"}>
            من نحن
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#AddedValues"}>
            قيمنا
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#experiences"}>
            خبراتنا
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#ourTeam"}>
            فريقنا
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#ServiceRequest"}>
            طلب خدمة
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#contactUs"}>
            تواصل معنا
          </HashLink>
        </div>
        <span className="w-24"></span>
      </ul>
    </nav>
  );
};

export default NavBar;
