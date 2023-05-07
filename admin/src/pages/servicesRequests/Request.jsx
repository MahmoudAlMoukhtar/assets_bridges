import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as api from "../../api/index";
const Request = () => {
  const {id} = useParams();
  const [servicesRequest, setServiceRequest] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await api.fetchServiceRequestId(id);
        setServiceRequest(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;
  return (
    <div
      style={{color: "black !important"}}
      className="flex flex-col gap-6  w-full text-black"
      dir="rtl"
    >
      <div className="bg-[#c9b289] p-4 w-full shadow-sm shadow-black flex flex-col gap-2">
        <label className="text-2xl text-black font-semibold">
          البريد الالكتروني
        </label>
        <p className="p-2 w-full text-white bg-[#222222]">
          {servicesRequest.email}
        </p>
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
            <p
              className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
              style={{color: "black"}}
            >
              {servicesRequest.fullName}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <label>رقم الجوال</label>
            <p
              className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
              style={{color: "black"}}
            >
              {servicesRequest.phone}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <label>الصفة</label>
          <p
            className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
            style={{color: "black"}}
          >
            {servicesRequest.adjective}
          </p>
        </div>
      </div>
      <div
        id="second"
        className="flex flex-col gap-6 p-4 shadow-sm shadow-black"
      >
        <h6 className="text-2xl font-semibold text-[#c9b289]">معلومات الطلب</h6>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between w-full">
            <label>موقغ الأرض</label>
            <p
              className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
              style={{color: "black"}}
            >
              {servicesRequest.landLocation}
            </p>
          </div>

          <div className="flex justify-between w-full">
            <label>الهدف من العرض</label>
            <p
              className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
              style={{color: "black"}}
            >
              {servicesRequest.theAim}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <label>المساحة</label>
          <p
            className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
            style={{color: "black"}}
          >
            {servicesRequest.landSpace}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <label>سعر الأرض التقريبي</label>
          <p
            className="p-2  text-black bg-[#c9b289] w-1/2 font-bold "
            style={{color: "black"}}
          >
            {servicesRequest.approximateLandPrice}
          </p>
        </div>

        <div className="flex flex-col w-full">
          <label>معلومات اضافية</label>
          <p className="p-2  text-black bg-[#c9b289] w-full min-h-96">
            {servicesRequest.additionalInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Request;
