import {useState} from "react";
import NavBar from "../../common/NavBar";
import * as api from "../../api/index";
import {toast} from "react-toastify";

const ServiceRequest = ({navBarModal, setNavBarModal}) => {
  const [serviceRequest, setServiceRequest] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    adjective: "",
    landLocation: "",
    theAim: "",
    landSpace: "",
    approximateLandPrice: "",
    additionalInformation: "",
  });

  const handleSubmitService = async e => {
    e.preventDefault();
    await api.sendServiceRequest(serviceRequest);
    toast.success("The service request has been sent successfully");
  };
  return (
    <section
      id="ServiceRequest"
      className=" flex flex-col items-center gap-4 px-4 sm:px-10 md:px-10 py-10"
    >
      <NavBar navBarModal={navBarModal} setNavBarModal={setNavBarModal} />
      <form
        onSubmit={handleSubmitService}
        className="flex flex-col text-white gap-6  w-full md:w-2/3"
        dir="rtl"
      >
        <div className="bg-[#c9b289] p-4 w-full shadow-sm shadow-black flex flex-col gap-2">
          <label className="text-2xl text-black font-semibold">
            البريد الالكتروني
          </label>
          <input
            onChange={e =>
              setServiceRequest({
                ...serviceRequest,
                email: e.target.value,
              })
            }
            required
            type="email"
            className="p-2 w-full text-white bg-[#222222]"
            placeholder="البريد الالكتروني"
          />
        </div>
        <div
          id="first"
          className="flex flex-col gap-6 p-4 shadow-sm shadow-black"
        >
          <h6 className="text-2xl font-semibold text-[#c9b289]">
            معلومات مقدم الطلب
          </h6>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between w-full">
              <label>اسم مقدم الطلب</label>
              <input
                onChange={e =>
                  setServiceRequest({
                    ...serviceRequest,
                    fullName: e.target.value,
                  })
                }
                required
                type="text"
                className="p-2  text-black bg-[#c9b289] w-1/2"
                placeholder="الاسم"
              />
            </div>
            <div className="flex justify-between w-full">
              <label>رقم الجوال</label>
              <input
                onChange={e =>
                  setServiceRequest({
                    ...serviceRequest,
                    phone: e.target.value,
                  })
                }
                required
                type="number"
                className="p-2  text-black bg-[#c9b289] w-1/2"
                placeholder="رقم الجوال"
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <label>الصفة</label>
            <select
              onChange={e =>
                setServiceRequest({
                  ...serviceRequest,
                  adjective: e.target.value,
                })
              }
              className="w-1/2 text-black bg-[#c9b289] cursor-pointer"
            >
              <option value="مالك الأرض">مالك الأرض</option>
              <option value="وكيل">وكيل</option>
              <option value="وسيط">وسيط</option>
              <option value="آخر">آخر</option>
            </select>
          </div>
        </div>
        <div
          id="second"
          className="flex flex-col gap-6 p-4 shadow-sm shadow-black"
        >
          <h6 className="text-2xl font-semibold text-[#c9b289]">
            معلومات الطلب
          </h6>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between w-full">
              <label>موقغ الأرض</label>
              <select
                onChange={e =>
                  setServiceRequest({
                    ...serviceRequest,
                    landLocation: e.target.value,
                  })
                }
                className="w-1/2 text-black bg-[#c9b289] cursor-pointer"
              >
                <option value="الرياض">الرياض</option>
                <option value="جدة">جدة</option>
                <option value="المنطقة الشرقية">المنطقة الشرقية</option>
                <option value="اخرى">اخرى</option>
              </select>
            </div>

            <div className="flex justify-between w-full">
              <label>الهدف من العرض</label>
              <select
                onChange={e =>
                  setServiceRequest({
                    ...serviceRequest,
                    theAim: e.target.value,
                  })
                }
                className="w-1/2 text-black bg-[#c9b289] cursor-pointer"
              >
                <option value="المشاركة بكامل الأرض في الصندوق">
                  المشاركة بكامل الأرض في الصندوق
                </option>
                <option value="البيع">البيع</option>
                <option value="المشاركة الجزئية">المشاركة الجزئية</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <label>المساحة</label>
            <input
              onChange={e =>
                setServiceRequest({
                  ...serviceRequest,
                  landSpace: e.target.value,
                })
              }
              required
              type="text"
              className="p-2 w-1/2 text-black bg-[#c9b289]"
              placeholder="المساحة"
            />
          </div>
          <div className="flex justify-between w-full">
            <label>سعر الأرض التقريبي</label>
            <input
              onChange={e =>
                setServiceRequest({
                  ...serviceRequest,
                  approximateLandPrice: e.target.value,
                })
              }
              value={serviceRequest.approximateLandPrice}
              required
              type="number"
              className="p-2 w-1/2 text-black bg-[#c9b289]"
              placeholder="سعر الأرض التقريبي بالريال السعودي"
            />
          </div>
          <textarea
            onChange={e =>
              setServiceRequest({
                ...serviceRequest,
                additionalInformation: e.target.value,
              })
            }
            rows={10}
            className="bg-[#c9b289] p-2 text-black"
            placeholder="معلومات اضافية"
          />
        </div>
        <button className="bg-[#c9b289] p-2 text-black font-semibold shadow-sm shadow-black mt-2 w-full">
          إرسال
        </button>
      </form>
    </section>
  );
};

export default ServiceRequest;
