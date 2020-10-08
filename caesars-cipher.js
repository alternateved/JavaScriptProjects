function rot13(str) {
  // create array from provided string
  let strArr = str.split("");
  // two related arrays with letters shifted by 13 places
  let input = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let output = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  // loop through provided string and switch each letter for their deciphered value
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (strArr[i] == output[j]) {
        strArr[i] = input[j];
      } else if (strArr[i] == input[j]) {
        strArr[i] = output[j];
      }
    }
  }
  // rejoin deciphered elements from array in one string and return
  return strArr.join("");
}
