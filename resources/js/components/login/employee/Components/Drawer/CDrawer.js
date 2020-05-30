import React, { Component } from 'react';
// import './CDrawer.css';
import styled from 'styled-components';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Box } from 'react-feather';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Menu from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const MainWrapper = styled.div`
  width : ${props => props.openClose ? "180px" : "70px"};
  height: 100vh;
  /* background-color: violet; */
  transition : all 0.3s;
`
const MenuButton = styled.div`
  width : auto;
  height: 40px;
  /* background-color: black; */
  margin: 10px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content : flex-end;
`
const MenuIconTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  color: #3c3c3c;
`

const MenuWrapper = styled.div`
  width : ${props => props.openClose ? "auto" : "65px !important" };
  height: 50px;
  border-color: white;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: white;
  border-right: transparent 5px solid;
  &:hover {
    border-right: #00bfe6 5px solid;
    color: #00bfe6;
  }
  &:focus {
    border-right: #00bfe6 5px solid !important;
    color: #00bfe6;
  }
   @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
   
  }
`

const MenuIcons = styled.div`
  width : 40px;
  height: 40px;
  background-color: white;
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #868686;
  
  &:hover {
    color: #00bfe6;
  }
  &:focus {
    color: #00bfe6;
  }
`
const MenuName = styled.div`
  width : ${props => props.openClose ? "50px !important" : "0px !important"};
  height: 40px;
  /* margin-left: 20px; */
  font-size : ${props => props.openClose ? "13px" : "0px"};
  /* background-color: white; */
  display: ${props => props.openClose ? "flex" : "none"};;
  align-items: center;
  color: #868686;
  &:hover {
    color: #00dec5;
  }
  &:focus {
   color: #00dec5;
  };
  transition : all 1s;
    @media (max-width: 700px) {
    margin-left: 20px;
    width: 100%;
    /* border-bottom: #00bfe6 1px solid ; */
    margin-bottom: 20px;
  }
`
class CDrawer extends Component {
  state = {
    openClose: false,
  }

  onClickDrawer = () => {
    this.setState({ openClose: !this.state.openClose })
  }

  render() {
    return (
      <MainWrapper
        openClose={this.state.openClose}
      >

        <MenuButton>
          <MenuIconTop onClick={this.onClickDrawer}>
            {
              this.state.openClose ? <ArrowBackIosIcon /> : <Menu fontSize="large" />
            }
          </MenuIconTop>
        </MenuButton>


        <MenuWrapper openClose={this.state.openClose}>
          <MenuIcons>
            <ShowChartIcon style={{ borderBottom: "1px solid", borderLeft: "1px solid" }} />
          </MenuIcons>
          <MenuName openClose={this.state.openClose}>
            Dashboard
            </MenuName>
        </MenuWrapper>

        <MenuWrapper openClose={this.state.openClose}>
          <MenuIcons >
            <Box />
          </MenuIcons>
          <MenuName openClose={this.state.openClose}>
            Achievement
            </MenuName>
        </MenuWrapper>

        <MenuWrapper openClose={this.state.openClose}>
          <MenuIcons>
            <MonetizationOnOutlinedIcon />
          </MenuIcons>
          <MenuName openClose={this.state.openClose}>
            Sales
            </MenuName>
        </MenuWrapper>

        <MenuWrapper openClose={this.state.openClose}>
          <MenuIcons>
            <Box />
          </MenuIcons>
          <MenuName openClose={this.state.openClose}>
            Projects
            </MenuName>
        </MenuWrapper>

        <MenuWrapper openClose={this.state.openClose}>
          <MenuIcons>
            <SettingsOutlinedIcon />
          </MenuIcons>
          <MenuName openClose={this.state.openClose}>
            Settings
            </MenuName>
        </MenuWrapper>

      </MainWrapper>

    )
  }
}

export default CDrawer
