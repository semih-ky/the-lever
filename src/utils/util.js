import { LEVER_LENGTH } from '../constants/constants';

const X = LEVER_LENGTH / 2;
const UNITS = new Array(X).fill(null).map((_, i) => i + 1);

export function checkWin(userBlock, pcBlock) {
  const userF = userBlock.weight;
  const pcF = pcBlock.weight;

  const userCol = userBlock.column;
  const pcCol = pcBlock.column;

  const userX = X - userCol + 1;
  const pcX = pcCol;

  let userFx = userF * userX;
  let pcFx = pcF * pcX;

  let fallSide = '';
  if (userFx > pcFx) fallSide = 'user';
  if (userFx < pcFx) fallSide = 'pc';

  return {
    fallSide,
    isWin: userFx === pcFx,
  };
}

export function randomizeBlocks() {
  let count = 0;
  const pcF = Math.floor(Math.random() * 30) + 1;
  const pcX = Math.floor(Math.random() * X) + 1;
  const pcFx = pcF * pcX;

  UNITS.forEach((val) => {
    if (pcFx % val === 0) {
      count += 1;
    }
  });

  if (count < 3) {
    return randomizeBlocks();
  }

  let possibleUserWeights = [];
  UNITS.forEach((val) => {
    if (pcFx % val === 0) {
      let weight = pcFx / val;
      possibleUserWeights.push(weight);
    }
  });

  const userWeights = possibleUserWeights.filter((weight) => weight !== pcF);
  const userWeightIndex = Math.floor(Math.random() * userWeights.length);

  return {
    pcBlock: {
      pcColumn: pcX,
      pcWeight: pcF,
    },
    userBlock: {
      userWeight: userWeights[userWeightIndex],
    },
  };
}
