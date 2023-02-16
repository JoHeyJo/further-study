import React, { useState } from "react";
import { messages } from './messages'
import './Eightball.css'
import { IAnswer } from './interfaces'
import { chooseRandom } from "./utils";

const defaultAnswer: IAnswer = { msg: "Think of a question", color: "black" }

/** Eightball component, renders randomly chosen message
 * 
 * Props:
 * - answers: [{},{},{}...]
 * 
 * State:
 * - answer: {msg: string, color: string}
 */
function Eightball() {
  const [answer, setAnswer] = useState<IAnswer>(defaultAnswer);

  /** sets answer to randomly chosen answer when sphere is clicked */
  function updateAnswer(): void {
    setAnswer(chooseRandom(messages))
  }

  return (
    <div className="EightBall-sphere" style={{ backgroundColor: answer.color }}
      onClick={updateAnswer}>
      <div className="EightBall-text">
        {answer.msg}
      </div>
    </div>
  )
}

export default Eightball;