import React, { Component } from 'react'
import styled from 'styled-components'
import { properties } from '../../../constant'
import Progress from 'react-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const CRProgress = styled.div`
    width: 80px;
    height: 80px;
`

const CRProgressText = styled.div`
    padding-left: 15px;
`
const CRProgressTextTitle = styled.h3`
    margin: 5px 0px;
    font-size: 12px;
    font-weight: bold
`

const CRProgressTextContent = styled.span`
    font-size: 8px;
`
const ProgressD = styled.div`
  width: 100%;
  color: red;
  background-color: ${props => props.color || properties.lightGray};
  border-radius: 15px;
`

const LProgressTextTitle = styled.h2`
    margin: 2px 0px;
    font-size: 14px;
    font-weight: bold
`

const LProgressTextContent = styled.span`
    font-size: 8px;
    text-align: right;
    display: flex;
    width: -webkit-fill-available;
    justify-content: right;
    align-items: center;
    flex-direction: row-reverse;
`

const ColorProgress = styled(Progress)`
    
`

const percentage = 0;

class Default extends Component {
    render(){
        return(
            <Mainwrapper>
                <RW>
                    <CRProgress>
                        <CircularProgressbar value={this.props.cPercentage || percentage} text={`${this.props.cPercentage || percentage}%`} strokeWidth="15" styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Text size
                            textSize: '16px',
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                            // Colors
                            pathColor: this.props.strokeColor || `#467`,
                            textColor: '#000',
                            trailColor: properties.lightGray,
                            backgroundColor: '#fff',
                        })} />

                    </CRProgress>
                    <CRProgressText>
                        <CRProgressTextTitle>
                            {this.props.title || "LOREM IPSUM DOLOR"}
                        </CRProgressTextTitle>
                        <CRProgressTextContent>
                            {this.props.detail || "Lorem ipsum doror sit amet. Consecteteur adipisicing elit, sed"}
                        </CRProgressTextContent>
                    </CRProgressText>
                </RW>
                <RW>
                    <LProgressTextTitle>
                        {this.props.lPercentage || 0}%
                    </LProgressTextTitle>
                    <LProgressTextContent>
                        {this.props.summary || "Lorem ipsum sil"}
                    </LProgressTextContent>
                </RW>
                <RW>
                    <ProgressD >
                        <ColorProgress completed={this.props.lPercentage || 0} color={this.props.strokeColor} />
                    </ProgressD>
                </RW>
            </Mainwrapper>
        )
    }
}


export default Default