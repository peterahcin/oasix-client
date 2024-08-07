import { ColourOption } from "../interfaces/interfaces";
import dataSet from "../assets/datasets/measuredData.json";

interface AreasProps {
  colourOptions: ColourOption[];
}


export const defaultChartColorOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const backendEnergyOptions: ColourOption[] = [
  { value: "electricity", label: "electricity", color: "#00B8D9", isFixed: true },
  { value: "cooling load", label: "cooling load", color: "#0052CC" },
  { value: "cooling", label: "cooling", color: "#5243AA" },
  { value: "heat load", label: "heat load", color: "#FF5630" },
  // { value: "COPh", label: "COPh", color: "#FF8B00" },
  { value: "insolation", label: "insolation", color: "#FFC400" },
  // { value: "COPc", label: "COPc", color: "#36B37E" },
  // { value: "T ambient", label: "T ambient", color: "#00875A" },
  { value: "dissipated heat", label: "dissipated heat", color: "#253858" },
  { value: "dissipated cold", label: "dissipated cold", color: "#666666" },
];

export const TemperatureOptions: ColourOption[] = [
  { value: "T ambient", label: "T ambient", color: "#00B8D9", isFixed: true },
  { value: "T cold storage", label: "T cold storage", color: "#0052CC" },
  { value: "T hot storage", label: "T hot storage", color: "#FF5630" },
  { value: "T ambient", label: "T ambient", color: "#00875A" },
];

export const HeatPumpPerformanceOptions: ColourOption[] = [
  { value: "COP", label: "COP", color: "#00B8D9" },
  { value: "COPh", label: "COPh", color: "#FF8B00" },
  { value: "COPc", label: "COPc", color: "#36B37E" },
];
