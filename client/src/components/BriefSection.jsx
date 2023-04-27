import {motion} from "framer-motion";

const BriefSection = ({dir, title, sectionNum, image, paragraph}) => {
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
    <section
      id="aboutus"
      className="flex flex-col md:gap-20 w-full py-4 px-4 sm:px-10 lg:px-20"
    >
      <div
        className={
          dir === "rtl"
            ? "flex justify-between items-center w-full"
            : "flex flex-row-reverse justify-between items-center w-full"
        }
      >
        <div
          className={
            dir === "rtl"
              ? "flex items-center w-full"
              : "flex flex-row-reverse items-center w-full"
          }
        >
          <h2 className="text-[60px] sm:text-[80px] md:text-[100px] xl:text-[120px] font-bold text-[#c9b289]">
            {sectionNum}
          </h2>
          <span className="h-1 bg-[#c9b289] w-2/3 xl:w-[600px]"></span>
        </div>
        <div dir="rtl" className="w-full xl:w-[800px] px-4">
          <h2 className="text-[#c9b289] text-[30px] sm:text-[40px] lg:text-[60px] xl:text-[70px] font-bold w-full">
            نبذة عن جسور
          </h2>
        </div>
      </div>
      <div
        className={
          dir === "rtl"
            ? "flex flex-col-reverse md:flex-row justify-between w-full text-white p-2"
            : "flex flex-col-reverse md:flex-row-reverse justify-between w-full text-white p-2"
        }
      >
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          className="flex flex-col gap-10"
        >
          <motion.div
            variants={item}
            dir="rtl"
            className="flex flex-col bg-[#c9b289] text-black p-2"
          >
            <h3>من نحن؟</h3>
            <p className="text-sm ">
              كيان تجاري سعودي يقدم خدمات عقارية نوعية وذلك من خلال ابتكار حلول
              استثمارية متطورة للأصول العقارية. نوظف التقنية المالية من خلال
              تطبيقات التقنية العقارية PropTech في ابتكار الحلول الاستثمارية
              المتطورة.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            dir="rtl"
            className="flex flex-col hover:bg-[#c9b289] hover:text-black p-2"
          >
            <h3>رؤيتنا</h3>
            <p className="text-sm ">
              أن نمد الجسور للأصول العقارية المناسبة لتحويلها لمنتجات مالية
              استثمارية تلبي رغبات المستثمرين وتطور السوق العقاري المحلي
            </p>
          </motion.div>
          <motion.div
            variants={item}
            dir="rtl"
            className="flex flex-col hover:bg-[#c9b289] hover:text-black p-2"
          >
            <h3>رسالتنا</h3>
            <p className="text-sm ">
              ابتكار حلول نوعية لأصحاب الأصول العقارية من خلال تعظيم وتسهيل
              تحويل تلك الأصول لمنتجات استثمارية من خلال الربط مع مؤسسات السوق
              المالية المناسبة، وكذلك توظيف حلول التنقية العقارية في تعظيم
              الاستفادة من الأصول العقارية المناسبة.{" "}
            </p>
          </motion.div>
          <motion.div
            variants={item}
            dir="rtl"
            className="flex flex-col hover:bg-[#c9b289] hover:text-black p-2"
          >
            <h3>فلسفتنا</h3>
            <p className="text-sm ">
              ابتكار حلول لبعض مشاكل السوق العقاري من خلال توظيف الأدوات المالية
              في سوق رأس المال لحل تلك المشاكل وحوكمة تلك المنتجات وتطويرها
              مؤسسة جسور الأصول العقارية | سجل تجاري رقم ٤٠٣٠٤٨٨٠٧٩ | josorsa.
              com التميز في استخدام التقنية العقارية والمالية لتقديم حلول
              استثمارية نوعية ومبتكرة في القطاع العقاري{" "}
            </p>
          </motion.div>
        </motion.div>
        <div className="flex md:w-1/2">
          <div
            className={
              dir === "rtl"
                ? "w-full md:w-[600px] sm:h-[400px] md:translate-x-[+100px] z-40"
                : "w-full md:w-[600px] sm:h-[400px] md:translate-x-[-100px] z-40"
            }
          >
            <img
              alt="ithra-building-in-saudi-arabia"
              src={`/${image}`}
              className="w-full h-full"
            />
          </div>
          <div className="w-full sm:w-[400px] sm:h-[400px] brightness-[0.1] translate-y-[+50px] sm:translate-y-[-50px] hidden md:block">
            <img
              alt="ithra-building-in-saudi-arabia"
              src={`/${image}`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefSection;
