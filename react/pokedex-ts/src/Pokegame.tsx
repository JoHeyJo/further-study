import React from 'react';
import { IPokedex } from './interfaces';
import Pokedex from './Pokedex';

const ranNum = (maxNum: number): number => Math.floor(Math.random() * maxNum)

function Pokegame({ pokemon }: IPokedex) {

  const dexSize = pokemon.length;

  function pullCards() {
    const hand = [];
    while (hand.length < 4) {
      hand.push(pokemon[ranNum(pokemon.length)])
    }
  }

  const hand1 = pullCards();
  const hand2 = pullCards();

  return (
    <div>
      <div><Pokedex pokemon={hand1}/></div>
      <div><Pokedex pokemon={hand2}/></div>
    </div>
  )
}

export default Pokegame