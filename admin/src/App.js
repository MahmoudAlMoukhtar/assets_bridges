//import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactMessagesList from "./pages/contactMessages/ContactMessagesList";
import Message from "./pages/message/Message";
import {ToastContainer} from "react-toastify";
import NavbarModal from "./components/NavModal";
import {useState} from "react";
import ServicesRequests from "./pages/servicesRequests/ServicesRequest";
import Request from "./pages/servicesRequests/Request";
import Auth from "./pages/auth/Auth";
import PrivaitRoute from "./components/PrivaitRoute";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, selectTheme] = useState("black");
  const [navbarModal, setNavBarModal] = useState(false);
  document.querySelector("body").style.backgroundColor =
    theme === "black" ? "#27272a" : "white";
  document.querySelector("body").style.color =
    theme === "black" ? "white" : "black";

  return (
    <Router>
      <Topbar
        theme={theme}
        selectTheme={selectTheme}
        navbarModal={navbarModal}
        setNavBarModal={setNavBarModal}
      />
      <div className=" flex justify-between w-full mt-10">
        {navbarModal && (
          <PrivaitRoute>
            <NavbarModal
              theme={theme}
              navbarModal={navbarModal}
              setNavBarModal={setNavBarModal}
            />
          </PrivaitRoute>
        )}

        <Switch>
          <Route exact path="/admin">
            <PrivaitRoute>
              <Home theme={theme} selectTheme={selectTheme} />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/services" exact>
            <PrivaitRoute>
              <ServicesRequests />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/services/:id" exact>
            <PrivaitRoute>
              <Request />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/messages" exact>
            <PrivaitRoute>
              <ContactMessagesList />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/messages/:id">
            <PrivaitRoute>
              <Message />
            </PrivaitRoute>
          </Route>
          <Route path="/admin/auth" exact>
            <Auth />
          </Route>
          <Route path="/admin/changePassword" exact>
            <PrivaitRoute>
              <ChangePassword setNavBarModal={setNavBarModal} />
            </PrivaitRoute>
          </Route>
        </Switch>
        <ToastContainer theme="dark" />
      </div>
    </Router>
  );
}

export default App;

/* <Sidebar
          theme={theme}
          selectTheme={selectTheme}
          navbarModal={navbarModal}
        /> */
