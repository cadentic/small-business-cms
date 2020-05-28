import styled from 'styled-components'
import { properties } from '../../../constant'
import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, LabelList
} from 'recharts';

const Mainwrapper = styled.div`
    width : 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
`

const renderCustomizedLabel = (props) => {
    const {
      x, y, width, height, index, value,
    } = props;
    // const radius = 10;
    if (index > 0 && height < 120)
        return (
            <g>
            {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill={properties.yellow} /> */}
            <rect width={width} height="25" x={x - width} y={y - 40} fill={properties.yellow} />
            <path fill={properties.yellow} d={"M" + (x) + " " + (y - 20) + " L" + (x - width/4) + " " + (y - 20) + " L" + x + " " + y + " Z"} />
            <text x={x - width/2 } y={y - 25} fill="#fff" textAnchor="middle" dominantBaseline="middle">
            {value}
            </text>
        </g>
        );
    else
        return null;
  };

const data = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Page B', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Page C', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
  },
  {
    name: 'Page F', uv: 1400, pv: 680, amt: 1700,
  },
];

export default class CompositLineBar extends PureComponent {

  render() {
    return (
        <Mainwrapper>
            <ComposedChart
                width={450}
                height={200}
                data={this.props.data || data}
                margin={{
                top: 0, right: 0, bottom: 0, left: 0,
                }}
            >
                <CartesianGrid stroke="#999" />
                <XAxis dataKey="name" tick={false} padding={{ left: 40, right: 40 }}/>
                <YAxis/>
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="uv" barSize={50} fill={properties.orange} barGap="20%" >
                    <LabelList dataKey="amt" content={renderCustomizedLabel} />
                </Bar>
                <Line type="linear" dot={false} dataKey="uv" stroke="#000" />
            </ComposedChart>
        </Mainwrapper>
      
    );
  }
}