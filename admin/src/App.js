//import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
//import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";
// import ContactMessagesList from "./pages/contactMessages/ContactMessagesList";
// import Message from "./pages/message/Message";
// import {ToastContainer} from "react-toastify";
// import NavbarModal from "./components/NavModal";
// import ServicesRequests from "./pages/servicesRequests/ServicesRequest";
// import Request from "./pages/servicesRequests/Request";
// import Auth from "./pages/auth/Auth";
// import PrivaitRoute from "./components/PrivaitRoute";
// import ChangePassword from "./pages/ChangePassword/ChangePassword";

function App() {
  const [theme, selectTheme] = useState("black");
  const [navbarModal, setNavBarModal] = useState(false);
  document.querySelector("body").style.backgroundColor =
    theme === "black" ? "#27272a" : "white";
  document.querySelector("body").style.color =
    theme === "black" ? "white" : "black";

  return (
    <div>
      <h1 className="text-white">TEST</h1>
      <h1 className="text-black">TEST</h1>
    </div>
  );
}

export default App;

/* <Sidebar
          theme={theme}
          selectTheme={selectTheme}
          navbarModal={navbarModal}
        /> */
