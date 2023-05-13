import {motion} from "framer-motion";
import HeaderSection from "./HeaderSection";
import {Link} from "react-router-dom";
const ServiceRequestSection = () => {
  return (
    <motion.section
      initial={{opacity: 0, x: "-50px"}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      id="ServiceRequest"
      className="flex flex-col items-center px-4 sm:px-10 lg:px-20 mt-10 mb-28 w-full"
    >
      <HeaderSection dir="rtl" title="طلب الخدمة" sectionNum={"05"} />
      <div
        dir="rtl"
        className="flex flex-col md:flex-row justify-center w-full gap-10"
      >
        <img
          loading="lazy"
          src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2023-03-30-00-23-36-utc (1) (1).webp"
          className="w-full md:w-1/2"
          alt="riyadh-saudi-arabia-king-abdullah-financial-dis"
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
