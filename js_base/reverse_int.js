const reverseInt = (int) => {
  let str = int.toString();
  let num = parseInt(str);
  // console.log(num);
  let result = '';
  if (num < 0) {
     let absNum = Math.abs(num);
     // console.log(absNum);
     let strAbsNum = absNum.toString()
     // console.log(strAbsNum);
     for (i = 0; i < strAbsNum.length; i++) {
        result = strAbsNum[i] + result; 
      }
     return -parseInt(result)
    } 
  else {
      for (i = 0; i < str.length; i++) {
        result = str[i] + result;
      }
      return parseInt(result)
    }
  } 


console.log(reverseInt(-12456700))