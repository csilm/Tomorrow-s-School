import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
import About_Us from "./About_Us/All";
import What_We_Do from "./What_WE_Do/All";
import Contract_Us from "./Contract_Us/All";
import Success from "./components/Gateway/success";
import Donate from "./components/Donate/donate";
import { Suspense } from "react";
function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="joinus" element={<JoinUs />} />
            <Route path="aboutus" element={<About_Us />} />
            <Route path="donate" element={<Donate />} />
            <Route path="whatWeDo" element={<What_We_Do />} />
            <Route path="contactus" element={<Contract_Us />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
