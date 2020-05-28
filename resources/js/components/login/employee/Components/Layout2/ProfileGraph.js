import React, { Component } from 'react';
import styled from 'styled-components';
import ImageAvatars from './ProfilePhoto'
import RoomIcon from '@material-ui/icons/Room';
import Example1 from '../Charts/DataComposedChart'




const MainWrapper = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  border-radius: 15px;
  background-color:white;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 900px) {
    flex-direction: row;
  }
`
const SW1 = styled.div`
  height: auto;
  width: 60%;
  display: flex;
  /* justify-content: baseline; */
  /* align-items: center; */
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 900px) {
    width: 50%;
    margin-right: 24px;
  }
`

const SW2 = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;
  height: 65px;
  width: 100px;
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 50%;
    margin-right: 24px;
  }
`
const SW2A = styled.div`
  width: 100px;
  height: 70px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    height: auto;
    width: 50%;
    justify-content: center;
    align-items: center
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-right: 24px;
  }
`
const AvtarCircle = styled.div`
  width : 42px!important;
  height: 30px!important;
  border-radius: 50%;
  border: #E3E7E8 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ProfileText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ProfileTextName = styled.div`
  margin-left: 5px;
  font-size: 10px;
  margin-bottom: 5px;
`

const ProfileTextLocation = styled.div`
  margin-left: 5px;
  font-size: 8px;
`

const SW2B = styled.div`
  width: 100%;
  height: 45px;
  font-size: 8px;
  @media (max-width: 1200px) {
    height: auto;
    width: auto;
    justify-content: center;
    align-items: center
  }
`
class ProfileGraph extends Component {
  render() {
    return (
      <MainWrapper>
        <SW1>
          <Example1/>
        </SW1>

        <SW2>
          <SW2A>
            <AvtarCircle>
              <ImageAvatars />
            </AvtarCircle>
            <ProfileText>
              <ProfileTextName>Lorem ipsum</ProfileTextName>
              <ProfileTextLocation>
                <RoomIcon style={{ fontSize: 10 }} />
                Sun City
                </ProfileTextLocation>
            </ProfileText>
          </SW2A>

          <SW2B>
            Lorem ipsum dolor sit amet, consectetur
          </SW2B>
        </SW2>
      </MainWrapper>
    )
  }
}


export default ProfileGraph