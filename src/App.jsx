import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Features from "./pages/Features";
import RecordingReady from "./pages/RecordingReady";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="recording-ready" element={<RecordingReady />} />
      </Routes>
    </>
  );
}

export default App;
