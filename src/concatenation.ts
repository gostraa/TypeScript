function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

// Основные типы
// Приветствие пользователя

// Напишите функцию greet, которая принимает имя пользователя (тип string) и возвращает приветствие (также string).
// Пример: greet("Анна") должно вернуть "Привет, Анна!".

function greet(name: string): string {
  return `Hello, ${name}`;
}

// Сумма чисел

// Создайте функцию sum, которая принимает два аргумента типа number и возвращает их сумму (тип number).
// Пример: sum(5, 10) должно вернуть 15.

function sum(num1: number, num2: number): number {
  return num1 + num2;
}
// Проверка четности числа

// Реализуйте функцию isEven, которая принимает число (number) и возвращает true, если число четное, и false, если нечетное.

function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Generics
// Массив элементов одного типа

// Напишите функцию firstElement, которая принимает массив элементов любого типа и возвращает первый элемент этого массива.
// Используйте обобщение (generic) для типа элементов массива.

function firstElement<T>(array: T[]): T {
  return array[0];
}

// Объединение объектов

// Создайте функцию mergeObjects, которая объединяет два объекта. Функция должна принимать два аргумента
//  и возвращать новый объект, содержащий свойства обоих исходных объектов.
// Используйте обобщение для типов объектов.
function mergeObjects<T, K>(obj1: T, obj2: K): T & K {
  return { ...obj1, ...obj2 };
}

// Универсальная функция "getId"

// Реализуйте функцию getId, которая принимает объект с свойством id любого типа и возвращает значение этого id.
// Используйте обобщение для типа id.

type WithId<T> = {
  name: string;
  lastName: string;
  id: T;
};

function getId<T>(obj: WithId<T>): T {
  return obj.id;
}

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter((bird) => !geese.includes(bird));
}

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
