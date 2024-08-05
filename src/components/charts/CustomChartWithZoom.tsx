import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "../../menus/Results.module.scss";
import * as S from "./Charts.styled";
import { ColourOption } from "../../interfaces/interfaces";

interface AreasProps {
  colourOptions: ColourOption[];
  data: any;
}

export const AreasChartWithZoom: React.FC<AreasProps> = (props: AreasProps) => {
  return (
    <S.Chart>
      <S.ChartContainer>
        <AreaChart
          onMouseDown={(e) => console.log(e)}
          data={props.data}
          margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
        >
          <XAxis dataKey="timestamp" allowDataOverflow />
          <YAxis
            label={{ value: "[kWh]", angle: -90, position: "insideLeft" }}
            // unit={" kWh"}
            allowDataOverflow
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend margin={{ top: -130 }} />
          {props.colourOptions.map((value) => {
            return (
              <Area
                key={value.label}
                type="monotone"
                dataKey={value.label}
                stroke={value.color}
                fill={value.color}
                opacity={0.5}
              />
            );
          })}
        </AreaChart>
      </S.ChartContainer>
    </S.Chart>
  );
};
