let word = prompt("Enter a word");
let reversedWord = word.split('').reverse().join('');
if (word === reversedWord) {
    alert("It's a Palindrome word.");
} else {
    alert("It's not a Palindrome word.");
}