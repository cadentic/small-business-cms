import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 40, pv: 24, amt: 24,
  },
  {
    name: 'Page B', uv: 300, pv: 13, amt: 221,
  },
  {
    name: 'Page C', uv: 200, pv: 980, amt: 290,
  },
  {
    name: 'Page D', uv: 278, pv: 390, amt: 200,
  },
  {
    name: 'Page E', uv: 189, pv: 480, amt: 218,
  },
  {
    name: 'Page F', uv: 239, pv: 380, amt: 250,
  },
  {
    name: 'Page G', uv: 349, pv: 430, amt: 210,
  },
];

export default class Example4 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';

  render() {
    return (
      <div style={{ width: 300, height: 200 }}>
        <ResponsiveContainer>
          <AreaChart
            fontSize={10}
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid />
            <XAxis />
            <YAxis />
            {/* <Tooltip />z */}
            <Area dataKey="uv" stroke="#343e57" fill="#c2f7f1" type="linear" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
