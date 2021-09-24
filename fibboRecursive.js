const fibb = num => {
  if (num == 1 || num == 2) return 1
  else return fibb(num-2) + fibb(num-1)
}

console.log(fibb(6)) // 8