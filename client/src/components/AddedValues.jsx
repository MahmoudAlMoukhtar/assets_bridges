import HeaderSection from "./HeaderSection";
import {motion} from "framer-motion";
const AddedValues = () => {
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
    <motion.section
      variants={container}
      whileInView="visible"
      initial="hidden"
      className="flex flex-col items-center gap-2 sm:gap-10 w-full py-4 px-2 md:px-10 lg:px-20 "
    >
      <HeaderSection dir="" title={"القيم المضافة"} sectionNum={"02"} />
      <div
        className={"flex justify-center flex-wrap gap-4  text-white p-2 w-full"}
      >
        <motion.div
          variants={item}
          dir="rtl"
          className="item flex flex-col bg-[#c9b289] text-black p-4 "
        >
          <img alt="" src="/icons/project-management.png" className="w-32" />
          <p className="text-xl font-bold">الابتكار</p>
        </motion.div>
        <motion.div
          variants={item}
          dir="rtl"
          className="item flex flex-col bg-[#c9b289] text-black p-4 "
        >
          <img alt="" src="/icons/transparency.png" className="w-32" />
          <p className="text-xl font-bold">الشفافية</p>
        </motion.div>
        <motion.div
          variants={item}
          dir="rtl"
          className="item flex flex-col bg-[#c9b289] text-black p-4 "
        >
          <img alt="" src="/icons/outstanding.png" className="w-32" />
          <p className="text-xl font-bold">التميز</p>
        </motion.div>
        <motion.div
          variants={item}
          dir="rtl"
          className="item flex flex-col bg-[#c9b289] text-black p-4 "
        >
          <img alt="" src="/icons/thought.png" className="w-32" />
          <p className="text-xl font-bold">المعرفة العميقة</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AddedValues;
