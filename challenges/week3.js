function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const camel = [words[0]];
   for(let i = 1; i < words.length; i++) {
     const word = words[i];
      const capital = word[0].toUpperCase() + word.slice(1);
       camel.push(capital);
   }
   return camel.join("");
}
  function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    const squares = [];
    for(let i = 0; i< nums.length; i++) {
     const square = Math.pow(nums[i], 2);
      squares.push(square);
    }
   return squares;
}

  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
     const nosubject = [];
     const subjects = people.subject;
      for(let i = 0; i < people.subject.length; i++) {
        
      }
  }

  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    // Your code here!
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