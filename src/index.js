module.exports = function multiply(first, second) {
  let arr1 = first.split('').reverse();
  let arr2 = second.split('').reverse();
  let sums = [];
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      let mul = arr1[i] * arr2[j];
      if (sums[i + j]) {
        sums[i + j] = sums[i + j] + mul;
      }
      else sums[i + j] = mul;
    }
  }
  for (let i = 0; i < sums.length; i++) {
    let units = sums[i] % 10;
    let decimal = Math.floor (sums[i] / 10);
    sums[i] = units;
    if (sums[i+1]){
      sums[i+1] += decimal;
    }
    else if (decimal !=0) {
      sums[i+1] = decimal;
    }
  }
  return sums.reverse().join('');
}
