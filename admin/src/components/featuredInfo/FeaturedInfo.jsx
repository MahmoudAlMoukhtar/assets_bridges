import {useEffect, useState} from "react";
import * as api from "../../api/index";
import {useHistory} from "react-router-dom";
import "./featuredInfo.css";
import GridLoader from "react-spinners/GridLoader";
//import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  const [dataCotactMessages, setDataContactMessages] = useState();
  const [dataCourses, setDataCourses] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseContactMessages = await api.fetchContactMessages();
        setDataContactMessages(responseContactMessages.data);
        const responseServicesRequests = await api.fetchServicesRequests();
        setDataCourses(responseServicesRequests.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  if (error) return <h1 className="text-red-800">error</h1>;
  return (
    <div className="flex justify-between w-full mb-4 flex-wrap">
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Messages</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataCotactMessages.length
            )}
          </span>
        </div>
      </div>
      <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Requests</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataCourses.length
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
/* <div className="featuredItem flex flex-col items-center justify-center gap-6">
        <span className="text-4xl">Blogs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {loading ? (
              <GridLoader
                color={"#000"}
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              dataBlogs.length
            )}
          </span>
        </div>
      </div> */
