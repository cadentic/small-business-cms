import React, { Component } from 'react';
import styled from 'styled-components';
import CDrawer from '../Drawer/CDrawer';
import MenuListComposition from './ProfileDW'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ImageAvatars from './ProfilePhoto'

const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  /* border-bottom: #00bfe6 5px solid; */
  
`
const HeaderWrapper = styled.div`
  width: -webkit-fill-available;
  height: 55px;
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
`
const HeaderWrapper1 = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: red;
  margin: 10px 20px;
`
const HeaderWrapper2 = styled.div`
  width: 14%;
  display: flex;
  flex-direction: row;
  border-left: #E3E7E8 3px solid;
  border-right: #E3E7E8 3px solid;
  justify-content: space-evenly;
  @media (max-width: 1100px) {
   width: 20%;
  }
   @media (max-width: 500px) {
   width: 40%;
  }
`
const MessageIconW = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 360px) {
  width: 19px;
}
`
const MessageIcon = styled.div`
  height: 100%;
  width: 100%;
  align-items : center;
  cursor: pointer;
`
const MessageIconT = styled.div`
    width: 18px;
    height: 18px;
    background-color: #00dec5 !important;
    color: white;
    display: flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    border-radius: 50%;
    font-size: 60%;
    font-weight: 600;
    text-align: center;
    position : relative;
    left : 14px;
    top : 10px;   
    cursor: pointer;
`
const NotificationIconW = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: blue; */
  @media (max-width: 360px) {
  width: 19px;
}
`
const NotificationIcon = styled.div`
  height: 100%;
  width: 100%;
  align-items : center;
  cursor: pointer;
`

const NotificationIconT = styled.div`
  width: 18px;
  height: 18px;
  background-color: #00dec5 !important;
  color: white;
  display: flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  border-radius: 50%;
  font-size: 60%;
  font-weight: 600;
  text-align: center;
  position : relative;
  left : 10px;
  top : 10px;    
  cursor: pointer;
`

const HeaderWrapper3 = styled.div`
  width: 29%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
   width: 39%;
  }
   @media (max-width: 500px) {
   width: 50%;
  }
`
const AvtarCircle = styled.div`
  width : 40px;
  height: 40px;
  border-radius: 50%;
  border: #E3E7E8 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`


class Header extends Component {
  render() {
    return (
      <MainWrapper>
        {/* <CDrawer /> */}
        <HeaderWrapper>
          <HeaderWrapper1>
            <CheckBoxOutlineBlankIcon style={{ fontSize: "40px", color: "#b1b1b1" }} />
            <Button variant="contained" style={{ height: "25px", width: "85px", borderRadius: "100px", backgroundColor: "#00dec5", color: "white", fontSize: "12px", textTransform: "none", textAlign: "center", lineHeight: "0" }} > Button </Button>
          </HeaderWrapper1>
          <HeaderWrapper2>
            <MessageIconW>
              <MessageIcon>
                <MessageIconT >
                  27
                </MessageIconT>
                <EmailIcon style={{ color: "#d9d9d9" }} />
              </MessageIcon>
            </MessageIconW>
            <NotificationIconW>
              <NotificationIcon>
                <NotificationIconT>
                  6
                </NotificationIconT>
                <NotificationsIcon style={{ color: "#d9d9d9" }} />
              </NotificationIcon>
            </NotificationIconW>
          </HeaderWrapper2>
          <HeaderWrapper3>
            <AvtarCircle>
              <ImageAvatars />
            </AvtarCircle>
            <MenuListComposition />
          </HeaderWrapper3>
        </HeaderWrapper>

      </MainWrapper>
    )
  }
}

export default Header