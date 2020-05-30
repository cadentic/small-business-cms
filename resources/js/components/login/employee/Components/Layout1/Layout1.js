import React, { Component } from 'react';
import styled from 'styled-components';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ProgressBar from '../Charts/ProgressBar'
import CircularProgress from '../Charts/RoundChart'


const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  
`
const SW1 = styled.div`
  width: 70%;
  height: auto;
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: auto;
    margin: 24px;
  }

`
const SW11 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    height: 100%;
    flex-wrap: wrap;
  }

`
const SW1Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #00dec5;
  }
  &:focus {
   background-color: #00dec5;
  };
`

const SW12 = styled.div`
  height: auto;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: row;
   @media (max-width: 900px) {
    flex-direction: column;
    
  }
`
const SW12A = styled.div`
  height: auto;
  font-size: 12px;
  padding-left: 25px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const SW12Text = styled.div`
  height: auto;
  width: auto;
  font-size: 10px;
  margin-top: 5px;
`
const SW12CircleBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  
  @media (max-width: 900px) {
   width: 100%;
   padding-bottom: 10px;
  }
`
const SW2 = styled.div`
  width: 30%;
  height: auto;
  background-color: white;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
    @media (max-width: 900px) {
    width: auto;
    height: auto;
    margin-left: 24px;
    
  }
`
const SW2A = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
`
const SW2ATB = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
`
const SW2AT = styled.div`
  width: 50%;
  font-size: 10px;
  margin: 0;
  margin-top: 25px;
  margin-left: 15px;
   @media (max-width: 900px) {
    margin-top: 0px;
  }
`
const SW2ATA = styled.div`
  width: 50%;
  font-size: 8px;
  margin: 0;
  margin-top: 25px;
  margin-left: 15px;
  float: right;
  @media (max-width: 900px) {
    margin-top: 0px;
  }
`
const SW2ATG = styled.div`
   height: 10px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 5px;
`

const SW2B = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
`

const SW2BG = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SW2BT = styled.div`
  width: 35%;
  margin: 10px; 
  font-size: 7px;
  height: auto;
`

class Layout1 extends Component {
  render() {
    return (
      <MainWrapper>
        <SW1>
          <SW11>
            <SW1Circle>
              <AssessmentIcon color="disabled" fontSize="large" />
              Lorem Ipsum
            </SW1Circle>
            <SW1Circle>
              <AssessmentIcon color="disabled" fontSize="large" />
              Lorem Ipsum
            </SW1Circle>
            <SW1Circle>
              <AssessmentIcon color="disabled" fontSize="large" />
              Lorem Ipsum
            </SW1Circle>
            <SW1Circle>
              <AssessmentIcon color="disabled" fontSize="large" />
              Lorem Ipsum
            </SW1Circle>
            <SW1Circle>
              <AssessmentIcon color="disabled" fontSize="large" />
              Lorem Ipsum
            </SW1Circle>
          </SW11>
          <SW12>
            <SW12A>
              <SW12Text>
                <b>Lorem Ipsum</b>
                <p> Lorem Ipsum dolor sit amet, consectuer adipicising elit </p>
              </SW12Text>
              <SW12Text>
                <b >Lorem Ipsum</b>
                <p> Lorem Ipsum dolor sit amet, consectuer adipicising elit </p>
              </SW12Text>
            </SW12A>
            <SW12CircleBox>
              <CircularProgress />
              <CircularProgress />
              <CircularProgress />
              <CircularProgress />
              <CircularProgress />
            </SW12CircleBox>
          </SW12>
        </SW1>
        <SW2>
          <SW2A>
            <SW2ATB>
              <SW2AT>
                <h4 style={{ margin: "0px" }}>Lorem Ipsum</h4>
              </SW2AT>
              <SW2ATA>
                <p style={{ margin: "0px", float: "right", marginRight: "15px" }}> Lorem Ipsum dolor sit</p>
              </SW2ATA>
            </SW2ATB>

            <SW2ATG>
              <ProgressBar />
            </SW2ATG>
          </SW2A>
          <SW2A>
            <SW2ATB>
              <SW2AT>
                <h4 style={{ margin: "0px" }}>Lorem Ipsum</h4>
              </SW2AT>
              <SW2ATA>
                <p style={{ margin: "0px", float: "right", marginRight: "15px" }}> Lorem Ipsum dolor sit</p>
              </SW2ATA>
            </SW2ATB>

            <SW2ATG>
              <ProgressBar />
            </SW2ATG>
          </SW2A>


          <SW2B>
            <SW2BG> Zoom Graph </SW2BG>
            <SW2BT>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </SW2BT>
          </SW2B>
        </SW2>
      </MainWrapper>
    )
  }
}

export default Layout1