// забув, що є цикл forin :)

const convertToArr = (obj) => Object.entries(obj);

const count = (firstObj, secondObj) => {
  const ARR_OF_FIRST_OBJ = [];
  const ARR_OF_SECOND_OBJ = [];

  const arrOfFirstObj = convertToArr(firstObj);
  const arrOfSecondObj = convertToArr(secondObj);

  if (arrOfFirstObj.length !== arrOfSecondObj.length) {
    return false;
  }

  for (let i = 0; i < arrOfFirstObj.length; i++) {
    const elOfFirstObj = arrOfFirstObj[i];
    let el = null;
    // тут перевіряємо, чи є ключі такі, як і в другому об'єкті (бо вони можуть знаходитися у різному порядку)
    if (
      arrOfSecondObj.some((elem) => {
        const res = elem[0] === elOfFirstObj[0];
        el = elem;
        return res;
      })
    ) {
      // якщо сюди зайшов код, то значить ключ є

      // якщо значення не об'єкти, і не масиви і не дорівнюють одне одному повертаємо false

      if (
        typeof el[1] === typeof elOfFirstObj[1] &&
        typeof el[1] !== "object" &&
        typeof elOfFirstObj[1] !== "object" &&
        el[1] !== elOfFirstObj[1]
      ) {
        return false;
      }

      if (typeof el[1] === "object" && typeof elOfFirstObj[1] === "object") {
        // перевіряємо якщо це масив, то можна JSON.stringify
        const newStrFirstObj = JSON.stringify(convertToArr(el[1]));
        const newStrSecondObj = JSON.stringify(convertToArr(elOfFirstObj[1]));
        // якщо ключі не співпадають, то - false
        if (convertToArr(el[1])[0][0] !== convertToArr(elOfFirstObj[1])[0][0]) {
          return false;
        }
        if (
          convertToArr(el[1])[0][0] === "0" &&
          convertToArr(elOfFirstObj[1])[0][0] === "0"
        ) {
          if (newStrFirstObj !== newStrSecondObj) {
            return false;
          }
        }

        // якщо довжина масивів не співпадає, то повертаємо false
        if (
          convertToArr(el[1]).length !== convertToArr(elOfFirstObj[1]).length
        ) {
          return false;
        }
        ARR_OF_FIRST_OBJ.push(elOfFirstObj[1]);
        ARR_OF_SECOND_OBJ.push(el[1]);
      }
    }
  }

  // повертаємо об'єкт з властивостями
  return {
    firstObgList: ARR_OF_FIRST_OBJ,
    secondObjList: ARR_OF_SECOND_OBJ,
  };
};

const deepEquel = (firstObj, secondObj) => {
  // запускаємо допоміжну функцію
  const result = count(firstObj, secondObj);
  // якщо повертає false, то головна функція також повертає false
  if (!result) {
    return false;
  }

  // якщо довжина ключа дорівнює нулю, то повертаємо true
  if (result.firstObgList.length === 0) {
    return true;
  }
  // цикл з рекурсією
  for (let i = 0; i < result.firstObgList.length; i++) {
    deepEquel(result.firstObgList[i], result.secondObjList[i]);
  }
};

deepEquel(
  {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
    hobbies: ["Reading", "Hiking", "Cooking"],
    friends: [
      {
        name: "Alice",
        age: 28,
        address: {
          street: "456 Elm St",
          city: "Los Angeles",
        },
      },
      {
        name: "Bob",
        age: 35,
        address: {
          street: "789 Oak St",
          city: "San Francisco",
        },
      },
    ],
    preferences: {
      food: ["Pizza", "Sushi"],
      music: ["Rock", "Jazz"],
      movies: ["Action", "Comedy"],
    },
    workHistory: [
      {
        company: "ABC Corp",
        position: "Software Engineer",
        years: 5,
      },
      {
        company: "XYZ Inc",
        position: "Product Manager",
        years: 3,
      },
    ],
  },
  {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
    hobbies: ["Reading", "Hiking", "Cooking"],
    friends: [
      {
        name: "Alice",
        age: 28,
        address: {
          street: "456 Elm St",
          city: "Los Angeles",
        },
      },
      {
        name: "Bob",
        age: 35,
        address: {
          street: "789 Oak St",
          city: "San Francisco",
        },
      },
    ],
    preferences: {
      food: ["Pizza", "Sushi"],
      music: ["Rock", "Jazz"],
      movies: ["Action", "Comedy"],
    },
    workHistory: [
      {
        company: "ABC Corp",
        position: "Software Engineer",
        years: 5,
      },
      {
        company: "XYZ Inc",
        position: "Product Manager",
        years: 3,
      },
    ],
  }
);
