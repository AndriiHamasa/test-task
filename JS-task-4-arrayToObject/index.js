const arrayToObject = (arr) => {
  // задамо значення для головних об'єкта та масиву
  const OBJECT_FROM_ARRAY = {};
  let arrToConvert = arr;

  // перевіряємо на тип данних
  if (typeof arr !== "object") {
    console.log("arrayToObject приймає масив");
    return;
  }

  // якщо ми не маємо масив із масивів, то ми його створюємо, щоб не робити додаткові перевірки
  if (typeof arr === "object") {
    if (typeof arr[0] !== "object") {
      arrToConvert = [arr];
    }
  }

  // запускаємо цикл для перебору масиву із масивів
  for (let i = 0; i < arrToConvert.length; i++) {
    const element = arrToConvert[i];
    //   Якщо довжина дочірнього масиву дорівнює двом та кожний з елементів маєтип данних, відмінний від - 'object' - записуємо
    //   у головний об'єкт, та переходимо до наступного масиву
    if (
      element.length === 2 &&
      typeof element[0] !== "object" &&
      typeof element[1] !== "object"
    ) {
      OBJECT_FROM_ARRAY[element[0]] = element[1];
      continue;
    }

    //   якщо перший елемент масиву не є об'єктом, то другий елемент - масив, оскільки ми сюди дійшли
    //   тоді записуємо значення, використовуючи рекурсію
    if (typeof element[0] !== "object") {
      OBJECT_FROM_ARRAY[element[0]] = arrayToObject(element[1]);
    }
    //   якщо перший елемент масиву - об'єкт, то використовуємо рекурсію
    if (typeof element[0] === "object") {
      arrayToObject(element[0]);
    }
  }

  return OBJECT_FROM_ARRAY;
};

// можливі випадки масивів, які можна перевести у об'єкти
const arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];
const arr2 = [
  ["name", "developer"],
  ["age", 25],
  ["city", "New York"],
  ["hobby", "reading"],
  [
    "languages",
    [
      ["foreign", "English"],
      ["native", "Ukrainian"],
    ],
  ],
  [
    "experience",
    [
      ["Company A", 2],
      ["Company B", 3],
    ],
  ],
];
const arr3 = ["what", "do"];
const arr4 = ["a", ["b", "c"]];

console.log(arrayToObject(arr4));
