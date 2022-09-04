// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
//Elijah Barreto Week 4 08/27/22
// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe('arrayContaining', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it('takes an array removes first index and returns index shuffled', () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
  });
  it('takes an array removes first index and returns index shuffled', () => {
    expectYY(colors2).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  });
});
// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.
// Pseudo code: Input is an array Output is an array with the first index removed from the original array and the new array shuffled
const arrayContaining = (array) => {
  let newArr= array.shift()
   return array.sort(() => Math.random() -0.5)
}
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.
describe("voterFraud", () => {
  const votes1 = {upVotes: 13, downVotes: 2}
  const votes2 = {upVotes: 2, downVotes: 33}
  it("takes values from an object and returns sum", () => {
    expect(voterFraud(votes1)).toEqual(11);
    expect(voterFraud(votes2)).toEqual(-31);
  });
});
// FAIL  ./code-challenges.test.js//
const votes1 = {upVotes: 13, downVotes: 2}
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: 11
// Expected output: -31
// b) Create the function that makes the test pass.
const voterFraud = (obj) => {
 let counted = obj.upVotes - obj.downVotes
  return counted
}
// PASS  ./code-challenges.test.js
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("idChecker", () => {
  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(idChecker(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
  });
});
// FAIL  ./code-challenges.test.js
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.
// Pseudo code: Input is two arrays 
// we are going to take out any duplicate values and combine them
// Output is one array
// //combine the arrays and filter dupes
//
// PASS  ./code-challenges.test.js
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

const idChecker = (arr1,arr2) => {
  let newArr = arr1.concat(arr2);
  let filteredArray = newArr.filter((value, index) => newArr.indexOf(value) === index)
  return filteredArray
}
// const idChecker = (arr1,arr2) => {                         //Francisco showed me how to use the spread in place of concat
//   let newArr =[...arr1, ...arr2];
//   let filteredArray = newArr.filter((value, index) => newArr.indexOf(value) === index);
//   return filteredArray;
// }

// const onlyEven = (array) => {
//   return array.filter((value) => value % 2 === 0)
// }
// const getOnlyOddIndex = (array) => {
//   // return a higher-order function that takes in the value and the index
//   return array.filter((value, index) => {
//     // return only the values that have an odd index
//     return index % 2 !== 0
//   })
// }

  //wanted to see if there was a longhand way to solve using syllabus notes...the syllabus notes do not show the HOF shorthand syntax. Found that in your notes thank you.

const idChecker = (arr1, arr2) => {                   //declare function that takes in two arrays
  let newArr = [...arr1, ...arr2];                    //new variable to store the arrays combined using spread 
  let filteredArray = newArr.filter((value,index) => {  //new variable to filter the prev variable
    return newArr.indexOf(value) === index
  })
  return filteredArray                                //need to declare a return for the filteredArray (second variable) to show...
}