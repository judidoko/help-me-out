import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
