//Exercise 1
var  calcAge  =function (todayY, bornY)
{
 return (todayY-bornY);
}

var age = calcAge(2017, 1989);
console.log(age);


//Exercise 2
var  calcAge2  =function (todayY, bornY)
{
    var age3=todayY-bornY-3;
    var age4=todayY-bornY-4;

    console.log("you are either "+ age3 +" or "+age4);
 
}

calcAge2(2017,1989);


var calcAge3 = function(bornY)
{
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var age3=year-bornY-3;
    var age4=year-bornY-4;

    console.log("you are either "+ age3 +" or "+age4);
}
calcAge3(1989);

//Exercise 3
var isPrime= function (num){
    if (num==2) return true;
    else
      for(var i=2; i<num; i++)
    {
        if (num%i ==0)
        return false;
    }
    return true;

}

console.log(isPrime(13)); //true
console.log(isPrime(2)); //true
console.log(isPrime(6)); //false

//Exercise 4
var avg = function(array)
{
    var sum=0;
for(var i=0; i<array.length;i++)
     sum+=array[i];
 return (sum/array.length);    
}

console.log(avg([1,2,3,4,5])); // 3

//Exercise 5
var isExist = function ( array , num){
    for(var i=0; i<array.length;i++)
      if (array[i]==num) return true;

return false;
}

console.log(isExist([1,2,5], 0)); // false
console.log(isExist([1,2,5], 5)); //true


//Exercise 6
var printSmaller = function ( array , num){
    for(var i=0; i<array.length;i++)
        if(array[i]<num)
          console.log(array[i]);
}

printSmaller([1,7,4,2], 5);

