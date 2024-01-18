function simpleNumber(n) {  
  if (n <= 1) {
      console.log("данные неверны");
      return;
    }
  
    if (n > 1000) {
      console.log("данные неверны");
      return;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        console.log("число - составное");
        return;
      }
    }
    console.log("число - простое");
  }
  simpleNumber(5);