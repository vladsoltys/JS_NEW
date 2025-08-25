const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if ( i % 3 === 0) {
      console.log("Fizz")
    }
    else if ( i % 5 === 0) {
      console.log("Bizz")
    }
    else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBizz")
    } 
    else {
      console.log(i)
    }
  }
}

fizzBuzz(2, 51)