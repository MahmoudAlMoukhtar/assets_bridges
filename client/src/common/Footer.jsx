import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";
import {HashLink} from "react-router-hash-link";
import {AiOutlineMail} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 md:border-t-2 border-[#c9b289]">
      <div
        dir="rtl"
        className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 sm:px-10 md:px-20 w-full mt-[700px] md:mt-0 border-t-2 md:border-0 border-[#c9b289] bg-black text-center md:text-start py-10"
      >
        <div className="w-52 flex flex-col items-center md:items-start">
          <HashLink to="/" className="w-52">
            <img alt="logo_ar" src="/logo_ar.webp" className="w-full" />
          </HashLink>
          <ul className="flex items-center gap-2 text-white">
            <FaInstagram size={20} className="cursor-pointer" />
            <FaFacebook size={20} className="cursor-pointer" />
            <FaTwitter size={20} className="cursor-pointer" />
            <FaLinkedin size={20} className="cursor-pointer" />
          </ul>
        </div>
        <ul
          dir="rtl"
          className="flex flex-col justify-around items-center md:flex-row  md:items-start gap-4 text-[#c9b289] p-4 font-semibold w-full"
        >
          <div className="flex flex-col gap-4">
            <h6 className="text-white text-lg">معلومات عن جسور</h6>
            <HashLink className="text-sm lg:text-md" to={"/#"}>
              الصفحة الرئيسية
            </HashLink>
            <HashLink className="text-sm lg:text-md" to={"/#aboutus"}>
              من نحن
            </HashLink>
            <HashLink className="text-sm lg:text-md" to={"/#AddedValues"}>
              قيمنا
            </HashLink>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-white text-lg">مشاريع وخدمات</h6>
            <HashLink className="text-sm lg:text-md" to={"/#projects"}>
              مشاريعنا
            </HashLink>
            <HashLink className="text-sm lg:text-md" to={"/#ourTeam"}>
              فريقنا
            </HashLink>
            <HashLink className="text-sm lg:text-md" to={"/#ServiceRequest"}>
              طلب خدمة
            </HashLink>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-white text-lg">معلومات التواصل</h6>
            <HashLink className="text-sm lg:text-md" to={"/#contactUs"}>
              تواصل معنا
            </HashLink>
            <div className="flex items-center gap-2">
              <FaMobile size={20} />
              0560801000
            </div>
            <div className="flex items-center gap-2">
              <span>
                <AiOutlineMail size={20} />
              </span>
              <p className="text-sm font-normal">info@assetsbridges.com</p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <MdLocationOn size={20} />
              </span>
              <p className="text-sm font-normal">المملكة العربية السعودية</p>
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
