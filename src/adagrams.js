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

  generateTileBag() {
    let tileBag = [];

    for (let letter in POOL) {
      let numCount = POOL[letter];

      for ( let i = 0; i < numCount; i += 1 ) {
        tileBag.push(letter);
      }
    }
    return tileBag;
  },


  drawLetters() {

    let tileBag = Adagrams.generateTileBag();
    console.log(tileBag)
    // array of letters

    // for loop
    // Implement this method for wave 1
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
