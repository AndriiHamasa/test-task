function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  console.log("rand", rand);
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

const reliableMultiply = (a, b) => {
  // запускаємо цикл, щоб повторювати оперці. при необхідності
  while (true) {
    try {
      // викликаємо primitiveMultiply, якщо отримуємо результат, то повертаємо його
      const result = primitiveMultiply(a, b);
      console.log('result', result)
      return result;
    } catch (error) {
      // якщо отримуємо instance NotificationException, то переходимо до наступної ітерації
      if (error instanceof NotificationException) {
        console.log('instance NotificationException - повторюємо')
        continue
      }
      // якщо отримуємо instance ErrorException, то виходимо з циклу, та нічого не повертаємо, тобто буде undefined, 
      // замість break, можна зробити return error,  
      if (error instanceof ErrorException) {
        console.log('instance ErrorException - виходимо ')
        break
      }
    }
  }
};

console.log(reliableMultiply(8, 8));
