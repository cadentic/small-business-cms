import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { properties } from '../../../constant';

const Mainwrapper = styled.div`
    width : 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
`

const Headen = styled.h5`
    margin:0px 0px 4px 10px
`

const Row = styled.div`
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
`

const Col = styled.div`
    width: ${props => props.width || "-webkit-fill-available"};
    display: flex;
    flex-direction: column;
    padding: 12.5px;
`

const ColoredBar = styled.div`
    width: 100%;
    height: 110px;
    background-image: linear-gradient(${props => props.color}, rgba(225,225,225, 0));
    color: #fff;
    font-size: 14px;
    font-wright:bold;
    display: block
`

const Legend = styled.div`
    width: 100%;
    text-align: center;
    font-size:8px;
    padding: 5px 0px;
    margin: 5px 0px
`

const Headen2 = styled.h5`
    margin:7px 0px 3px 7px
`

const Value = styled.span`
    font-size: 14px;
    margin: 1px 7px
`


export default class SimpleBarChart extends PureComponent {

  render() {
    const _data = this.props.data ? this.props.data : [];
    
    return (
        <Mainwrapper>
            <Headen>LOREM IPSUM DOLOR SIT AMET</Headen>
            <Row>
                {
                    _data.length > 0 ? 
                    <Col width="33.333%">
                        <ColoredBar color={_data[0].strokeColor || properties.orange}>
                            <Headen2>{ _data[0].title  || "LOREM"}</Headen2> 
                            <Value>{ _data[0].recent_value || "0.675"}</Value>
                        </ColoredBar>
                        <Legend>{ _data[0].detail || "lorem ipsum dolor sit amit, consetituer sit."}</Legend>
                    </Col>
                    : ""
                }
                {
                    _data.length > 1 ? 
                    <Col width="33.333%">
                        <ColoredBar color={ _data[1].strokeColor || properties.theme1}>
                            <Headen2>{ _data[1].title  || "LOREM"}</Headen2> 
                            <Value>{ _data[1].recent_value || "0.675"}</Value>
                        </ColoredBar>
                        <Legend>{ _data[1].detail || "lorem ipsum dolor sit amit, consetituer sit."}</Legend>
                    </Col>
                    : ""
                }
                {
                    _data.length > 2 ? 
                    <Col width="33.333%">
                        <ColoredBar color={ _data[2].strokeColor || properties.theme3}>
                            <Headen2>{ _data[2].title  || "LOREM"}</Headen2> 
                            <Value>{ _data[2].recent_value || "0.675"}</Value>
                        </ColoredBar>
                        <Legend>{ _data[2].detail || "lorem ipsum dolor sit amit, consetituer sit."}</Legend>
                    </Col>
                    : ""
                }
            </Row>
        </Mainwrapper>
      
    );
  }
}
