import React, { useState } from "react";
import './Eightball.css';
import { ranNum } from './utils'


interface Ioption {
  msg: string;
  color: string;
}

const defaultOption: Ioption = { msg: "Think of a question", color: "black" };


/** Eightball component
 * 
 * state: answer => {msg:string, color: string}
 * 
 * Eightball -> App
 */

function EightBall() {
  const [answer, setAnswer] = useState<Ioption>(defaultOption);

  /** changes the color msg when eightball is clicked */
  function shakeEightball() {
    setAnswer(defaultColors[ranNum(defaultColors.length)])
    console.log(answer)
  }

  return (
    <div className="EightBall-interface">
      <div className="EightBall-sphere"
        onClick={shakeEightball}
        style={{backgroundColor: answer.color}}>
        <div className="EightBall-text">
          {answer.msg}
        </div>
      </div>
    </div>
  );
}

export default EightBall;

const defaultColors: Ioption[] = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]
