function palindrome(str) {
  // prepare provided string for further tests
  let newStr = str
    .replace(/[\W_]/g, "")
    .toLowerCase();
  let lengthStr = newStr.length;
  
  // loop through string and check if letters from the start are the same as in the end
  for (let i = 0; i < lengthStr/2; i++) {
    if (newStr[i] != newStr[lengthStr - 1 - i]) {
      return false;
    }
  } 
  return true;
}

console.log(palindrome("1 eye for of 1 eye."));
