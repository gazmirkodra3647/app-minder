/* filename: complexCode.js */

// This code calculates the factorial of a number using a recursive function

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// This code calculates the sum of the digits of a number

function sumDigits(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// This code generates a random password with specific criteria

function generatePassword(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*-_';

  let password = '';
  let charSet = uppercaseLetters + lowercaseLetters + numbers + symbols;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

// This code checks if a given string is a palindrome

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}

// This code converts binary to decimal

function binaryToDecimal(binary) {
  let decimal = 0;
  let multiplier = 1;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * multiplier;
    multiplier *= 2;
  }

  return decimal;
}

// ... and so on

// More code can be added to extend the complexity and add additional functionalities.