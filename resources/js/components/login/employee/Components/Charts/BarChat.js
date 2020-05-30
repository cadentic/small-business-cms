import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '10', uv: 40, pv: 24, amt: 24,
  },
  {
    name: '20', uv: 30, pv: 13, amt: 22,
  },
  {
    name: '30', uv: 20, pv: 18, amt: 22,
  },
  {
    name: '40', uv: 27, pv: 39, amt: 20,
  },
  
];

export default class BarChart1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
    return (
      <BarChart
        width={350}
        height={150}
        data={data}
        fontSize={10}
        margin={{
          top: 15, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#343e57" background={{ fill: '#eee' }} />
        <Bar dataKey="uv" fill="#c2f7f1" />
      </BarChart>
    );
  }
}
