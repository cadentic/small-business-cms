import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileGraph from './ProfileGraph'
import Layout2A from './Layout2A'
import Layout2B from './Layout2B';



const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const SW1 = styled.div`
  width: 25%;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 0px 0px 24px;
  
  @media (max-width: 900px) {
    width: auto;
    margin-right: 24px;
  }
`

const SW2 = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0px 24px 0px 24px;
  
  @media (max-width: 900px) {
    width: auto;
    margin-right: 24px;
  }
`


class Layout2 extends Component {
  render() {
    return (
      <MainWrapper>
        <SW1>
          <ProfileGraph></ProfileGraph>
          <ProfileGraph></ProfileGraph>
          <ProfileGraph></ProfileGraph>
        </SW1>
        <SW2>
          <Layout2A>

          </Layout2A>
          <Layout2B>

          </Layout2B>
        </SW2>


      </MainWrapper>
    )
  }
}

export default Layout2