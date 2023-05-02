import {motion} from "framer-motion";
import {RiCheckboxBlankFill} from "react-icons/ri";
import HeaderSection from "./HeaderSection";
import {Link} from "react-router-dom";
const ServiceRequestSection = () => {
  return (
    <motion.section
      id="ServiceRequest"
      className="flex flex-col items-center px-4 sm:px-10 lg:px-20 mt-10 mb-28 w-full"
    >
      <HeaderSection dir="rtl" title="طلب الخدمة" sectionNum={"05"} />
      <div
        dir="rtl"
        className="flex flex-col md:flex-row justify-between w-full gap-4"
      >
        <img
          src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2023-03-30-00-23-36-utc (1) (1).webp"
          className="w-full md:w-1/2"
        />
        <div dir="rtl" className="flex flex-col justify-between gap-10">
          <h3 className="text-4xl text-[#fff] font-bold underline	">
            لماذا تختار شركة جسور الأصول العقارية
          </h3>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-2">
              <h4 className="text-[#c9b289]">أصحاب الأصول</h4>
              <p>
                تحديد الاستخدام الأعلى والأمثل للأصول العقارية التي يملكونها
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#c9b289]">المطورين</h4>
              <p>
                تمثيل المطور امام الشركات المالية ومزودي الخدمات بأفضل واعلى
                معايير الجودة
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#c9b289]">
                الشركات المالية "مدراء الصناديق"
              </h4>
              <p>توفير الوقت والجهد في البحث على الفرص الأنسب لهم</p>
            </div>
          </div>
          <Link
            to={"/ServiceRequest"}
            className="bg-[#c9b289] text-[#000] text-center font-bold p-2"
          >
            طلب خدمة
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceRequestSection;
/* 
 <div className="flex flex-col items-center gap-2 w-[150px]">
            <img
              alt=""
              className="w-[150px] cursor-pointer"
              src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2023-03-30-00-23-36-utc (1) (1).webp"
            />
            <img
              alt=""
              className="w-[150px] cursor-pointer"
              src="/jeddah-saudi-arabia-city-escape-jeddah-city-2023-03-24-21-27-28-utc-1.webp"
            />
            <img
              alt=""
              className="w-[150px] cursor-pointer"
              src="/ithra-building-in-saudi-arabia-2023-02-23-21-04-41-utc-1 (1).webp"
            />
          </div>
*/
/* 
<div dir="rtl" className="flex flex-col w-full p-2">
          <h3 className="text-2xl text-[#fff] font-bold">
            نحن نركز على انشاء عمل عالي الجودة وبمراحل عمل سلسلة مع العميل
          </h3>
          <div className="flex flex-col items-center  text-[#fff]">
            <p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">1</div>
              <h4 className="font-bold">معرفة احتياج العميل</h4>
            </p>
            <span className="w-1 bg-[#c9b289] h-[20px]"></span>
            <p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">
                2
                <RiCheckboxBlankFill color="#c9b289" />
              </div>{" "}
              <h4 className="font-bold">تقديم عرض الخدمات حسب نوع المشروع</h4>
            </p>
            <span className="w-1 bg-[#c9b289] h-[20px]"></span>
            <p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">
                3
                <RiCheckboxBlankFill color="#c9b289" />
              </div>{" "}
              <h4 className="font-bold">الفحص الناف للجهالة</h4>
            </p>
            <span className="w-1 bg-[#c9b289] h-[20px]"></span>
            <p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">
                4
                <RiCheckboxBlankFill color="#c9b289" />
              </div>{" "}
              <h4 className="font-bold">تقديم خطة العمل</h4>
            </p>
            <span className="w-1 bg-[#c9b289] h-[20px]"></span>
            <p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">
                5
                <RiCheckboxBlankFill color="#c9b289" />
              </div>{" "}
              <h4 className="font-bold">تنفيذ المشروع</h4>
            </p>
          </div>
          <Link
            to={"/ServiceRequest"}
            className="bg-[#000] text-[#c9b289] text-center font-bold p-2"
          >
            طلب خدمة
          </Link>
        </div>
*/

/* 

<p className="flex flex-col bg-[#c9b289] items-center gap-1 text-black py-2 px-4">
              <div className="flex items-center gap-2">
                5
                <RiCheckboxBlankFill color="#c9b289" />
              </div>{" "}
              <h4 className="font-bold">تنفيذ المشروع</h4>
            </p>
 */
