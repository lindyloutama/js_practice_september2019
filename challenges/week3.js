function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camel = [];
  for (let i = 0; i < words.length; i++) {
    if (words.indexOf(words[i]) === 0) {
      camel.push(words[i]);
    }
    if (words.indexOf(words[i]) >= 1) {
      camel.push(words[i][0].toUpperCase() + words[i].substring(1));
    }
  }
  return camel.join('');
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squares = [];
  for (let i = 0; i < nums.length; i++) {
    const square = Math.pow(nums[i], 2);
    squares.push(square);
  }
  return squares;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (i = 0; i < people.length; i++) {
    for (let key in people[i]) {
      const value = people[i][key]
      if (key === "subjects") {
        count = count + value.length
      }
    }
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let ingredientsFound = false;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      ingredientsFound = true;
    }
  }
  return ingredientsFound
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (newArray.indexOf(arr2[j]) === -1) {
          newArray.push(arr1[i]);
        }
      }
    }
  }
  let otherArray = [];
  let thisArray = newArray.length;
  for (let k = 0; k < thisArray; k++) {
    let min = Math.min(...newArray);
    otherArray.push(min);
    let pos = newArray.indexOf(min);
    newArray.splice(pos, 1);
  }
  return otherArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};