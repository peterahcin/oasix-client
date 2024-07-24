import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./menus/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/" element={<MainLayout />}>
          <Route path="/" element={<NewProjectForm />} />
          <Route path="system-sizing" element={<SystemSizingForm />} />
          <Route key="/" path="/system-size" element={<SystemSize />} />
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
