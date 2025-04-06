import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="step-3" element={<StepThree />}> */}
    </Routes>
  );
}

export default App;
