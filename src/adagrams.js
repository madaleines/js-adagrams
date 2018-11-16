const POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1
};

const Adagrams = {

  usesAvailableLetters(input, lettersInHand) {

    let splitInput = input.split("")

    let comparedInput = lettersInHand.filter(function(val) {
      return splitInput.indexOf(val) != -1;
    });


    let checkArraysEqual = function arraysEqual(arr1, arr2) {
      if(arr1.length !== arr2.length)
      return false;
      for(let i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
        return false;
      }

      return true;
    }


    return checkArraysEqual(comparedInput, splitInput)

  },


  getTenRandomLetters(neededAmount, tileBag) {
    let tenLetters = [];
    for (let i = 0; i < neededAmount; i += 1) {
      tenLetters.push(tileBag[Math.floor(Math.random()*tileBag.length)]);
    }
    return tenLetters;

  },

  generateTileBag() {
    let tileBag = [];
    for (let letter in POOL) {
      let letterCount = POOL[letter];

      for ( let i = 0; i < letterCount; i += 1 ) {
        tileBag.push(letter);
      }
    }
    return tileBag;
  },


  drawLetters() {
    let neededAmount = 10;
    let tileBag = Adagrams.generateTileBag();
    let tenLetters = Adagrams.getTenRandomLetters( neededAmount, tileBag );
    return tenLetters
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
