import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../common/header'
import { properties } from '../../constant'
import ProgressMonitor from '../indicators/progressBars/ProgressMonitor';
import Monitor from '../indicators/progressBars/Monitor';
import CompositLineBar from '../indicators/barCharts/CompositLineBar';
import SimpleBarChart from '../indicators/barCharts/SimpleBarChart';
import BarIndicator from '../indicators/barCharts/BarIndicator'
import ProgressIndicator from '../indicators/progressBars/ProgressIndicator';
import ProfileSummary from '../indicators/profileSummary';
import { getProgressBarCurve, getCompositBar, getMonitor, getProgressIndicator, getSimpleBar, getSingleBar, getProfileSummary} from '../../services/dashboard';

const Mainwrapper = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${properties.theme2};
`

const Content = styled.div`
    padding: 12.5px;
`

const Row = styled.div`
    width: -webkit-fill-available;
    display: flex;
    flex-direction: row;
`

const Col = styled.div`
    width: ${props => props.width || "-webkit-fill-available"};
    display: flex;
    flex-direction: row;
    padding: 12.5px;
`

const StackedCol = styled(Col)`
flex-direction: column;
`

class Default extends Component {

    constructor(props) {
        super(props)

        this.state = {
            progressBarCurve: [],
            singleBar: [],
            simpleBar: [],
            compositBar: [],
            progressIndicator: [],
            monitor: [],
            profileSummary: []
        }
    }


    componentDidMount() {

        getProgressBarCurve().then( res => {
            this.setState({
                progressBarCurve: res.data
            })
        }).catch( res => {
            console.log(res)
        });
        
        getCompositBar().then( res => {
            this.setState({
                compositBar: res.data
            })
        }).catch( res => {
            console.log(res)
        });


        getMonitor().then( res => {
            this.setState({
                monitor: res.data
            })
        }).catch( res => {
            console.log(res)
        });
    

        getProgressIndicator().then( res => {
            this.setState({
                progressIndicator: res.data
            })
        }).catch( res => {
            console.log(res)
        });

        getSimpleBar().then( res => {
            this.setState({
                simpleBar: res.data
            })
        }).catch( res => {
            console.log(res)
        });

        getSingleBar().then( res => {
            this.setState({
                singleBar: res.data
            })
        }).catch( res => {
            console.log(res)
        });

        getProfileSummary().then( res => {
            this.setState({
                profileSummary: res.data
            })
        }).catch( res => {
            console.log(res)
        });
        
    }


    render(){
        return(
            <Mainwrapper>
                <Header />
                <Content>
                    <Row>
                        {
                            this.state.progressBarCurve.map( res => {
                                return (
                                    <Col width="25%">
                                        <ProgressMonitor strokeColor={res.strokeColor} cPercentage={ res.cPercentage} lPercentage={res.lPercentage} legend={res.legend} detail={ res.legend} title={res.title} />
                                    </Col>
                                )
                            })
                        }
                    </Row>

                    <Row>
                        <Col width="30%">
                            <BarIndicator data={ this.state.singleBar } />
                        </Col>
                        <Col width="30%">
                            <SimpleBarChart data={ this.state.simpleBar } />
                        </Col>
                        <Col width="40%">
                            <CompositLineBar data={ this.state.compositBar } />
                        </Col>
                    </Row>

                    <Row>
                        <StackedCol width="40%">
                        {
                            this.state.profileSummary.map( res => {
                                return (
                                    <ProfileSummary name={res.name} city={res.city} />
                                )
                            })
                        }
                        </StackedCol>
                        <Col width="30%">
                            <ProgressIndicator data={ this.state.progressIndicator } />
                        </Col>
                        <Col width="30%">
                            <Monitor data={ this.state.monitor } />
                        </Col>
                    </Row>
                </Content>
            </Mainwrapper>
        )
    }
}


export default Default