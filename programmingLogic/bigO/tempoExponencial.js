const fibonacci = (num) => {
    if(num <= 1)
      return num;
    else
      return fibonacci(num - 2) + fibonacci(num - 1)  
  }
  
  console.log(fibonacci(8));