// I. Переворот рядка (без підсказок) 1

const reverseString = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    result = str[i] + result
    i++
  }
  return result
}

// console.log(reverseString("hello"));

// II. Пошук найбільшого числа в масиві (з підсказками повністю)

const maxInArray = (arr) => {
  let max = arr[0];
  let i = 1; 
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++
  }
  return max
};

// console.log(maxInArray([1, 5, 3, 9, 2]));

// III. Сума всіх чисел до N (без підсказок) 2

const sumTo = (num) => {
  let result = '';
  let num_result = 0;
  for ( let i = 0; i <= num; i++) {
    result += i
  }
  for ( let j = 0; j <= num; j++) {
    num_result += parseInt(result[j]);
  }
  return num_result;
};

// console.log(sumTo(6)); 

// IV. Перевірка пароля на наявність цифри (з підсказками)

const hasNumber = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      return true
    } 
  }
  return false
} 

// console.log(hasNumber("qwert"))

// V.  Фільтрація масиву: тільки парні (майже без підсказок)

const filterEven = (arr) => {
  let result = [];
  let index = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[index] = arr[i];
      index++
    }
  }
  return result;
}

// console.log(filterEven([1, 2, 3, 4, 5, 6]));

// VI. Підрахунок голосних у рядку (без підсказок) 3

const countVowels = (str) => {
  let result = '';
  for (i = 0; i < str.length; i++) {
    if (/[aeiou.]/.test(str[i])) {
      result += str[i];
    }
  }
  return result.length
}

// console.log(countVowels("hello"));

// VII. FizzBuzz (без підсказок) 4

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

// fizzBuzz(1, 20)

// VIII. Паліндром (без підсказок) 5

const isPalindrome = (str) => {
  let result1 = '';
  let result2 = '';
  if ( str.length % 2 === 0) {
     for ( let i = 0; i < (str.length / 2); i++) {
       result1 = str[i] + result1;
     }
     for ( let j = str.length / 2; j < str.length; j++) {
       result2 += str[j];
     }
     return result1 === result2 
  }
  else if ( str.length % 2 !== 0) {
     for ( let i = 0; i < (Math.floor(str.length / 2)); i++) {
       result1 = str[i] + result1;
     }
     for ( let j = Math.ceil(str.length / 2); j < str.length; j++) {
       result2 += str[j];
     }
     return result1 === result2
  }
}

// console.log(isPalindrome("racecar"));

// IX. Число Фібоначчі (взагалі не моє, я до кінця так і не зрозумів як ця магія працює)

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(9))