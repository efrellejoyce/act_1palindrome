// Prompt user for input arrays
let numbers = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):")
  .split(",")
  .map(Number);

let names = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):")
  .split(",");

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];

// Log the merged array
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse Order:", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);
