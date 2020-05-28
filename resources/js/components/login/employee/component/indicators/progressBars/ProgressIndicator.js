import React, { Component } from 'react'
import styled from 'styled-components'
import { properties } from '../../../constant'
import Progress from 'react-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/progressBar.css';

const Mainwrapper = styled.div`
    width : 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
`

const RW = styled.div`
    display: flex;
    flex-direction: row;
`

const LProgress = styled.div`
    margin: 7px 0px
`

const ProgressD = styled.div`
  width: 100%;
  color: red;
  background-color: ${props => props.color || properties.lightGray};
  border-radius: 15px;
`

const LProgressTextTitle = styled.h2`
    margin: 12px 0px;
    font-size: 12px;
    font-weight: lighter
`

const Indicator = styled.div`
    width: 30px;
    height:30px;
    border-radius:50%;
    background: ${props => props.color || 'rgba(0, 255, 0, 0.5)' };
    position:absolute;
    top:-13px;
    right:-15px;
    z-index: 1
`

const ColorProgress = styled(Progress)`
    height:5px;
`

const percentage = 0;

class ProgressIndicator extends Component {
    data = [
        {lPercentage: 34, strokeColor: properties.orange},
        {lPercentage: 83, strokeColor: properties.theme3},
        {lPercentage: 57, strokeColor: properties.theme1},
    ];

    render(){
        const _data = this.props.data || this.data;
        return(
            <Mainwrapper>
                {
                    _data.map( data => {
                        return (
                            <LProgress>
                                <RW>
                                    <LProgressTextTitle>
                                        { data.title || "Lorem Ipsum"}
                                    </LProgressTextTitle>
                                </RW>
                                <RW>
                                    <ProgressD >
                                        <ColorProgress completed={data.lPercentage || 45} color={data.strokeColor} className="c-indicator" >
                                            <Indicator className="p-indicator" color={data.strokeColor}></Indicator>
                                        </ColorProgress>
                                    </ProgressD>
                                </RW>
                            </LProgress>
                        )
                    })
                }
            </Mainwrapper>
        )
    }
}


export default ProgressIndicator