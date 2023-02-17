import React from 'react';
import Box from './Box';
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

  const boxes = defaultColors.map(color => <Box color={color} />)
  return (
    <div className='Container-box'>
      {boxes}
    </div>
  )
}

export default Container;