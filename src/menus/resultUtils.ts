import { ColourOption } from "../interfaces/interfaces";
// import dataSet from "../assets/datasets/measuredData.json";

// interface AreasProps {
//   colourOptions: ColourOption[];
// }

// let data = dataSet["dates"].map((val, idx) => {
//   return {
//     name: val,
//     power: dataSet["power"][idx],
//     signal2: dataSet["signal2"][idx] + 800,
//     signal3: dataSet["signal2"][idx] * 0.2 + 5800,
//   };
// });

export const energyColourOptions: readonly ColourOption[] = [
  { value: "power", label: "power", color: "#00B8D9", isFixed: true },
  { value: "signal2", label: "signal2", color: "#0052CC" },
  { value: "signal3", label: "signal3", color: "#5243AA" },
];

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
  { value: "power", label: "power", color: "#00B8D9", isFixed: true },
  { value: "heat_pump", label: "heat_pump", color: "#0052CC" },
  // { value: "purple", label: "Purple", color: "#5243AA" },
  // { value: "red", label: "Red", color: "#FF5630" },
  // { value: "orange", label: "Orange", color: "#FF8B00" },
  // { value: "yellow", label: "Yellow", color: "#FFC400" },
  // { value: "green", label: "Green", color: "#36B37E" },
  // { value: "forest", label: "Forest", color: "#00875A" },
  // { value: "slate", label: "Slate", color: "#253858" },
  // { value: "silver", label: "Silver", color: "#666666" },
];

export function makeChartData(data: any, labels: string[]) {
  // transforms data into format digestible for Areas chart
  const chartData = data["DateTime"].map((val: any, idx: any) => {
    let tmp: any = { name: val };
    labels.map((label) => {
      tmp = { ...tmp, [label]: data[label][idx] };
      return;
    });
    return tmp;
  });
  return chartData;
}
