function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return (sandwich.fillings);
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let busNo = people / 40;
  return Math.ceil(busNo);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let baabaa = 0;
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      baabaa++;
    }
  }
  return baabaa;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let count = person.address.postCode
  let index = 0;
  if (count.charAt(index) === "M" && person.address.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};