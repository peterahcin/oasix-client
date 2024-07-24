import { MultiSelectWithOptions } from "../components/inputs/MultiSelect";
import { colourStyles } from "../components/inputs/multiSelectUtils";
import { makeChartData, backendEnergyOptions, data } from "./resultUtils";
import { useEffect, useState } from "react";
import { ColourOption } from "../interfaces/interfaces";
import { AreasChart } from "../components/charts/CustomChart";
import { AreasChartWithZoom } from "../components/charts/CustomChartWithZoom";

const SERVER = process.env.REACT_APP_BASE_URL;

export default function Results() {
  const [backendData, setBackendData] = useState({});

  const fetchData = async () => {
    const serverData = await fetch(SERVER + "/api/run_simulation");
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

  const handleChange = (e: ColourOption[]) => {
    let selected = Array.isArray(e) ? e.map((x) => x.value) : [];
    setSelectedOptions(
      backendEnergyOptions.filter((value) => selected.includes(value.label))
    );
  };

  return (
    <>
      <h1 style={{ marginBottom: 10 }}>Energy streams</h1>
      <div style={{ minWidth: "300px" }}>
        <MultiSelectWithOptions
          defaultValues={[backendEnergyOptions[0]]}
          handleChange={handleChange}
          colourOptions={backendEnergyOptions}
          colourStyles={colourStyles}
        />
      </div>

      <h3>Output</h3>

      <AreasChart colourOptions={selectedOptions} data={backendData} />

      <AreasChartWithZoom colourOptions={selectedOptions} data={backendData} />
    </>
  );
}
