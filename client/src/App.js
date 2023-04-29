import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Page";
import "./App.css";
import NavbarModal from "./common/NavModal";

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
    </div>
  );
}

export default App;
