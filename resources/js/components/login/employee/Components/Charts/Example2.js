import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Page B', uv: 368, pv: 967, amt: 1506,
  },
  {
    name: 'Page C', uv: 597, pv: 1098, amt: 989,
  },
  {
    name: 'Page D', uv: 580, pv: 1200, amt: 1228,
  },
  {
    name: 'Page E', uv: 620, pv: 1108, amt: 1100,
  },
  {
    name: 'Page F', uv: 700, pv: 680, amt: 1700,
  },
];

export default class Example2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    return (
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="none" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#c7f2fb" />
        <Line type="monotone" dataKey="uv" stroke="#00dec5 " />
      </ComposedChart>
    );
  }
}
