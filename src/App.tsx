import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./menus/Results";
import MainLayout from "./components/MainLayout";
import { SystemSizingForm } from "./menus/SystemSizingForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/" element={<MainLayout />}>
          <Route path="results" element={<Results />} />
          <Route path="system-sizing" element={<SystemSizingForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
