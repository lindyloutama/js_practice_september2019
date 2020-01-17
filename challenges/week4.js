function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = nums.filter(number => {
    return number < 1;
  });
  return smallNums
};

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const charNames = names.filter(function (item) {
    if (item[0] === char) {
      return true;
    } else {
      return false;
    }
  });
  return charNames
};

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0, 3) === 'to ') {
      newWords.push(words[i]);
    }
  }
  return newWords;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      newNums.push(nums[i]);
    }
  }
  return newNums;
};


function getCities(users) {
  if (!users) throw new Error("users is required");
  let getNewCities = [];
  users.forEach(function (item) {
    getNewCities.push(item.data.city.displayName)
  })
  return getNewCities;
};

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareNum = nums.map(function (item) {
    return parseFloat(Math.sqrt(item).toFixed(2))
  });
  return squareNum;
};

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentFind = sentences.filter(function (item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  })
  return sentFind;
};

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longSide = [];

  triangles.forEach(function (item) {
    longSide.push(Math.max(...item))
  })
  return longSide;
};

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};