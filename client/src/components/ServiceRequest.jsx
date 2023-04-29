import HeaderSection from "./HeaderSection";

const ServiceRequest = () => {
  return (
    <section
      id="ServiceRequest"
      className=" flex flex-col gap-4 px-4 sm:px-10 md:px-20 my-20"
    >
      <HeaderSection dir="rtl" title={"طلب الخدمة"} sectionNum={"05"} />
      <form className="flex flex-col text-white gap-2" dir="rtl">
        <div className="bg-[#c9b289] p-4 w-full shadow-sm shadow-black flex flex-col gap-2">
          <label className="text-2xl text-black font-semibold">
            البريد الالكتروني
          </label>
          <input
            required
            type="email"
            className="p-2 w-full text-black"
            placeholder="البريد الالكتروني"
          />
        </div>
        <div className="flex flex-col gap-2 p-4 shadow-sm shadow-black">
          <h6 className="text-2xl font-semibold text-[#c9b289]">
            عن مقدم الطلب
          </h6>
          <div className="flex flex-col">
            <label>اسم مقدم الطلب</label>
            <input
              required
              type="text"
              className="p-2 w-full text-black"
              placeholder="الاسم"
            />
          </div>
          <div className="flex flex-col">
            <label>الصفة</label>
            <select className="w-full text-black cursor-pointer">
              <option value="مالك الأرض">مالك الأرض</option>
              <option value="وكيل">وكيل</option>
              <option value="وسيط">وسيط</option>
              <option value="آخر">آخر</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>رقم الجوال</label>
            <input
              required
              type="number"
              className="p-2 w-full text-black"
              placeholder="رقم الجوال"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 shadow-sm shadow-black">
          <h6 className="text-2xl font-semibold text-[#c9b289]">عن الطلب</h6>

          <div className="flex flex-col">
            <label>موقغ الأرض</label>
            <select className="w-full text-black cursor-pointer">
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="المنطقة الشرقية">المنطقة الشرقية</option>
              <option value="اخرى">اخرى</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>المساحة</label>
            <input
              required
              type="text"
              className="p-2 w-full text-black"
              placeholder="المساحة"
            />
          </div>
          <div className="flex flex-col">
            <label>الهدف من العرض</label>
            <select className="w-full text-black cursor-pointer">
              <option value="المشاركة بكامل الأرض في الصندوق">
                المشاركة بكامل الأرض في الصندوق
              </option>
              <option value="البيع">البيع</option>
              <option value="المشاركة الجزئية">المشاركة الجزئية</option>
            </select>
          </div>
        </div>
        <button className="bg-[#c9b289] p-2 text-black font-semibold shadow-sm shadow-black mt-2 w-full">
          إرسال
        </button>
      </form>
    </section>
  );
};

export default ServiceRequest;
