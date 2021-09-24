const compose = (...fns) => x => fns.reduce((v, f) => f(v), x)

const positiveNumbers = arr => arr.filter(num => num >= 0)

const maxOfArray = arr => Math.max(...arr)

console.log(compose(positiveNumbers, maxOfArray)([-2, -3, 0, 2, 3])) // 3