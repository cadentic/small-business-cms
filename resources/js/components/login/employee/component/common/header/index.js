import React, { Component } from 'react'
import styled from 'styled-components'
import { properties } from '../../../constant'
import Logo from '../../../assets/logo.jpg'
import { ButtonComp } from '../button'
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuListComposition from './profile'
import ImageAvatars from './avatar';

const MainWrapper = styled.div`
    width : 100%;
    height : 60px;
    background-color : #fefefa;
    display : flex;
    align-items : center;
    min-width : 950px;
`

const LeftBar = styled.div`
    width : 70%;
    height : 100%;
    /* background-color : orange; */
    display : flex;
    flex-direction :row;
    justify-content : space-between;
`

const LogoWrapper = styled.div`
    width : 100px;
    /* background-color : green; */
    display : flex;
    justify-content : center;
    align-items : center;
    background-image : ${props => `url(${props.bgImage})` };
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center;
`
const ButtonWrapper = styled.div`
    width : 100px;
    /* background-color : green; */
    display : flex;
    justify-content : center;
    align-items : center;
    padding-right : 30px;
`


const MessageIconW = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  /* flex-direction: column;
  @media (max-width: 360px) {
  width: 19px;
} */
`
const MessageIcon = styled.div`
  height: 100%;
  width: 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction :row;
  cursor: pointer;
`
const MessageIconT = styled.div`
    width: 18px;
    height: 18px;
    background-color: ${properties.theme1} !important;
    color: white;
    display: flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    border-radius: 9px;
    font-size: 60%;
    font-weight: 600;
    text-align: center;
    position : relative;
    left : -10px;
    top : -10px;   
    cursor: pointer;
`
const NotificationIconW = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content : center;
  /* margin-right : 20px; */
  /* flex-direction: column;
  /* background-color: blue; */
  /* @media (max-width: 360px) {
  width: 19px;
} */ */
`
const NotificationIcon = styled.div`
  height: 100%;
  width: 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  cursor: pointer;
`

const NotificationIconT = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${properties.theme1} !important;
  color: white;
  display: flex;
  flex-direction : row;
  justify-content : center;
  align-items : center;
  border-radius: 9px;
  font-size: 60%;
  font-weight: 600;
  text-align: center;
  position : relative;
  left : -10px;
  top : -10px;    
  cursor: pointer;
`
const AvtarCircle = styled.div`
  width : 40px;
  height: 40px;
  border-radius: 50%;
  border: #E3E7E8 2px solid;
  display: flex;
  margin-right : 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`


const MiddleBar = styled.div`
    width : 10%;
    height : 100%;
    /* background-color : blue; */
    border-left : 2px solid ${properties.shadow1};
    border-right : 2px solid ${properties.shadow1};
    display : flex;
    justify-content : center;
    align-items : center;
    /* padding-left : 20px;
    padding-right : 20px; */
`
const RightBar = styled.div`
    width : 20%;
    height : 100%;
    display : flex;
    justify-content : flex-end;
    margin-right : 20px;
    align-items : center;    
    /* background-color : black; */
`

class Header extends Component {
    render(){
        return(
            <MainWrapper>
                <LeftBar>
                    <LogoWrapper
                        bgImage={Logo}
                    />   
                    <ButtonWrapper>
                        <ButtonComp>
                            Button
                        </ButtonComp>
                    </ButtonWrapper> 
                </LeftBar>
                <MiddleBar>
                    <MessageIconW>
                        <MessageIcon>
                            <EmailIcon style={{ color: "#d9d9d9" }} />
                            <MessageIconT >
                            27
                            </MessageIconT>
                        </MessageIcon>
                    </MessageIconW>
                    <NotificationIconW>
                        <NotificationIcon>
                            <NotificationsIcon style={{ color: "#d9d9d9" }} />
                            <NotificationIconT>
                                6
                            </NotificationIconT>
                        </NotificationIcon>
                    </NotificationIconW>
                </MiddleBar>
                <RightBar>
                    <AvtarCircle>
                    <ImageAvatars />
                    </AvtarCircle>
                    <MenuListComposition />
                </RightBar>
            </MainWrapper>
        )
    }
}

export default Header