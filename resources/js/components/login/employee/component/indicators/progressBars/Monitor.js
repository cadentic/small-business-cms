import React, { Component } from 'react'
import styled from 'styled-components'
import { properties } from '../../../constant'
import Progress from 'react-progressbar';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Mainwrapper = styled.div`
    width : 100%;
    padding: 15px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
`

const RW = styled.div`
    display: flex;
    flex-direction: column;
    width : 50%;
    justify-content: center;
    align-items: center;
`

const CRProgress = styled.div`
    width: 100px;
    height: 100px;
`

const CRProgressText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const CRProgressTextContent = styled.span`
    font-size: 8px;
    text-align: center;
    margin: 15px 5px
`

const percentage = 30;

class Monitor extends Component {

    data = [
        {cPercentage: 61, strokeColor: properties.orange},
        {cPercentage: 47, strokeColor: properties.theme1}
    ]
    render(){
        const _data = this.data || this.props.data;
        return(
            <Mainwrapper>
                { 
                _data.map( data => {
                    return (
                        <RW>
                            <CRProgress>
                                <CircularProgressbar value={data.cPercentage || percentage} text={`${data.cPercentage || percentage}%`} strokeWidth="20" styles={buildStyles({
                                    // Text size
                                    textSize: '16px',
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                    // Colors
                                    pathColor: data.strokeColor || `#467`,
                                    textColor: '#000',
                                    trailColor: properties.lightGray,
                                    backgroundColor: '#fff',
                                })} />

                            </CRProgress>
                            <CRProgressText>
                                <CRProgressTextContent>
                                    {data.summary || "Lorem ipsum doror sit amet. Consecteteur."}
                                </CRProgressTextContent>
                                <Button variant="outlined" size="small" endIcon={<ArrowDropDownIcon>dropdown</ArrowDropDownIcon>}>Lorem Ipsum </Button>
                            </CRProgressText>
                        </RW>
                    )
                })
            }
            </Mainwrapper>
        )
    }
}


export default Monitor