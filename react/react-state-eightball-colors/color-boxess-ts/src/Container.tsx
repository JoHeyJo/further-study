import React, { useState } from 'react';
import Box from './Box';
import { randomNum, chooseRandom } from './utils';
import './Container.css';


const defaultColors = [
  "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

/** holds all box components
 * 
 * Props:
 * - colors
 * 
 * State:
 * - boxes: []
 */
function Container(){
  const [colors, setColors] = useState<string[]>(defaultColors)

  /** on button click: changes color of selected box */
  function changeColor():void{
    const newColor = chooseRandom(colors);
    const idx = randomNum(colors.length);
    setColors(c => {
      let copy = [...c]
      copy[idx] = newColor
      return copy
    })
  }

  const boxes = colors.map((color,i) => <Box key={i} color={color} />)

  return (
    <div className='Container-box'
    onClick={changeColor}>
      {boxes}
    </div>
  )
}

export default Container;