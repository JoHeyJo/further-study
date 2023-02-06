import React from "react";

/** Box component
 * 
 * props:
 * - color
 * 
 * Cointainer -> Box
 */

interface IBox {
  color: string
}

function Box({ color }: IBox ){
  return (
    <div className="Box-outline"
    style={{
      width: '120px',
      height: '120px',
      backgroundColor: color,
      padding: '5px'
    }}>
      
    </div>
  )
}

export default Box;