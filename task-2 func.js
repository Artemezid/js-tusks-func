function simpleNumber(n) {
  for(let i = 2; i < n; i++){
    if(n % i === 0,n === 1,n ===0){
      console.log("число - непростое");
      return;
    } else if (n > 1000) {
      console.log("данные неверны");
      return;
    }
   }
    console.log("число - простое");
    return;
  }
  simpleNumber(1);
  /* всё равно на 0 и 1 пришет Ж простое число*/