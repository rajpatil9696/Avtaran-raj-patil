import Navbar from "../components/common/Navbar";
// import FooterNew from "../components/common/FooterNew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tax from "./pages/Tax";
import GST from "./pages/GST";
import RBI from "./pages/RBI";
import FOM from "./pages/FOM";
import Bank from "./pages/Bank";
import Business from "./pages/Business";
import PR from "./pages/PR";
import Advisory from "./pages/Advisory";
import Career from "./pages/Career";
import VirtualCfo from "./pages/VirtualCfo";

function AppRouter() {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/gst" element={<GST />} />
        <Route path="/rbi" element={<RBI />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/business" element={<Business />} />
        <Route path="/citizenship-pr" element={<PR />} />
        <Route path="/family-office-management" element={<FOM />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/virtual-cfo" element={<VirtualCfo/>}/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="realtive h-[100px] bg-white">
        <Navbar />
      </div>
      <AppRouter />
      {/* <FooterNew /> */}
    </Router>
  );
}

export default App;
