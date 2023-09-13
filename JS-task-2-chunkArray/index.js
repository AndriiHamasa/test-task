// Починаємо оголошення генераторної функції з ключового слова function*.
function* chunkArray(arr, num) {
  // Створюємо цикл, який буде перебирати елементи масиву.
  for (let i = 0; i < arr.length; i += num) {
    // Використовуємо yield для повернення частини масиву (з i по i+num) як значення.
    yield arr.slice(i, i + num);
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
