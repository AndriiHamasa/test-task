const add = (x) => {
  // створюємо функцію, яка буде плюсувати значення та повертати сама себе, для повторного використання
  const subAdd = (y) => {
    x += y;
    return subAdd;
  };

  // перетворюємо метод toStringдля виведення результату
  subAdd.toString = function () {
    return x;
  };

  return subAdd;
};


const result = add(1)(2)(3)(4)(5);
console.log(Number(result)); 
