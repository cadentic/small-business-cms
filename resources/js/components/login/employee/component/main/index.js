import React, { Component } from 'react'
import styled from 'styled-components'
import { properties, sidebar } from '../../constant'
import { Icons, StyledDiv, StyledArrowBackIosIcon } from '../common/Icon'
import DefaultPage from '../default'

const MainWrapper = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    height : 100%;
    position : absolute;
    top : 0;
    left : 0;
`

const SideBar = styled.div`
    width : ${props => props.width ? "200px" : "80px"};
    height : 100%;
    display : flex;
    flex-direction : column;
    transition : width 0.35s;
    box-shadow : 0px 0px 10px 10px rgba(0,0,0,1);
`
const SideBarRow = styled.div`
    width : 98%;
    height : 70px;
    display : flex;
    flex-direction : row;
    justify-content : ${props => props.fEnd ? "flex-end" : "flex-start"};
    border-right : 4px solid transparent;

    ${props => props.hover ?`
        &:hover{
            border-right : 4px solid ${properties.theme1};
        }
        `
        :
        ""
    };
    border-right : ${ props => 
        props.selectedRowIndex === props.index ?
            `4px solid ${props.selectedRowColor}` : "red"
    };
`
const SideBarRowLeft = styled.div`
    width : 50px;
    height : 100%;
    display : flex;
    justify-content : ${props => props.sflex ? "flex-start" : "center" };
    align-items : center;
    padding-left : ${props => props.padding ? "22px" : "0px"};
    padding-right : ${props => props.rpadding ? "12px" : "0px"};

`
const SideBarRowRight = styled.div`
    width : ${props => props.width ? "90px" : "0px"};
    height : 60px;
    display : flex;
    justify-content : center;
    align-items : center;
    overflow : hidden;
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    font-weight : 900px;
    font-family: 'Roboto', sans-serif; 
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`

const ContentBody = styled.div`
    width : 100%;
    height : 100%;
    background-color : red;
`

class Main extends Component {

    state = {
        sidebarOCS : false,
        hoverValSidebar : properties.shadow2,
        currentRowIndex : '',
        selectedRowIndex : 0,
        selectedRowColor : properties.transparent
    }

    openDrawer = () => {
        this.setState({ sidebarOCS : !this.state.sidebarOCS })
    }

    setHover = (index) => {
        this.setState({ hoverValSidebar : properties.theme1, currentRowIndex : index })
    }

    unsetHover = (index) => {
        this.setState({ hoverValSidebar : properties.shadow2, currentRowIndex : index })
    }

    selectedMenu = (index) => {
        this.setState({ selectedRowIndex : index})
        this.setState({ selectedRowColor : properties.theme1 })
    }

    iconClicked = (index) => {
        this.setState({ selectedRowIndex : index})
    }

    showContentData = () => {
        switch(this.state.selectedRowIndex){
            case 0 :
                return(<DefaultPage />)
            case 1 :
                return(<DefaultPage />)
                break;
            case 2 :
                return(<DefaultPage />)
                break;
            case 3 :
                return(<DefaultPage />)
                break;
            case 4 :
                return(<DefaultPage />)
                break;    
        }
    }
    render(){
        return(
            <MainWrapper>
                    <SideBar 
                        width={this.state.sidebarOCS}
                    >
                        <SideBarRow
                            fEnd={true}
                        >
                            <SideBarRowLeft
                                onClick={this.openDrawer}
                                padding={false}
                                rpadding={true}
                            >
                                {
                                    this.state.sidebarOCS ?
                                        <Icons 
                                            icon={"arrowback"} 
                                            color={properties.black}
                                            hover={this.state.hoverValSidebar}
                                        />
                                        :
                                        <Icons 
                                            icon={"menu"} 
                                            color={properties.black}
                                            hover={this.state.hoverValSidebar}
                                        />
                                }
                                

                            </SideBarRowLeft>
                        </SideBarRow>
                        {
                            sidebar.map((data,index) => {
                                return(
                                    <SideBarRow
                                        fEnd={false}
                                        hover={this.state.hoverValSidebar}
                                        onMouseOver={() => this.setHover(index)}
                                        onMouseOut={() => this.unsetHover(index)}
                                        onClick={() => this.selectedMenu(index)}
                                        index={index}
                                        currentRowIndex={this.state.currentRowIndex}
                                        selectedRowIndex={this.state.selectedRowIndex}
                                        selectedRowColor={this.state.selectedRowColor}
                                    >
                                        <SideBarRowLeft
                                            onClick={() => this.iconClicked(index)}
                                            sflex={true}
                                            padding={true}
                                        >
                                            <Icons 
                                                icon={data.icon} 
                                                color={properties.shadow2}
                                                hColor={this.state.hoverValSidebar}
                                                index={index}
                                                currentRowIndex={this.state.currentRowIndex}
                                                selectedRowIndex={this.state.selectedRowIndex}
                                                selectedRowColor={this.state.selectedRowColor}
                                            />

                                        </SideBarRowLeft>
                                        <SideBarRowRight
                                            width={this.state.sidebarOCS}
                                            color={properties.shadow2}
                                            hColor={this.state.hoverValSidebar}
                                            index={index}
                                            currentRowIndex={this.state.currentRowIndex}
                                            selectedRowIndex={this.state.selectedRowIndex}
                                            selectedRowColor={this.state.selectedRowColor}
                                        >
                                            {data.value}
                                        </SideBarRowRight>
                                    </SideBarRow>
                                )
                            })
                        }

                    </SideBar>
                    <ContentBody>
                        {this.showContentData()}
                    </ContentBody>
            </MainWrapper>
        )
    }
}

export default Main