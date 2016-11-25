function rand([min = 0, max = 1000]) {
  if(min > max) [min, max] = [max, min];
  console.log(min, max);
  let value = Math.random() * (max - min);
  return Math.floor(value) + min;
}

console.log(rand([20, 30]));
console.log(rand([80, 50]));
//console.log(rand());
