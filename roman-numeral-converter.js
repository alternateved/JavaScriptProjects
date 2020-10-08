function convertToRoman(num) {
  // two related arrays with decimal numerals and their roman equivalent
  let decimalNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";

  // loop through the decimalNum array to find the value of provided num
  for (let i = 0; i <decimalNum.length; i++) {

    // add the equivalent roman numeral to result and subtract from num decimal equivalent
    while (decimalNum[i] <= num) {
      result += romanNum[i];
      num -= decimalNum[i];
    }
  }
 return result;
}