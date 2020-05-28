import React from 'react';
import ReactDOM from 'react-dom';

import Main from './component/main'



class Employee extends React.Component{
  render(){
    return (
      <div><Main/></div>
    );
  }
}

if (document.getElementById('employee')) {
  ReactDOM.render( < Employee /> , document.getElementById('employee'));
}
