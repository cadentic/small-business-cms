import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 1, pv: 1, amt: 1,
  },
  {
    name: 'Page B', uv: 2, pv: 3, amt: 4,
  },
  {
    name: 'Page C', uv: 4, pv: 5, amt: 3,
  },
  {
    name: 'Page D', uv: 2, pv: 2, amt: 4,
  },
  {
    name: 'Page E', uv: 3, pv: 2, amt: 2,
  },
  {
    name: 'Page F', uv: 3, pv: 3, amt: 4,
  },
];

export default class Example1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    return (
      <ComposedChart
        width={160}
        height={70}
        data={data}
        margin={{
          top: 10, right: -20, bottom: -20, left: -35,
        }}
        fontSize={10}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="none" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="uv" barSize={12} fill="#c7f2fb" />
        <Line type="monotone" dataKey="uv" stroke="#00dec5 " />
      </ComposedChart>
    );
  }
}
