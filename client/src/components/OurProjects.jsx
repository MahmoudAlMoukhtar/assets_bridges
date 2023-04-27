import HeaderSection from "./HeaderSection";
import {motion} from "framer-motion";
const OurProjects = () => {
  const container = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.section id="projects" className="px-4 md:px-10 lg:px-20 py-10">
      <HeaderSection dir="" title={"مشاريعنا"} sectionNum={"04"} />
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="flex justify-center gap-4 items-center flex-wrap sm:flex-nowrap"
      >
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2023-03-30-00-23-36-utc.jpg"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-2xl font-boold">22</span>
              <p>February 2018</p>
            </div>
            <div className="flex flex-col w-full gap-4" dir="rtl">
              <h4>أعالي مكة – الزاوية الاقتصادية</h4>
              <span className="h-1 bg-[#c9b289] w-3/4"></span>
              <p className="text-sm">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى،...
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            src="/jeddah-saudi-arabia-city-escape-jeddah-city-2023-03-24-21-27-28-utc.jpg"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-2xl font-boold">22</span>
              <p>February 2018</p>
            </div>
            <div className="flex flex-col w-full gap-4" dir="rtl">
              <h4>أعالي مكة – الزاوية الاقتصادية</h4>
              <span className="h-1 bg-[#c9b289] w-3/4"></span>
              <p className="text-sm">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى،...
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2022-11-01-06-39-16-utc.jpg"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-2xl font-boold">22</span>
              <p>February 2018</p>
            </div>
            <div className="flex flex-col w-full gap-4" dir="rtl">
              <h4>أعالي مكة – الزاوية الاقتصادية</h4>
              <span className="h-1 bg-[#c9b289] w-3/4"></span>
              <p className="text-sm">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى،...
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurProjects;
