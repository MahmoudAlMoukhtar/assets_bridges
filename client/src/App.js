import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Page";
import "./App.css";
import NavbarModal from "./common/NavModal";
import Footer from "./common/Footer";

function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  return (
    <div className="w-full">
      <NavbarModal navBarModal={navBarModal} setNavBarModal={setNavBarModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setNavBarModal={setNavBarModal} navBarModal={navBarModal} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
