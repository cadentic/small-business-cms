import React, { Component } from 'react';
import styled from 'styled-components';
import CDrawer from '../Drawer/CDrawer';
import Header from '../Header/Header';
import Layout1 from '../Layout1/Layout1'
import Layout2 from '../Layout2/Layout2'


const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  /* background-color: greenyellow; */
  margin: 0;
  @media (max-width: 900px) {
    width: auto;
    height: 100%;
  }
`
const SubWrapper1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #dbe1e3;
`



class Page1 extends Component {
  render() {
    return (
      <MainWrapper>
        <CDrawer />
        <SubWrapper1>
          <Header />
          <Layout1 />
          <Layout2 />
        </SubWrapper1>
      </MainWrapper>
    )
  }
}

export default Page1