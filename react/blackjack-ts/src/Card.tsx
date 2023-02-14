import React from 'react';

const BASE_URL = "https://deckofcardsapi.com/static/img/"

interface ICard {
  id: string;
}

/** renders card from API based on id
 * 
 * Props:
 * - id: number
 * - suit : string
 * 
 *  Hand -> Card
 */
function Card({ id }: ICard) {
  console.log('id',id)
  const cardUrl = BASE_URL + id + '.png';
  console.log(cardUrl)
  return (
    <div className='Card-card'>
      <img src={cardUrl} alt={id} />
    </div>
  )
}

export default Card;