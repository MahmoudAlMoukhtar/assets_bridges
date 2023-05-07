import {FaMobile} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {motion} from "framer-motion";
import * as api from "../api";
import {useState} from "react";
import {toast} from "react-toastify";

const ContactUs = () => {
  const [contactMessage, setContactMessage] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });
  const handleSubmitMessage = async e => {
    e.preventDefault();
    await api.sendContactMessage(contactMessage);
    toast.success("The message has been sent successfully");
  };

  return (
    <section id="contactUs" className="flex flex-col h-[600px] overflow-hidden">
      <img
        src="/riyadh-saudi-arabia-king-abdullah-financial-dis-2022-11-01-06-39-16-utc (1).webp"
        alt="riyadh-saudi-arabia-king-abdullah-financial-dis"
        className="brightness-[0.2] relative  w-full"
      />
      <div className="flex justify-between items-center flex-col md:flex-row absolute w-full px-10">
        <motion.div
          initial={{opacity: 0, y: -100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex flex-col justify-center items-center"
        >
          <div className={"flex flex-col items-center w-full"}>
            <h2 className="text-[120px] font-bold text-[#c9b289]">06</h2>
            <span className="w-1 bg-[#c9b289] h-[300px]"></span>
          </div>
          <div dir="rtl" className=" px-4">
            <h2 className="text-[#c9b289] text-[40px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold w-full text-center">
              تواصل معنا
            </h2>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row">
          <form
            dir="rtl"
            className="bg-[#c9b289] text-black w-80 lg:w-96 p-4"
            onSubmit={handleSubmitMessage}
          >
            <div className="flex flex-col gap-2">
              <label>الاسم الأول</label>
              <input
                onChange={e =>
                  setContactMessage({
                    ...contactMessage,
                    firstName: e.target.value,
                  })
                }
                required
                type="text"
                className="p-2 w-full bg-[#222222] text-white"
                placeholder="الاسم الأول"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>الاسم الثاني</label>
              <input
                onChange={e =>
                  setContactMessage({
                    ...contactMessage,
                    lastName: e.target.value,
                  })
                }
                required
                type="text"
                className="p-2 w-full bg-[#222222] text-white"
                placeholder="الاسم الثاني"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>البريد الالكتروني</label>
              <input
                onChange={e =>
                  setContactMessage({...contactMessage, email: e.target.value})
                }
                required
                type="text"
                className="p-2 w-full bg-[#222222] text-white"
                placeholder="الإيميل"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>الرسالة</label>
              <textarea
                onChange={e =>
                  setContactMessage({
                    ...contactMessage,
                    message: e.target.value,
                  })
                }
                required
                minLength={10}
                rows={10}
                type="text"
                className="p-2 w-full bg-[#222222] text-white"
                placeholder="الرسالة"
              />
            </div>
            <button className="bg-[#222222] text-white w-full p-2 shadow-md mt-2">
              إرسال
            </button>
          </form>
          <div
            dir="rtl"
            className="flex flex-col gap-2 bg-[#222222] text-white p-4"
          >
            <h3 className="text-2xl sm:text-xl lg:text-2xl font-bold">
              شركة جسور الأصول العقارية
            </h3>
            <span className="h-1 bg-[#c9b289] w-full"></span>
            <div className="flex items-center gap-2">
              <MdEmail size={20} />
              <p> info@assetsbridges.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMobile size={20} />
              0560801000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
