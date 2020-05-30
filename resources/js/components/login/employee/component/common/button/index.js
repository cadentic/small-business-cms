import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { properties } from '../../../constant'

const StyledButton = styled(Button)`
    border-radius : 30px !important;
    background-color : ${properties.theme3} !important;
    color : ${properties.white} !important;
    font-size : 12px !important;
    width : 100% !important;
`

export const ButtonComp = (props) => {
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}