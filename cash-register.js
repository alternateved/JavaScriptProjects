function checkCashRegister(price, cash, cid) {
  // converting all values by 100 to avoid issues with floating point
  let denomination =  [
    ["PENNY", 1], 
    ["NICKEL", 5], 
    ["DIME", 10], 
    ["QUARTER", 25], 
    ["ONE", 100], 
    ["FIVE", 500], 
    ["TEN", 1000], 
    ["TWENTY", 2000], 
    ["ONE HUNDRED", 10000]
  ];

  let result = {status: null, change: []};
  let change = Math.round((cash - price) * 100);
  cid.forEach(item => item[1] = Math.round(item[1] * 100));
  let amount = 0; 
  let value = 0; 

  // calculating total cash in the drawer
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  
  // checking change against total cash in the drawer
  if (change === cidTotal) {
    result.status = "CLOSED";
    result.change = cid;
    result.change.forEach(item => item[1] = (item[1] / 100));
    return result;
  } else if (change > cidTotal) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  } else {
    result.status = "OPEN";
    // loop through denomination array to calculate proper change 
    for (let i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= denomination[i][1]) {
        change -= denomination[i][1];
        cid[i][1] -= denomination[i][1];
        value += denomination[i][1];
      }
      if (value)
        result.change.push([cid[i][0], value]);
    }
  }
  // format results by dividing by 100
  result.change.forEach(item => item[1] = (item[1] / 100));
 
  // check if change could not be made from what was in the drawer
  if (change > 0 ) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  return result;
}
