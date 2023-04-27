const HeaderSection = ({title, sectionNum, dir}) => {
  return (
    <div
      className={
        dir === "rtl"
          ? "flex flex-row justify-center items-center w-full"
          : "flex flex-row-reverse justify-center items-center w-full"
      }
    >
      <div
        className={
          dir === "rtl"
            ? "flex flex-row items-center w-full"
            : "flex flex-row-reverse items-center w-full"
        }
      >
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] xl:text-[120px] font-bold text-[#c9b289]">
          {sectionNum}
        </h2>
        <span className="h-1 bg-[#c9b289]  w-2/3 xl:w-[600px]"></span>
      </div>
      <div dir={dir} className="w-[600px] sm:w-full xl:w-[800px] px-4">
        <h2 className="text-[#c9b289] text-[30px] sm:text-[40px] lg:text-[60px] xl:text-[70px] font-bold w-full">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default HeaderSection;
