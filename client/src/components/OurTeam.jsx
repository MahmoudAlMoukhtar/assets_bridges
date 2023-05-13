import {IoMdQuote} from "react-icons/io";
import HeaderSection from "./HeaderSection";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import {FaMobile} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

const Person = ({name, postion, bio, img}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 lg:gap-10 w-full cursor-grab	">
      <div
        dir="rtl"
        className="text-white w-full sm:w-1/2 text-sm lg:text-lg lg:leading-8"
      >
        <div>
          <IoMdQuote color="#c9b289" size={30} />
        </div>
        {bio}
        <div>
          <IoMdQuote color="#c9b289" className="rotate-180" size={30} />
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-80 lg:w-[400px]">
        <img
          loading="lazy"
          alt="person_2.jpg"
          src={`/${img}`}
          className="w-full"
        />
        <div className="flex flex-col gap-2 justify-center items-center text-center bg-[#c9b289] p-2">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="text-xl">{postion}</p>
        </div>
      </div>
    </div>
  );
};
/* 
<div className="flex flex-col gap-2 justify-center items-center text-center bg-[#c9b289] p-2">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="text-xl">{postion}</p>
        </div>
*/

const team = [
  {
    name: "علي الزهراني",
    postion: "المؤسس والرئيس التنفيذي",
    bio: ` يمتلك الأستاذ/ علي خبرة مهنية تمتد لأكثر من 25 عام في مجالات متنوعة، بدايةً من شركة أرامكو السعودية لما يقارب 15 عام، وكذلك خبرة كبيرة في المجال المالي، حيث شغل عدة وظائف قيادية في العديد من الشركات المالية، وقام بتأسيس العديد من الصناديق الاستثمارية ومنها العقارية وادارها. 
وكذلك لدى الأستاذ/ علي خبرة في المجال الاستشاري وقدم العديد من المشاريع لجهات حكومية وتجارية في المجال المالي والعقاري ووزرات وهيئات حكومية محلية. 
وتمتد الخبرة لمجال التدريب المالي المتخصص، حيث أسس مركز تدريب خاص لمنتجات القطاع المالي وقدم العديد من البرامج التدريبية للبنوك الاستثمارية والقطاع الحكومي في مجالات عدة. حيث بلغ عدد من حضور تلك البرامج اكثر من 3000 متدرب ومتدربة على مدى أكثر من 15 عام. 
ويمتلك الأستاذ/ علي خبرات في مجال التقنية المالية FinTech ولقد حصل على جوائز مرموقة في هذا المجال`,
    img: "msg777000-2007.jpg",
  },
  {
    name: "حسن الكناني",
    postion: "شريك مؤسس",
    bio: `
    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
    `,
    img: "R (1).jpg",
  },
  {
    name: "راشد حلواني",
    postion: "مدير العمليات وتقنية المعلومات",
    bio: `
    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
    `,
    img: "R (1).jpg",
  },
];

const OurTeam = () => {
  return (
    <motion.section
      id="ourTeam"
      initial={{opacity: 0, y: -100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      className="px-4 sm:px-10 lg:px-20"
    >
      <HeaderSection dir="rtl" title={"فريق جسور"} sectionNum={"03"} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={400}
        className="flex flex-col gap-[20px]"
      >
      <div className="flex items-center justify-center">
      
      </div>
        {team.map(person => {
          return (
            <SwiperSlide
              className="flex justify-center gap-20 "
              key={person.name}
            >
              <Person
                name={person.name}
                postion={person.postion}
                bio={person.bio}
                img={person.img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default OurTeam;
/* 

 <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 lg:gap-10 w-full">
        <div
          dir="rtl"
          className="text-white w-full sm:w-1/2 text-sm lg:text-lg lg:leading-8"
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
        </div>

        <div className="flex flex-col w-full sm:w-80 lg:w-96">
          <img
            loading="lazy"
            alt="person_2.jpg"
            src="/msg777000-2007.jpg"
            className="w-full"
          />
          <div className="flex flex-col gap-2 justify-center items-center text-center bg-[#c9b289] p-2">
            <h4 className="text-2xl font-bold">علي الزهراني</h4>
            <p className="text-xl">العضو المنتدب والرئيس التنفيذي</p>
          </div>
        </div>
      </div>
*/
