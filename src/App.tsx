import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/context";
import MainLayout from "./components/MainLayout";
import { NewProjectForm } from "./menus/NewProjectForm";
import { SystemSizingForm } from "./menus/SystemSizingForm";
import SystemSize from "./menus/SystemSize";
import Results from "./menus/Results";
import { SimulationParametersForm } from "./menus/SimulationParametersForm";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route key="/" path="/" element={<MainLayout />}>
            <Route key="new-project" path="/" element={<NewProjectForm />} />
            <Route
              key="system-sizing"
              path="system-sizing"
              element={<SystemSizingForm />}
            />
            {/* <Route key="/" path="/system-size" element={<SystemSize />} /> */}
            <Route
              key="simulation-parameters"
              path="simulation-parameters"
              element={<SimulationParametersForm />}
            />
            <Route key="results" path="results" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
