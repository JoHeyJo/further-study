import React from 'react';

const BASE_URL = "https://deckofcardsapi.com/static/img/"

interface ICard {
  value: string;
  suit: string;
}

/** renders card from API based on id
 * 
 * Props:
 * - id: number
 * - suit : string
 * 
 *  Hand -> Card
 */
function Card({ value, suit }: ICard) {
  const cardUrl = BASE_URL + value + suit + '.png';
  console.log(cardUrl)
  return (
    <div className='Card-card'>
      <img src={cardUrl} alt={value+suit} />
    </div>
  )
}

export default Card;