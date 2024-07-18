import { MultiSelectWithOptions } from "../components/inputs/MultiSelect";
import { colourStyles } from "../components/inputs/multiSelectUtils";
import { makeChartData, backendEnergyOptions } from "./resultUtils";
import { useEffect, useState } from "react";
import { ColourOption } from "../interfaces/interfaces";
import styles from "./Results.module.scss";
import { AreasChart } from "./CustomChart";
import { AreasChartWithZoom } from "./CustomChartWithZoom";

const SERVER = process.env.REACT_APP_BASE_URL;

export default function Results() {
  const [backendData, setBackendData] = useState({});

  const fetchData = async () => {
    const serverData = await fetch(SERVER + "/results");
    const serverDataJson = await serverData.json();
    const tmp = makeChartData(serverDataJson, ["power", "heat_pump"]);
    setBackendData(tmp);
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
    <div className={styles["results"]}>
      <div className={styles["results-container"]}>
        <div className={styles["header"]}>
          <div className={styles["navbar"]}>
            <p className={styles["link"]}>Tech specs</p>
            <p className={styles["link"]}>Simulation params</p>
            <p
              className={styles["link"]}
              style={{ fontWeight: "bolder", color: "#14b8a6" }}
            >
              Results
            </p>
          </div>
          <h1 style={{ marginBottom: 10 }}>Energy streams</h1>
          <MultiSelectWithOptions
            defaultValues={[backendEnergyOptions[0]]}
            handleChange={handleChange}
            colourOptions={backendEnergyOptions}
            colourStyles={colourStyles}
          />
        </div>
        <h3>Output</h3>
        <div className={styles["chart"]}>
          <AreasChart colourOptions={selectedOptions} data={backendData} />
        </div>
        <div className={styles["chart"]}>
          <AreasChartWithZoom
            colourOptions={selectedOptions}
            data={backendData}
          />
        </div>
      </div>
    </div>
  );
}
