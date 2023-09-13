// допоміжна функція
const helpFunc = (obj, path) => {
  const arrOfPathList = []
  for (const key in obj) {
    
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const currentPath = [...path]
      if (typeof key !== "object") {
        currentPath.push(key);
      }

      if (typeof value === "object" && !Array.isArray(value)) {
        const res = helpFunc(value, currentPath);

        res.forEach(arr => {
          arrOfPathList.push([arr[0], arr[1]]);
        });
        
      }

      if (typeof value !== "object" || Array.isArray(value)) {
        const keyRes = currentPath.join("/")
        arrOfPathList.push([keyRes, value ]);
      }
    }
  }

  return arrOfPathList
};

// головна функція
const mapObject = (demoObj) => {
  const RES_OBJECT = {};

  // цикл для проходження по об'єктам
  for (const key in demoObj) {
    if (Object.hasOwnProperty.call(demoObj, key)) {
      const value = demoObj[key];
      const currentPath = [];

      // якщо тип ключа - не об'єкт, то записуємо в шлях
      if (typeof key !== "object") {
        currentPath.push(key);
      }
      // якщо тип значення - об'єкт та не є масивом, викликаємо функцію helpFunc, яка у свою чергу робить рівно те саме, що і 
      // mapObject, але відслідковує шлях, та рекурсію
      if (typeof value === "object" && !Array.isArray(value)) {
        
        const res = helpFunc(value, currentPath);
        // закидуємо в головний об'єкт ключі та значення, що повернула функція helpFunc
        res.forEach(arr => {
          RES_OBJECT[arr[0]] = arr[1];
        });
        
      }
      // якщо тип значення - не об'єкт або масив, записуємо його в об'єкт
      if (typeof value !== "object" || Array.isArray(value)) {
        
        RES_OBJECT[currentPath] = value
      }
    }
  }

  return RES_OBJECT;
};

// об'єкти для тестування
const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};
const obj2 = { a: { b: "c" } };
const obj3 = { a: { b: 5, c: 3 } }
const obj4 = { a: 2, b: 3 }
const obj5 = {
  name: "John",
  age: 25,
  city: "New York",
  job: "Engineer",
  maritalStatus: "Single",
  additionalInfo: {
      hobbies: "Painting",
      preferences: "Music",
      languages: ["English", "French"]
  }
}

console.log(mapObject(obj))
