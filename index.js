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


var random = (Math.random()*100).toFixed(0);

function evenNumbers(){
  for (var i = 0; i <= random; i++)
    if (i%2 === 0){
      console.log(i);
    };
  }

evenNumbers(random)

function isDivisible (x,y){
  if (x%y === 0){
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(3,2))

function oddNumbers(){
   if (random > 40){
     for (var i = 40; i <= random; i++){
       if(i%2 != 0){
         console.log(i);
       }
     }
   } else {
    for (var i = 0; i <= 40; i++){
      if (i%2 != 0){
        console.log(i);
      }
    }
   }
}

oddNumbers(random)
