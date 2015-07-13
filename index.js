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
  if (discount <= 100 && discount != 0){
  return '$' + (discount/original) * 100
} else {
  return 'That can\'t be right!!!'
}
}

console.log (discountPercentage(40,1))

function stringCapitalize (str){
  var strarray = str.split(' ');
  var newarray = []
  for (var i = 0; i < strarray.length; i++){
  newarray.push(strarray[i].charAt(0).toUpperCase() + strarray[i].slice(1));
  };
  var strarray = newarray.join(' ')
  return strarray
 };

var str = 'this is a string'
console.log(stringCapitalize(str))
