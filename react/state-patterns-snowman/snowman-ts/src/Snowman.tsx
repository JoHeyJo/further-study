import React, { useState } from 'react';
import { ISnowman } from './interfaces';

import img0 from './0.png';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';

const images = [img0, img1, img2, img3, img4, img5, img6];

/** Snowman game: plays hangman game with images of a melting snowman
 * 
 * Props:
 * maxWrong: how many wrong moves is a played allowed?
 * images: array of images
 * words: array of words to pick from
 * 
 * Sate:
 * - nWrong: # of wrong guess
 * - guessedLetters: set of all guessed letters
 * - answer: selected secret word
 * 
 *  */

function Snowman({
  // images = [img0, img1, img2, img3, img4, img5, img6],
  words = ['apple'],
  maxWrong = 6,
}: ISnowman) {
  /** by default, allow 6 guesses and use provided gallows images. */

  const [nWrong, setNWrong] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState(() => new Set());
  const [answer, setAnswer] = useState<string>(words[0]);

  /** guessWord: show current-state of word:
   * if guesed letters are {a,p,e}, show } app_e" for "apple"
   */
  function guessedWord(): string[] {
    return answer
      .split("")
      .map(ltr => (guessedLetters.has(ltr) ? ltr : "_"));
  }

  /** handleGuess: handle a guessed letter:
   * - add to guessed letters
   * - if not in answer, increase number-wrong guesses
   */
  function handleGuess(evt: React.ChangeEvent<HTMLInputElement>) {
    // let ltr = (evt.target as HTMLInputElement).value
    let ltr = evt.target.value

    setGuessedLetters(g => {
      const newGuessed = new Set(g);
      newGuessed.add(ltr);
      return newGuessed;
    })
  }

  /** generateButtons: return array of letter buttons to render */
  function generateButtons() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={() => handleGuess}
        disabled-={guessedLetters.has(ltr)}>
        {ltr}
      </button>
    ))
  }

  return (
    <div className='Snowman'>
      <img src={(images)[nWrong]} alt={nWrong.toString()} />
      <p className="Snowman-word">{guessedWord()}</p>
      <p>{generateButtons()}</p>
    </div>

  )
}

export default Snowman;