import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {HashLink} from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 sm:px-10 md:px-20 w-full py-2">
      <HashLink to="/" className="w-48">
        <img alt="logo_ar" src="/logo_ar.webp" className="w-full" />
      </HashLink>
      <ul className="flex flex-row-reverse justify-center items-center gap-4 bg-[#c9b289]  p-4 font-semibold">
        <div className=" flex-row-reverse justify-center items-center gap-4 hidden md:flex">
          <HashLink className="text-sm lg:text-md" to={"/#"}>
            الصفحة الرئيسية
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#aboutus"}>
            من نحن
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#AddedValues"}>
            قيمنا
          </HashLink>
          <HashLink className="text-sm lg:text-md" to={"/#projects"}>
            مشاريعنا
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
      </ul>
      <ul className="flex justify-center items-center gap-2 text-white">
        <FaInstagram size={20} />
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
      </ul>
    </footer>
  );
};

export default Footer;
