function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  const fN = firstName.charAt(0);
  const lN = lastName.charAt(0);
  let initials = fN + "." + lN;
  return initials
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const rate = ((vatRate / 100) * originalPrice) + originalPrice;
  return +rate.toFixed(2)
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = originalPrice - ((reduction / 100) * originalPrice).toFixed(2);
  return discount;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position;
  let length;
  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitString = word.split("").reverse().join("");
  return splitString;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsReversed = [];
  for (let i in words) {
    let word = words[i].split("").reverse().join("");
    wordsReversed.push(word);
  }
  return wordsReversed;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let result = 0;
  for (let key in users) {
    if (users[key].type === "Linux") {
      result++;
    }
  }
  return result
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let getMean = 0;
  let getScore = 0;
  for (let key in scores) {
    getScore += scores[key];
    getMean++;
  }
  let total = getScore / getMean;
  return +total.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result = n;
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else {
    return result;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};