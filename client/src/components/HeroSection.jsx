const HeroSection = () => {
  return (
    <div
      id="hero_section_content"
      className="flex flex-col items-end mt-20 md:mt-40 w-full"
    >
      <div className="flex flex-col gap-4 sm:gap-6 bg-black p-6 w-full text-center sm:text-end animate__animated  animate__fadeInLeft">
        <h1 className="text-[#d6dce5] text-3xl sm:text-5xl lg:text-7xl font-bold">
          جسور الأصول العقارية
        </h1>
        <p className="text-[#c9b289] text-sm sm:text-xl font-semibold">
          جسر يربط بين سوق رأس المال ومنتجات القطاع العقاري بمفهوم تقني
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start w-full">
        <p
          dir="rtl"
          className="bg-[#d6dce5] py-2 px-4 text-lg sm:text-2xl font-bold animate__animated animate__fadeInLeft w-full sm:w-auto text-start"
        >
          حلول تقنية عقارية
        </p>
        <div className="bg-[#0f0f0f] flex flex-col  sm:items-end px-4 py-2 animate__animated animate__fadeInRight w-full sm:w-2/3">
          <p dir="rtl" className="text-[#d6dce5] sm:text-md ">
            بخبرات كبيرة في القطاع العقاري والمالي .. تقدم مؤسسة جسور الأصول
            العقارية خدمات صناعة وإدارة الفرص العقارية الواعدة من خلال ابتكار
            حلول استثمارية نوعية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
