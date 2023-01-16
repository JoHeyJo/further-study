import React, { useState } from "react";
import Box from './Box.js';
import './container.css';


// At the bottom of all of the boxes should be a button labeled “Change”.

// Initially, each box should have a background color chosen from a random list of colors.

// When you click the button:

// it should select a random box
// it should change the background color of that random box to a new color from the possible colors list.
// Before building anything, think about the structure of your React app.This entire thing shouldn’t be one giant component.

const boxSet = [];
for (let i = 0; i < 16; i++) {
  boxSet.push(<Box />)
}

const random = (num) => Math.floor(Math.random() * num);

/** Container holds all boxes and interactions
 * 
 * State:
 * - boxes
 * 
 */
function Container() {
  const [boxes, setBoxes] = useState(boxSet);


  let blah = 0;
  function changeBox() {
    setBoxes(boxes => {
    const box = boxes[random(boxes.length)]
    console.log(boxes);
      return [...boxes];
    });
  }

  return (
    <div className="Container-interface">
      <div className="Container-box">
        {boxes}
      </div>
      <button onClick={changeBox}>Change</button>
    </div>
  )
}

export default Container;

