import React, { Component } from 'react'
import styled from 'styled-components'
import ImageAvatars from '../common/header/avatar';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { properties } from '../../constant'
import './css/profileSummary.css'

const Mainwrapper = styled.div`
    width : 100%;
    margin-bottom: 10px;
`

const RW = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
`

const AvtarCircle = styled.div`
  width : 32px;
  height: 32px;
  border-radius: 50%;
  border: #E3E7E8 2px solid;
  display: flex;
  margin-right : 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const AvtarName = styled.h5`
  font-size: 12px;
  margin: 0px
`

const Text = styled.span`
  font-size: 12px;
  margin: 0px;
  display: flex;
  align-items: center;
`

const Location = styled(LocationOnIcon)`
    color: ${properties.yellow};
`

class profileSummary extends Component {
    render(){
        return(
            <Mainwrapper className="profile">
                <RW>
                    <AvtarCircle>
                        <ImageAvatars size="smaller"/>
                    </AvtarCircle>
                    <AvtarName>
                        { this.props.name || 'Taye APATA'}
                    </AvtarName>
                    
                    <Text>
                        <Location>dropdown</Location>
                        { this.props.city || 'City'}
                    </Text>
                    <Button variant="outlined" size="small">{"Lorem"}</Button>
                    <Button variant="contained" size="small" endIcon={<ArrowDropDownIcon>dropdown</ArrowDropDownIcon>}> Lorem Ipsum </Button>
                </RW>
            </Mainwrapper>
        )
    }
}


export default profileSummary