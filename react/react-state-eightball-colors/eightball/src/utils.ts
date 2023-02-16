
/** returns random number within maxNum parameter */
const randomNum = (maxNum: number): number => Math.floor(Math.random() * maxNum);


/** return a randomly selected element based on argument's parameter length */
function chooseRandom(choices: []): object{
  return choices[randomNum(choices.length)]
}

export { randomNum, chooseRandom };