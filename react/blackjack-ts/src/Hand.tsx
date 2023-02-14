import React from "react";
import Card from './Card'

/** generates random number between 0-51 */
function randomCard(): number {
  return Math.floor(Math.random() * 52);
}

/** create array of 52 strings representing a deck of cards */
function createDeckOfCards(): string[] {
  const value = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
  const suit = ['H', 'S', 'D', 'C'];
  let deck: string[] = [];
  for (let v of value) {
    for (let s of suit) {
      // deck.push(v + s)
      deck = [...deck, v + s]
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

  return (
    <div className="Hand-table">
      <div className="Hand-card">
        <Card id={deck[randomCard()]} />
      </div>
      <div className="Hand-card">
        <Card id={deck[randomCard()]} />
      </div>
    </div>
  )
}

export default Hand;