import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "../../assets/datasets/data.json";

const Areas = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
        <ReferenceLine
          y={4000}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
          opacity={0.2}
        />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Areas;
