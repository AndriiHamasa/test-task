

const f1 = (num) => {
  const i = 56;
  return num + i;
};

const f2 = (firstStr, secondStr) => {
  return firstStr + secondStr;
};

const bulkRun = (arr) => {
  const arrayOfPromises = [];

  for (let i = 0; i < arr.length; i++) {
    //   під кожну функцію створюємо проміс, та закидуємо його у масив
    arrayOfPromises.push(
      new Promise((resolve, reject) => {
        try {
          const result = arr[i][0](...arr[i][1]);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      })
    );
  }

  // повертаємо масив промісів
  return Promise.all([...arrayOfPromises]);
};

bulkRun([
  [f1, [40]],
  [f2, ["Hi guys, ", "You are welcome)"]],
]).then(console.log);
