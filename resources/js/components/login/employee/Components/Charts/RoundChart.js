import React from "react";
import { render } from "react-dom";

// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

// Can use browser detection logic here to determine this instead
const needDominantBaselineFix = true;


const CircularProgress = () => (
  <div >
    <div style={{ width: "70px" }}>
      <CircularProgressbar
        value={percentage}
        // borderBlockStartColor={}
        text={
          <tspan
            style={{ webkitTextFillColor:"green" ,alignmentBaseline: "hanging", fontSize: "30px", }}
            dy={needDominantBaselineFix ? -15 : 0}>{percentage}%</tspan>
        }
      />
    </div>
  </div>
);

render(<CircularProgress />, document.getElementById("root"));
export default CircularProgress