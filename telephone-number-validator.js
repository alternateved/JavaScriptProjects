function telephoneCheck(str) {
  // check if provided number pass RegEx test
  if (/^(1[- .]?)?(\([2-9]\d{2}\)[. -]?|[2-9]\d{2}[. -]?)[2-9]\d{2}[- .]?\d{4}$/gm.test(str)) {
    return true;
  } else {
    return false;
  }
}