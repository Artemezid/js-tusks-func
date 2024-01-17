let arr = [1,2,3,4,5,6,null]; 

function oddEvenNull() {
 console.log(arr.filter(n => n%2 == 0).length);
 console.log(arr.filter(n => n%2 !== 0).length);
 console.log(arr.filter(n =>n == null).length);
 }

oddEvenNull();