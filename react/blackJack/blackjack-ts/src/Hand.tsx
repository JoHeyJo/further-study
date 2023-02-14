import React from "react";
import Card from './Card'

/** generates random number between 0-51 */
function randomCard(): number {
  return Math.floor(Math.random() * 52);
}

interface Ideck {
  value: string;
  suit: string;
}

/** create array of 52 strings representing a deck of cards */
function createDeckOfCards(): Ideck[] {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
  const suits = ['H', 'S', 'D', 'C'];
  let deck: Ideck[] = [];
  for (let v of values) {
    for (let s of suits) {
      // deck.push(v + s)
      // deck = [...deck, v + s]
      deck = [...deck, { value: v, suit: s }]
    }
  }
  return deck;
}

interface IDeck {
  deck: string[];
}

/** Contains individual cards, provides winning condition
 * 
 * Props:
 * - cards: array of card objects
 * 
*/
function Hand() {

  const deck = createDeckOfCards();

  const card1 = deck[randomCard()];
  const card2 = deck[randomCard()];

  const score = +card1.value + +card2.value


  return (
    <div className="Hand-table">
      <div className="Hand-card">
        <Card value={card1.value} suit={card1.suit} />
      </div>
      <div className="Hand-card">
        <Card value={card2.value} suit={card2.suit} />
      </div>
      <div className="Hand-score">{score}</div>
    <div>{score === 21 ? "WINNER" : ''}</div>
    </div>
  )
}

export default Hand;