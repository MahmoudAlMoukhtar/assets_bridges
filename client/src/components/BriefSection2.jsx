import {RiCheckboxBlankFill} from "react-icons/ri";
import {motion} from "framer-motion";

const BriefSection2 = () => {
  return (
    <motion.section
      initial={{opacity: 0, y: +100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="flex flex-col w-full py-20 md:py-4"
    >
      <img
        src="/jeddah-beach-saudi-arabia-red-sea-corniche-view-2023-01-18-03-54-36-utc (1).webp"
        className="brightness-[0.5] relative h-[500px]"
        alt="jeddah-beach-saudi-arabia-red-sea-corniche-view-2023-01-18-03-54-36-utc"
      />

      <div
        className={
          "flex  w-full text-white p-2  absolute mt-6 sm:mt-[-20px] md:mt-24"
        }
      >
        <div className="flex flex-row flex-wrap justify-center w-full lg:flex-nowrap">
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-72 lg:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-20 lg:py-32 border-4 border-[#c9b289]  items-center mt-[-40px] sm:mr-[-60px] md:mr-[-40px]"
          >
            <h3 className="text-3xl font-bold">تطلعاتنا</h3>
            <div className="text-sm flex flex-col items-center text-center gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تنمية الأصول العقارية بمفهوم استثماري تقني
              </div>
              <div className="bg-[#c9b289] text-black w-full h-4"></div>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-72 lg:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-20 lg:py-32  border-4 border-[#c9b289]  items-center mt-[-40px]"
          >
            <h3 className="text-3xl font-bold">إمكانياتنا</h3>
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                رؤية واضحة لهيكلة الأصول العقارية وتعظيم القيمة منها
              </div>
              <div className="bg-[#c9b289] text-black h-4"></div>
            </div>
          </div>
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-72 lg:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-20 lg:py-32   border-4 border-[#c9b289]  items-center mt-[-40px] sm:mr-[-60px] md:ml-[-40px]"
          >
            <h3 className="text-3xl font-bold">عناصر النجاح</h3>
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                سوق عقاري واعد وسريع التحول
              </div>
              <div className="bg-[#c9b289] text-black h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BriefSection2;

