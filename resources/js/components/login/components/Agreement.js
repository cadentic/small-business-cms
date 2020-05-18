import React from 'react';
import ReactDOM from 'react-dom';

class Agreement extends React.Component{
  render(){
    return (
      <div>hi</div>
    );
  }
}

export default Agreement;

if (document.getElementById('agreement')) {
    ReactDOM.render( <Agreement/> , document.getElementById('agreement'));
}
