import allPatterns from "./patternsList";

const arrays2DEqual = (a: number[][], b: number[][]) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }

  return true;
};

const maskChecker = (mask: number[][], needToCheck: number[][]) => {
  let icon = null;
  for (let i = 0; i < mask.length; i++) {
    for (let j = 0; j < mask[i].length; j++) {
      if (mask[i][j] === 1) {
        if (icon === null) {
          icon = needToCheck[i][j];
        } else if (icon !== needToCheck[i][j]) {
          return false;
        }
      }
    }
  }

  return true;
};

//Returns masks that need to be animated as found patterns in correct order
const patternsChecker = (result: number[][]) => {
  let availablePatterns = allPatterns.slice();
  const answer: number[][][] = [];

  const block = (pattern: number[][]) => {
    for (let i = 0; i < availablePatterns.length; i++) {
      if (arrays2DEqual(pattern, availablePatterns[i].mask)) {
        availablePatterns.splice(i, 1);
        break;
      }
    }
  };

  //Add to final answer all of working patterns and at the same time remove all of blocked ones
  for (let i = 0; i < availablePatterns.length; i++) {
    if (maskChecker(availablePatterns[i].mask, result)) {
      answer.unshift(availablePatterns[i].mask);
      for (let maskToBlock of availablePatterns[i].blockedMasks) {
        block(maskToBlock);
      }
    }
  }

  return answer; //return all existing unblocked patterns
};

export default patternsChecker;

/*
ToDo:
maskCheck() - in result look for pattern with given mask                -DONE
allCombinations - const with all combinations                           -DONE
##animateCombination() - show combination that was on screen            -
block() - remove combination from possible ones                         -DONE
lines() - gives masks on given parametrs                                -ABANDONED
patternsCheck() - gives working combinations on given result            -DONE
*/
