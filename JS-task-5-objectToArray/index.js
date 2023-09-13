const objectToArray = (obj) => {
  // створюємо масив, що будемо повертати
  const MAIN_ARRAY = [];
  // перетворюємо об'єкт у масив, що будемо використовувати в циклі
  const firstArray = Object.entries(obj);

  // запускаємо цикл, і проходимося по кожному масиву
  for (let i = 0; i < firstArray.length; i++) {
    const element = firstArray[i];

    //   якщо кожний елемент масиву - має тип данних відмінний від - 'object', то пушимо цей масив у резулбтуючий
    if (typeof element[0] !== "object" && typeof element[1] !== "object") {
      MAIN_ARRAY.push(element);
    }
    //   якщо перший елемент - це об'єкт, то використовуємо рекурсію
    if (typeof element[0] === "object") {
      objectToArray(element);
    }
    //   якщо другий елемент - об'єкт, то пушимо у результуючий масив перший елемент, а на другий використовуємо рекурсію
    if (typeof element[1] === "object") {
      MAIN_ARRAY.push([element[0], objectToArray(element[1])]);
    }
  }

  // повертаємо результуючий маств
  return MAIN_ARRAY;
};

// Приклади об'єктів, що можуть бути переконвертовані у масив
const obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

const obj2 = { a: 3 };

const obj3 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
  },
  hobbies: { first: "reading", second: "hiking", third: "swimming" },
  skills: {
    programming: { first: "JavaScript", second: "Python", third: "Java" },
    languages: { first: "English", second: "Spanish" },
  },
  experience: {
    first: {
      company: "Company A",
      years: 2,
    },
    second: {
      company: "Company B",
      years: 3,
    },
  },
};

const obj4 = { a: { b: "c" } };

// щоб побачити у терміналі відповідь
console.log(JSON.stringify(objectToArray(obj)));
