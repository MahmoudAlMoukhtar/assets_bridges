import {RiCheckboxBlankFill} from "react-icons/ri";
import {motion} from "framer-motion";

const BriefSection2 = () => {
  return (
    <motion.section
      initial={{opacity: 0, y: +200}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="flex flex-col w-full py-20 md:py-4 "
    >
      <img
        src="/jeddah-beach-saudi-arabia-red-sea-corniche-view-2023-01-18-03-54-36-utc.jpg"
        className="brightness-[0.5] relative h-[500px]"
        alt="jeddah-beach-saudi-arabia-red-sea-corniche-view-2023-01-18-03-54-36-utc"
      />

      <div
        className={
          "flex  w-full text-white p-2  absolute mt-10 md:mt-20 lg:mt-32"
        }
      >
        <div className="flex flex-row flex-wrap justify-center w-full lg:flex-nowrap gap-10">
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-24 md:py-32  md:py-34 border-4 border-[#c9b289]  items-center mt-[-100px] sm:mr-[-60px] lg:mr-[-60px]"
          >
            <h3 className="text-3xl font-bold">تطلعاتنا</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تنمية الأصول العقارية بمفهوم استثماري تقني
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-24 md:py-32  md:py-34  border-4 border-[#c9b289]  items-center mt-[-100px]"
          >
            <h3 className="text-3xl font-bold">إمكانياتنا</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                رؤية واضحة لهيكلة الأصول العقارية وتعظيم القيمة منها
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222] rounded-full py-12 sm:py-24 md:py-32   border-4 border-[#c9b289]  items-center mt-[-100px] sm:mr-[-60px] lg:ml-[-60px]"
          >
            <h3 className="text-3xl font-bold">عناصر النجاح</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                سوق عقاري واعد وسريع التحول
              </p>
              <button className="bg-[#c9b289] text-black">رؤية المزيد</button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BriefSection2;

/* 
 <div className="flex flex-row flex-wrap justify-center w-full lg:flex-nowrap gap-10">
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222]"
          >
            <h3 className="text-3xl font-bold">تطلعاتنا</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تنمية الأصول العقارية بمفهوم استثماري تقني
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تعظيم قيمة الأصول العقارية للملاك والمستثمرين والمستهلكين
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                ربط مزودي الخدمات المحترفين في القطاع العقاري والمالي
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                ابتكار حلول استثمارية للأصول العقارية المعطلة وفق أفضل الممارسات
                القانونية والاستثمارية
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                توظيف حلول التقنية العقارية في تعظيم قيمة الأصول العقارية
              </p>
            </div>
          </div>

          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222]"
          >
            <h3 className="text-3xl font-bold">إمكانياتنا</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                رؤية واضحة لهيكلة الأصول العقارية وتعظيم القيمة منها
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>
                حلول مبتكرة لم يسبق طرحها في السوق العقاري المالي
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>
                فريق عمل ذو خبرة واسعة في القطاع المالي والعقاري بخبرات تتجاوز
                20 سنة
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                خبراء تقنية مالية وخصوصاً في مجال التقنية العقارية
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                علاقات واسعة وقوية في القطاع المالي والعقاري
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                شركاء ذو سمعة وخبرة واسعة في القطاع المالي والعقاري
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                السرعة والدقة في انجاز المهام وتوظيف التقنية في ذلك
              </p>
            </div>
          </div>
          <div
            dir="rtl"
            className="flex flex-col gap-10 p-2 w-60 sm:w-80 md:w-96 shadow-lg hover:scale-105 transtion duration-500 bg-[#222222]"
          >
            <h3 className="text-3xl font-bold">عناصر النجاح</h3>
            <div className="text-sm flex flex-col gap-2">
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                سوق عقاري واعد وسريع التحول
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                مواكبة التغير من خلال ابتكار حلول استثمارية لأصحاب الاصول
                العقارية المتوافقة مع متغيرات السوق
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                مواكبة التغير من خلال ابتكار حلول استثمارية لأصحاب الاصول
                العقارية المتوافقة مع متغيرات السوق
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                فريق عمل محترف وذو كفاءة عالية بالمجال المالي والعقاري
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                توقيت مناسب لطرح المنتجات العقارية الاستثمارية
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تلبية رغبات المستثمرين الافراد في طرح منتجات موثوقة في القطاع
                العقاري المحلي
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                تعظيم القيمة للمشاريع العقارية الحكومية وشبة الحكومية ضمن
                مبادرات رؤية المملكة 2030
              </p>
              <p className="flex items-center gap-1">
                <div>
                  <RiCheckboxBlankFill color="#c9b289" />
                </div>{" "}
                ابتكار حلول تقنية عقارية نوعية تخدم بعض برامج الرؤية التنفيذية{" "}
              </p>
            </div>
          </div>
        </div>
*/
