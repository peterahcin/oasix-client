import styled from "@emotion/styled";
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
import { Screens } from "../../styles/screens";

export const ChartContainer = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;

export const Chart = styled.div`
  width: 100%;
  background-color: white;
  align-self: center;
  height: 420px;
  @media screen and (max-width: ${Screens.large}) {
    height: 330px;
  }

  @media screen and (max-width: ${Screens.small}) {
    height: 240px;
  }
`;
