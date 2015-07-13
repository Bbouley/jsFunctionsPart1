function sum(x,y){
  return x + y;
};

console.log(sum(1,2))

function isEqual(x,y){
  if (x===y){ return true }
  else {return false}
  }

console.log(isEqual(2,3))

function discountPercentage (original, discount){
  if (discount <= original && discount != 0){
  return '$' + (discount/original) * 100
} else {
  return 'That can\'t be right!!!'
}
}

console.log (discountPercentage(100,46))
