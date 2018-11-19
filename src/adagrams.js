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

  compareArrays(arr1, arr2) {
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;

    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  },

  usesAvailableLetters(input, lettersInHand) {
    let splitInput = input.split("")

    let comparedInput = lettersInHand.filter(function(val) {
      return splitInput.indexOf(val) != -1;
    });
    return Adagrams.compareArrays(comparedInput, splitInput)
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

  scoreWord(word) {
    let score = 0;
    word = word.toUpperCase();
    word.split("").forEach((letter) => {
      switch(letter) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
        score += 1;
        break;
        case "D":
        case "G":
        score += 2;
        break;
        case "B":
        case "C":
        case "M":
        case "P":
        score += 3;
        break;
        case "F":
        case "H":
        case "V":
        case "W":
        case "Y":
        score += 4;
        break;
        case "K":
        score += 5;
        break;
        case "J":
        case "X":
        score += 8;
        break;
        case "Q":
        case "Z":
        score += 10;
        break;
      }
    });
    if (word.length > 6) {
      score += 8;
    }
    return score;
  },
  highestScoreFrom(words) {
    let bestWord = {"word": null, "score": 0};
    for (let word of words) {
      if (this.scoreWord(word) > bestWord["score"]){
        bestWord["score"] = this.scoreWord(word)
        bestWord["word"] = word
      } else if (this.scoreWord(word) == bestWord["score"]) {
        if (word.length == 10 && bestWord["word"].length != 10) {
          bestWord["word"] = word
        } else if (word.length < bestWord["word"].length && bestWord["word"].length != 10) {
          bestWord["word"] = word
        }
      }
    }
    return bestWord;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
