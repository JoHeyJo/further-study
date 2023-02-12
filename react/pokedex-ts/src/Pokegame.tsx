import React from 'react';
import { IPokeGame } from './interfaces';
import Pokedex from './Pokedex';

const ranNum = (maxNum: number): number => Math.floor(Math.random() * maxNum)

function Pokegame({ pokemon }: IPokeGame) {

  const dexSize = pokemon.length;

  function pullCards() {
    const hand = [];
    while (hand.length < 4) {
      hand.push(pokemon[ranNum(pokemon.length)])
    }
    return hand
  }

  const hand1 = pullCards();
  const hand2 = pullCards();

  return (
    <div>
      <>HAND1</>
      <div className='Pokegame-hands'><Pokedex
        pokemon={hand1}
        totalXp={hand1.reduce((total, card) => total += card.base_experience, 0)}
      /></div>
      <>HAND2</>
      <div className='Pokegame-hands'><Pokedex
        pokemon={hand2}
        totalXp={hand2.reduce((total, card) => total += card.base_experience, 0)}
      /></div>
    </div>
  )
}

export default Pokegame;