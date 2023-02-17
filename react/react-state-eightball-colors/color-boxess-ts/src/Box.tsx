import React from "react";
import './Box.css';
import { IContainer } from './interface'
/** Renders box
 * 
 * Props:
 * - color
 * 
 * Container -> Box
 * 
 */
function Box({ color }: IContainer) {
  return (
    <div
      className="Box-box"
      style={{ backgroundColor: color }}>
      {color}
    </div>
  )
}

export default Box;