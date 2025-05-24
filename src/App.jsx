import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GetIn from "./pages/GetIn";
import WorkWithUs from "./pages/WorkWithUs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/get-in" element={<GetIn />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar />
    </Router>
  );
};

export default App;