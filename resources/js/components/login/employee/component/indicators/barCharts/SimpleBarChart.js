import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { properties } from '../../../constant'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Mainwrapper = styled.div`
    width : 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
`

const Headen = styled.h5`
    margin:0px 0px 7px 30px
`

const data = [
  {
    name: 'Page A', uv: 9.5, pv: 10, amt: 10,
  },
  {
    name: 'Page B', uv: 8.5, pv: 9, amt: 9,
  },
  {
    name: 'Page C', uv: 7.5, pv: 8, amt: 7,
  },
  {
    name: 'Page D', uv: 6.5, pv: 7, amt: 6.5,
  },
  {
    name: 'Page E', uv: 5.5, pv: 6, amt: 5,
  },
  {
    name: 'Page F', uv: 4.5, pv: 5, amt: 4,
  },
  {
    name: 'Page G', uv: 3.5, pv: 4, amt: 3,
  },
];

export default class SimpleBarChart extends PureComponent {

  render() {
    return (
        <Mainwrapper>
            <Headen>LOREM IPSUM DOLOR SIT AMET</Headen>
            <BarChart
                width={350}
                height={175}
                data={this.props.data || data}
                margin={{
                top: 0, right: 0, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid stroke="#999"/>
                <XAxis tickLine={false} tick={false} />
                <YAxis interval="preserveStartEnd" />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="pv" barSize={10} fill={properties.theme1} />
                <Bar dataKey="uv" barSize={10} fill={properties.yellow} />
            </BarChart>
        </Mainwrapper>
      
    );
  }
}
