import { MultiSelectWithOptions } from "../../inputs/MultiSelect";
import { colourStyles } from "../../inputs/multiSelectUtils";
import {
  backendEnergyOptions,
  TemperatureOptions,
  HeatPumpPerformanceOptions,
} from "./resultUtils";
import { useEffect, useState } from "react";
import { ColourOption } from "../../../interfaces/interfaces";
import { AreasChart } from "../../charts/CustomChart";
// import { AreasChartWithZoom } from "../components/charts/CustomChartWithZoom";
import DatePicker from "react-datepicker";
import * as S from "./Results.styled";
import "react-datepicker/dist/react-datepicker.css";
import { runSimulation } from "../../../api/rest/simulation";
import "./CustomDatePicker.css"; // Custom CSS file
import { SimulationResults } from "../../../api/models/response/simulationResults";

const parseDate = (date: string) => {
  return new Date(
    Number(date.substr(0, 4)),
    Number(date.substr(5, 2)),
    Number(date.substr(8, 2))
  );
};

const filterData = (data: any, startDate: Date, endDate: Date) => {
  return data.filter((d: any) => {
    const date = parseDate(d.timestamp);
    return date >= startDate && date <= endDate;
  });
};

export default function Results() {
  const [backendData, setBackendData] = useState<SimulationResults[]>([]);
  const [displayedData, setDisplayedData] = useState<SimulationResults[]>([]);
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fetchData = async () => {
    const serverData = await runSimulation();
    const tmp = serverData.data;

    const minDateStr = tmp[0]["timestamp"];
    const maxDateStr = tmp[tmp.length - 1]["timestamp"];

    setMinDate(parseDate(minDateStr));
    setMaxDate(parseDate(maxDateStr));

    setStartDate(parseDate(minDateStr));
    setEndDate(parseDate(maxDateStr));
    setBackendData(tmp);
    setDisplayedData(tmp);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState<Array<ColourOption>>([
    backendEnergyOptions[0],
  ]);

  const [selectedTemperatureOptions, setSelectedTemperatureOptions] = useState<
    Array<ColourOption>
  >([TemperatureOptions[0]]);

  const [selectedHPOptions, setSelectedHPOptions] = useState<
    Array<ColourOption>
  >([HeatPumpPerformanceOptions[0]]);

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
      HeatPumpPerformanceOptions.filter((value) =>
        selected.includes(value.label)
      )
    );
  };

  const handleStartDateChange = (date: Date | null) => {
    const tmp = filterData(backendData, date || minDate, endDate);
    setStartDate(date || minDate);
    setDisplayedData(tmp);
  };

  const handleEndDateChange = (date: Date | null) => {
    const tmp = filterData(backendData, startDate, date || maxDate);
    setEndDate(date || maxDate);
    setDisplayedData(tmp);
  };

  return (
    <>
      <S.DatesContainer>
        <S.Info>
          <S.InputLabelText>Start date</S.InputLabelText>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            minDate={minDate}
            maxDate={endDate}
            // calendarContainer={MyContainer}
          />
        </S.Info>
        <S.Info>
          <S.InputLabelText>End date</S.InputLabelText>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            minDate={startDate}
            maxDate={maxDate}
          />
        </S.Info>
      </S.DatesContainer>

      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Energy streams</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[backendEnergyOptions[0]]}
          handleChange={handleChange}
          colourOptions={backendEnergyOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart
        colourOptions={selectedOptions}
        data={displayedData}
        units="Watt"
      />

      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Temperatures</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[TemperatureOptions[0]]}
          handleChange={handleTempertureSelection}
          colourOptions={TemperatureOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart
        colourOptions={selectedTemperatureOptions}
        data={displayedData}
        units="°C"
      />

      <h1 style={{ marginBottom: 10, marginTop: 40 }}>Heat pump performance</h1>
      <div style={{ minWidth: "600px" }}>
        <MultiSelectWithOptions
          defaultValues={[HeatPumpPerformanceOptions[0]]}
          handleChange={handleHPSelection}
          colourOptions={HeatPumpPerformanceOptions}
          colourStyles={colourStyles}
        />
      </div>
      <AreasChart colourOptions={selectedHPOptions} data={displayedData} />

      {/* <AreasChartWithZoom colourOptions={selectedOptions} data={backendData} /> */}
    </>
  );
}
