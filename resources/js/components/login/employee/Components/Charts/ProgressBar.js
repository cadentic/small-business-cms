import React, { Component } from 'react';
import styled from 'styled-components';
import Progress from 'react-progressbar';

const ProgressD = styled.div`
  width: 90%;
  height: 100%;
  color: red;
  background-color: #b6ede7;
  border-radius: 15px;


`

class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressD>
        <Progress completed={75} />
      </ProgressD>
    )
  }
}

export default ProgressBar