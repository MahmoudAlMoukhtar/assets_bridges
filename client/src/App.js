import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Page";
import "./App.css";
import NavbarModal from "./common/NavModal";
import Footer from "./common/Footer";
import ServiceRequestSection from "./pages/ServiceRequest/page";
import ScrollToTop from "./components/ScrollToTop";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  return (
    <div className="w-full">
      <ScrollToTop />
      <NavbarModal navBarModal={navBarModal} setNavBarModal={setNavBarModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setNavBarModal={setNavBarModal} navBarModal={navBarModal} />
          }
        />
        <Route
          path="/ServiceRequest"
          element={
            <ServiceRequestSection
              setNavBarModal={setNavBarModal}
              navBarModal={navBarModal}
            />
          }
        />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
