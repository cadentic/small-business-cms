import React from 'react'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import SettingsIcon from '@material-ui/icons/Settings'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChart, faCube } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


const StyledShowChartIcon = styled(ShowChartIcon)`
    height : 100%;
    color : ${props => 
            props.currentRowIndex === props.index  ?  
             props.hColor : props.color
        };
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`
const StyledMonetizationOnIcon = styled(MonetizationOnIcon)`
    height : 100%;
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`
const StyledSettingsIcon = styled(SettingsIcon)`
    height : 100%;
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`

const StyledMenuIcon = styled(MenuIcon)`
    color : ${props => props.color};
    height : 100%;
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`
const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
    height : 100%;
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    height : 100%;
    font-size : ${props => props.fontSize};
    color : ${props => props.currentRowIndex === props.index ? props.hColor : props.color};
    color : ${ props => 
        props.selectedRowIndex === props.index ?
            props.selectedRowColor : props.color
    };
`

export const Icons = (props) => {
    switch(props.icon){
        case 'chart' : 
            return(
                <StyledShowChartIcon 
                    fontSize="large" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index}
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
        case 'dollar' : 
            return(
                <StyledMonetizationOnIcon 
                    fontSize="large" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index}
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
        case 'setting' : 
            return(
                <StyledSettingsIcon 
                    fontSize="large" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index} 
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
        case 'cube' : 
            return(
                <StyledFontAwesomeIcon 
                    icon={faCube} 
                    fontSize="30px" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index}
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
        case 'menu' : 
            return(
                <MenuIcon 
                    fontSize="large" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index}
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
        case 'arrowback' : 
            return(
                <ArrowBackIosIcon 
                    fontSize="medium" 
                    color={props.color}
                    hColor={props.hColor}
                    currentRowIndex={props.currentRowIndex}
                    index={props.index} 
                    selectedRowIndex={props.selectedRowIndex}
                    selectedRowColor={props.selectedRowColor}
                />
            )
    }
}