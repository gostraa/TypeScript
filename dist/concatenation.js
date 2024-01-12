function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };
// Основные типы
// Приветствие пользователя
// Напишите функцию greet, которая принимает имя пользователя (тип string) и возвращает приветствие (также string).
// Пример: greet("Анна") должно вернуть "Привет, Анна!".
function greet(name) {
    return `Hello, ${name}`;
}
// Сумма чисел
// Создайте функцию sum, которая принимает два аргумента типа number и возвращает их сумму (тип number).
// Пример: sum(5, 10) должно вернуть 15.
function sum(num1, num2) {
    return num1 + num2;
}
// Проверка четности числа
// Реализуйте функцию isEven, которая принимает число (number) и возвращает true, если число четное, и false, если нечетное.
function isEven(num) {
    return num % 2 === 0;
}
// Generics
// Массив элементов одного типа
// Напишите функцию firstElement, которая принимает массив элементов любого типа и возвращает первый элемент этого массива.
// Используйте обобщение (generic) для типа элементов массива.
function firstElement(array) {
    return array[0];
}
// Объединение объектов
// Создайте функцию mergeObjects, которая объединяет два объекта. Функция должна принимать два аргумента
//  и возвращать новый объект, содержащий свойства обоих исходных объектов.
// Используйте обобщение для типов объектов.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
function getId(obj) {
    return obj.id;
}
export function gooseFilter(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    let filterArr = [];
    for (const item of geese) {
        birds.forEach((bird) => {
            if (bird !== item) {
                filterArr.push(bird);
            }
        });
    }
    return filterArr;
}
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
//# sourceMappingURL=concatenation.js.map