import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./menus/Results";
import MainLayout from "./components/MainLayout";
import { SystemSizingForm } from "./menus/SystemSizingForm";
import { SimulationParametersForm } from "./menus/SimulationParametersForm";
import { NewProjectForm } from "./menus/NewProjectForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/" element={<MainLayout />}>
          <Route path="/" element={<NewProjectForm />} />
          <Route path="system-sizing" element={<SystemSizingForm />} />
          <Route
            path="simulation-parameters"
            element={<SimulationParametersForm />}
          />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
