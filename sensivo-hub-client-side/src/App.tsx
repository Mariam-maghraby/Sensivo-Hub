import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { DeviceDetailsPage } from "./pages/DeviceDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/device/:id" element={<DeviceDetailsPage />}/>
    </Routes>
  );
}

export default App;
