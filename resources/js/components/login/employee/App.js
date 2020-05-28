import React from 'react';
import './App.css';
import CDrawer from './Components/Drawer/CDrawer'
import Header from './Components/Header/Header'
import Page1 from './Components/CompletePage/Page1'
import Example1 from './Components/Charts/DataComposedChart'
import Example2 from './Components/Charts/Example2'
import Example3 from './Components/Charts/Example3'
import Example4 from './Components/Charts/Example4'
import BarChart1 from './Components/Charts/BarChat'
import ZigChart from './Components/Charts/ZigChart'
import AnimatedProgressProvider from './Components/Charts/RoundChart'
import ProgressBar from './Components/Charts/ProgressBar';
import Main from './component/main'


function App() {

  return (
    <div>
    {/* <CDrawer />
    <Header />
    <Page1 />
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
    <BarChart1 />
    <ZigChart />
    <AnimatedProgressProvider />
    <ProgressBar/> */}
    {/* <Page1 /> */}
    <Main />
    </div>
  );
}


export default App;
if (document.getElementById('employee')) {
  ReactDOM.render( < App /> , document.getElementById('employee'));
}
