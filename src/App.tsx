import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./menus/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/results" element={<Results />} />
        <Route key="/" path="/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
