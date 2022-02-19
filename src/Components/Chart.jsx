import React from "react";
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";


function Chart({ title, data, datakey, datakey2, grid }) {
  return (
    <Charts>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="95%"  aspect={5 / 2}>
        <LineChart data={data} >
        <Legend />
          <XAxis dataKey="name" />
            <YAxis />
          <Line type="monotone" dataKey={datakey} stroke="#2CD9C5" />
          <Line type="monotone" dataKey={datakey2} stroke="#6672FB" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Charts>
  );
}

const Charts = styled.div`
   padding: 0em;
  background-color: #FFFFFF;
`
export default Chart;
