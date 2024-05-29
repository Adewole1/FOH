import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" index />
    </Routes>
  );
}

export default App;
