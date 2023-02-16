import React, { useState } from "react";
import {messages} from './messages'

function Eightball() {
  const [answer, setAnswer] = useState();
  return (
    <div className="Eightball-sphere">
      <div className="Eightball-message"></div>
    </div>
  )
}

export default Eightball;