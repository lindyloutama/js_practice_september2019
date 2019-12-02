function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const camel = [words[0]];
   for(let i = 1; i < words.length; i++) {
     const word = words[i];
      const capital = word[0].toUpperCase() + word.slice(1);
      camel = camel.push(capital).join("");
   }
   return camel
}

  function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    const squares = [];
    for(let i = 0; i< nums.length; i++) {
     const square = Math.pow(nums[i], 2);
      squares.push(square);
    }
   return squares
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
     const ingredientsFound = false;
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
    // Your code here!
  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };