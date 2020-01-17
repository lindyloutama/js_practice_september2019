const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n)) {
    const foundNum = nums.indexOf(n) + 1;
    if (typeof nums[foundNum] === 'undefined') return null;
    return nums[foundNum];
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count = {
    1: 0,
    0: 0
  };
  str.split('').forEach(item => {
    (parseFloat(item)) ? count[1]++: count[0]++;
  })
  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join(''))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let counter = 0
  arrs.forEach(add => {
    add.forEach(num => {
      counter += num;
    })
  })
  return counter;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
    return arr;
  } else {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let found = false;
  Object.keys(haystack).forEach(hs => {
    if (haystack[hs].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      found = true;
    }
  })

  return found;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let str1 = arr[i].replace(/[^a-zA-Z ]/g, "").toLowerCase();
    obj[str1] = obj[str1] ? obj[str1] + 1 : 1;
  }
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};