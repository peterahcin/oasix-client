import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./menus/Results";
import SystemSize from "./menus/SystemSize";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/results" element={<Results />} />
        <Route key="/" path="/system-size" element={<SystemSize />} />
        <Route key="/" path="/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
