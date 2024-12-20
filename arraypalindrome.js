// Prompt the user to input two words
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Reverse the words
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed words
console.log(`Original Word 1: ${word1}, Reversed Word 1: ${reversedWord1}`);
console.log(`Original Word 2: ${word2}, Reversed Word 2: ${reversedWord2}`);

// Check if the original words are palindromes
console.log(`Is "${word1}" a palindrome? ${word1 === reversedWord1}`);
console.log(`Is "${word2}" a palindrome? ${word2 === reversedWord2}`);
