import { MultiSelectWithOptions } from "../components/inputs/MultiSelect";
import { colourStyles } from "../components/inputs/multiSelectUtils";
import { makeChartData, backendEnergyOptions, TemperatureOptions, HeatPumpPerformanceOptions } from "./resultUtils";
import { useEffect, useState } from "react";
import { ColourOption } from "../interfaces/interfaces";
import { AreasChart } from "../components/charts/CustomChart";
import { AreasChartWithZoom } from "../components/charts/CustomChartWithZoom";

const SERVER = process.env.REACT_APP_BASE_URL;

export default function Results() {
  const [backendData, setBackendData] = useState({});

  const fetchData = async () => {
    const serverData = await fetch(SERVER + "/api/run_simulation");
    console.log("serverData", serverData);
    const serverDataJson = await serverData.json();
    console.log(serverDataJson);
    const tmp = serverDataJson;
    // const tmp = makeChartData(serverDataJson, ["power", "heat_pump"]);
    setBackendData(tmp);
    // setBackendData(data);
    // console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState<Array<ColourOption>>([
    backendEnergyOptions[0],
  ]);

  const [selectedTemperatureOptions, setSelectedTemperatureOptions] = useState<Array<ColourOption>>([
    TemperatureOptions[0],
  ]);

  const [selectedHPOptions, setSelectedHPOptions] = useState<Array<ColourOption>>([
    HeatPumpPerformanceOptions[0],
  ]);

  const handleChange = (e: ColourOption[]) => {
    let selected = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSelectedOptions(
      backendEnergyOptions.filter((value) => selected.includes(value.label))
    );
  };

  const handleTempertureSelection = (e: ColourOption[]) => {
    let selected = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSelectedTemperatureOptions(
      TemperatureOptions.filter((value) => selected.includes(value.label))
    );
  };

  const handleHPSelection = (e: ColourOption[]) => {
    let selected = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSelectedHPOptions(
      HeatPumpPerformanceOptions.filter((value) => selected.includes(value.label))
    );
  };

  return (
    <>
      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Energy streams</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[backendEnergyOptions[0]]}
          handleChange={handleChange}
          colourOptions={backendEnergyOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart colourOptions={selectedOptions} data={backendData} units="kWh"/>

      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Temperatures</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[TemperatureOptions[0]]}
          handleChange={handleTempertureSelection}
          colourOptions={TemperatureOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart colourOptions={selectedTemperatureOptions} data={backendData} units="°C"/>

      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Heat pump performance</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[HeatPumpPerformanceOptions[0]]}
          handleChange={handleHPSelection}
          colourOptions={HeatPumpPerformanceOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart colourOptions={selectedHPOptions} data={backendData}/>

      {/* <AreasChartWithZoom colourOptions={selectedOptions} data={backendData} /> */}
    </>
  );
}
