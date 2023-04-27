//import {motion} from "framer-motion";
const HeroSection = () => {
  return (
    <div
      id="hero_section_content"
      className="flex flex-col items-end mt-20 md:mt-40 w-full"
    >
      <div className="flex flex-col gap-6 bg-black text-end p-6 w-full animate__animated  animate__fadeInLeft">
        <h1 className="text-[#d6dce5] text-3xl sm:text-6xl font-bold">
          جسور الأصول العقارية
        </h1>
        <p className="text-[#c9b289] text-md sm:text-xl font-semibold">
          جسر يربط بين سوق رأس المال ومنتجات القطاع العقاري بمفهوم تقني
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p
          dir="rtl"
          className="bg-[#d6dce5] py-2 px-4 text-xl sm:text-3xl font-bold animate__animated animate__fadeInLeft"
        >
          حلول تقنية عقارية
        </p>
        <div className="bg-[#0f0f0f] flex flex-col items-end px-4 py-2 animate__animated animate__fadeInRight">
          <p className="text-[#d6dce5] sm:text-xl">
            By: Ali M. Al Zahrani , MBA Fin, CFTe
          </p>
          <span className="text-[#c9b289] font-bold">FOUNDER</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
