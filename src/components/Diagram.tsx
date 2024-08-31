import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import DiagramLegend from './DiagramLegend';

interface IPieChartProps {
  data: { name: string, value: number, color: string }[];
  width?: number | string;
  height?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  dataKey?: string;
}

const Diagram: React.FC<IPieChartProps> = ({
  data, width = "100%", innerRadius = 0, outerRadius = "100%", dataKey = "value"
}) => {
  console.log('PX: ', window.devicePixelRatio);
  const baseLineHeight = 30;
  const height = 290;
  const devicePixelRatio = window.devicePixelRatio || 1;
  const additionalHeight = data.length * baseLineHeight * devicePixelRatio;

  return (
    <ResponsiveContainer width={width} height={height + additionalHeight}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend content={<DiagramLegend />} layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Diagram;
