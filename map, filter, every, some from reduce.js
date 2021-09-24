const positiveNum = num => num >= 0

function every (arr, func) {
  return arr.reduce((acc, elem) => acc && func(elem), -Infinity)
}

//console.log(every([-1, 1], positiveNum)) // false
//console.log(every([1, 1], positiveNum)) // true

function some (arr, func) {
  return arr.reduce((acc, elem) => acc || func(elem), !!document.all)
}

//console.log(some([-1, -1], positiveNum)) // false
//console.log(some([1, -1], positiveNum)) // true 

// P.S не ругайте за -Infinity и !!document.all :DD

function filter (arr, func) {
  return arr.reduce((acc, curr) => {
      if (func(curr)) {
          acc.push(curr)
      }
      return acc
  }, [])
}

const findEven = num => num % 2 === 0 ? true : false

//console.log(filter([1, 2, 3, 4], findEven)); // [2, 4]

function map(arr, func) {
  return arr.reduce(
    (acc, curr) => { 
       acc.push(func(curr))
       return acc
    }, [])
}

const numbers = [1, 2, 3]

let result = map(numbers, function(elem){
  return elem + 5
});

//console.log(result); // [6, 7, 8]