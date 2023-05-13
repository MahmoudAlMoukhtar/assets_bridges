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
    <motion.section
      initial={{opacity: 0, x: "+50px"}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      id="experiences"
      className="px-4 md:px-10 lg:px-20 py-10"
    >
      <HeaderSection dir="" title={"خبــراتـنــا"} sectionNum={"04"} />
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="flex justify-center gap-4 items-center flex-wrap sm:flex-nowrap"
      >
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            loading="lazy"
            src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2023-03-30-00-23-36-utc (1) (1).webp"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col justify-center items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-4xl font-boold">3</span>
            </div>
            <div className="flex flex-col w-full gap-4 mt-2" dir="rtl">
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl">الدراسات والأبحاث </h4>
                <span className="h-1 bg-[#c9b289] w-3/4"></span>
              </div>
              <p className="text-sm">
                يمتلك فريق العمل في جسور العقارية الخبرة العريضة في تقديم دراسات
                متخصصة في المجال العقاري. ونهدف من هذه الدراسات المقدمة لعملائنا
                في تسهيل اتخاذ القرار الاستثماري.
              </p>
              <div className="h-6 bg-[#c9b289] text-black"></div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            loading="lazy"
            src="/jeddah-saudi-arabia-city-escape-jeddah-city-2023-03-24-21-27-28-utc-1.webp"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col justify-center items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-4xl font-boold">2</span>
            </div>
            <div className="flex flex-col w-full gap-4 mt-2" dir="rtl">
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl">حلول التقنية العقارية</h4>
                <span className="h-1 bg-[#c9b289] w-3/4"></span>
              </div>
              <p className="text-sm">
                تقدم جسور العقارية حلول مبتكرة في مجال التقنية العقارية ProTech
                والتي ستساهم في حل العديد من أوجه القصور في سوق العقارية، وذلك
                من خلال توظيف منتجات السوق المالية.
              </p>
              <div className="h-6 bg-[#c9b289] text-black"></div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col w-96">
          <img
            loading="lazy"
            src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2022-11-01-06-39-16-utc (1).webp"
            className="w-full"
            alt=""
          />
          <div className="flex text-white">
            <div className="w-20 flex flex-col justify-center items-center border-4 border-[#c9b289] p-2 text-center">
              <span className="text-4xl font-boold">1</span>
            </div>
            <div className="flex flex-col w-full gap-4 mt-2" dir="rtl">
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl">صناعة وإدارة الفرص العقارية</h4>
                <span className="h-1 bg-[#c9b289] w-3/4"></span>
              </div>
              <p className="text-sm">
                يتملك فريق العمل في جسور العقارية خبرات كبيرة في صناعة الفرص
                العقارية وادارتها من خلال تسهيل هيكلة الأصول العقارية المناسبة
                لتكون منتجات استثمارية في سوق رأس المال السعودي.
              </p>
              <div className="h-6 bg-[#c9b289] text-black"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurProjects;
