const combos = (num) => {
  const RES_ARR = [];

  const getArr = (currentNum, min, subArr) => {
    // якщо
    if (currentNum === 0) {
      RES_ARR.push([...subArr]);
      return;
    }

    // цикл, який перебирає всі можливі числа від min до currentNum. Ми використовуємо цей цикл,
    //  щоб додати числа до поточної комбінації subArr.
    for (let i = min; i <= currentNum; i++) {
      // В цьому рекурсивному виклику ми зменшуємо currentNum на i, оновлюємо min на i та додаємо число i до
      // поточної комбінації, створюючи новий масив[...subArr, i]. Це генерує всі можливі комбінації чисел.
      getArr(currentNum - i, i, [...subArr, i]);
    }
  };

  getArr(num, 1, []);
  return RES_ARR;
};

console.log(combos(3));
//   console.log(combos(10));
