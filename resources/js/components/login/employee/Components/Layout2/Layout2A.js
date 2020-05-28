import React, { Component } from 'react';
import styled from 'styled-components';
import SwitchesSize from './Switch'
import CircularProgress1 from '../Charts/RoundChart2'

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-right: 24px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const SW = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  @media (max-width: 900px) {
    width: 100%;
    margin-right: 24px;
    margin-bottom: 24px;
    
  }
`

const SW1 = styled.div`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: row;
  
  margin-top: 24px;
  @media (max-width: 900px) {
    width: 100%;
    margin-right: 24px;
    
  }
`
const SW1A = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  margin:0;
  margin-left: 15px;
`
const SW1B = styled.div`
  width: 40%;
`
const SW1BN = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`
const SW1BC = styled.div`
  font-size: 10px;
`
const SW1C = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around
`


const SW2 = styled.div`
  width: 60%;
  margin-left: 24px;
  background-color: white;
  display: flex; 
  flex-direction: column;
  align-content: center;
  border-radius: 15px;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    margin-left: 0px;
    
  }
`
const Graph = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    /* margin: 10px 0px; */
  }
`
const ContentBox = styled.div`
  width: 100%;
  height: 50%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
    @media (max-width: 900px) {
    margin: 10px 0px;
    height: auto;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 10px;
    
  }
  
`
const ContentBox1 = styled.div`
  width: 48%;
  height: 90%;
  border-radius: 15px;
  border: #00bfe6 2px dotted;
  font-size: 14px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 0px 20px;
  @media (max-width: 500px) {
    margin: 0px 10px 10px 10px;
    width: 100%;
  }
`


class Layout2A extends Component {
  render() {
    return (
      <MainWrapper>
        <SW>

          <SW1>
            <SW1A>
              <SwitchesSize></SwitchesSize>
            </SW1A>
            <SW1B>
              <SW1BN>
                Lorem ipsum alt
            </SW1BN>
              <SW1BC>
                Lorem ipsum dolor sit amet, consectetur
            </SW1BC>
            </SW1B>
            <SW1C>
              <SW1BN>
                <CircularProgress1 />
              </SW1BN>

              <SW1BN>
                <CircularProgress1 />
              </SW1BN>
            </SW1C>

          </SW1>


          <SW1>
            <SW1A>
              <SwitchesSize></SwitchesSize>
            </SW1A>
            <SW1B>
              <SW1BN>
                Lorem ipsum alt
            </SW1BN>
              <SW1BC>
                Lorem ipsum dolor sit amet, consectetur
            </SW1BC>
            </SW1B>
            <SW1C>
              <SW1BN>
                <CircularProgress1 />
              </SW1BN>

              <SW1BN>
                <CircularProgress1 />
              </SW1BN>
            </SW1C>

          </SW1>
        </SW>

        <SW2>
          <Graph>
            Lorem Ipsum Graph
          </Graph>
          <ContentBox>
            <ContentBox1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </ContentBox1>
            <ContentBox1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </ContentBox1>
          </ContentBox>
        </SW2>

      </MainWrapper>
    )
  }
}

export default Layout2A