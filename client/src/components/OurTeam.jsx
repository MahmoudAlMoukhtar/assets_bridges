import {IoMdQuote} from "react-icons/io";
import HeaderSection from "./HeaderSection";
import {motion} from "framer-motion";
const OurTeam = () => {
  return (
    <motion.section
      id="ourTeam"
      initial={{opacity: 0, y: -200}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="px-4 sm:px-10 lg:px-20"
    >
      <HeaderSection dir="rtl" title={"فريق جسور"} sectionNum={"03"} />
      <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 lg:gap-20 w-full">
        <p
          dir="rtl"
          className="text-white w-full sm:w-1/2 text-sm lg:text-xl lg:leading-8"
        >
          <div>
            <IoMdQuote color="#c9b289" size={30} />
          </div>
          الأستاذ/ علي الزهراني سيكون العضو المنتدب والرئيس التنفيذي، حيث شغل
          عدة مناصب قيادية في مؤسسات سوق مالية محلية ومرخصة من هيئة السوق
          المالية. يملك أكثر من 27 سنة من الخبرة المهنية في عدة شركات ومراكز
          إدارية، حيث كانت البداية من شركة أرامكو السعودية في عام 1996م – مركز
          الأبحاث والتطوير بالظهران عمل كمدير أصول في شركة مشاركة المالية وساهم
          مع فريق العمل في طرح عدة منتجات منها صندوق مشاركة ريت "المتداول" وكذلك
          أدار صندوق مشاركة للطروحات الأولية من ثم عمل كمدير لإدارة المصرفية
          الاستثمارية في مجموعة النفيعي للاستثمار وقام خلال ستة أشهر بتأسيس
          أعمال الإدارة وبعد ذلك تولى منصب الرئيس التنفيذي للشركة واخيراً شغل
          الأستاذ/علي منصب الرئيس التنفيذي للعمليات لدى شركة آرش المالية حيث قام
          بتأسيس اعمال إدارة المصرفية الاستثمارية والعمليات
          <div>
            <IoMdQuote color="#c9b289" className="rotate-180	" size={30} />
          </div>
        </p>

        <div className="flex flex-col w-full sm:w-80 lg:w-96">
          <img
            alt="person_2.jpg"
            src="/photo1682441316.jpeg"
            className="w-full"
          />
          <div className="flex flex-col gap-2 justify-center items-center text-center bg-[#c9b289] p-2">
            <h4 className="text-2xl font-bold">علي الزهراني</h4>
            <p className="text-xl">العضو المنتدب والرئيس التنفيذي</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurTeam;
