function reverse(arr) {
    return arr.reverse();
}
let numbers = reverse(["a", "b", "c"]);
//extends and key of
//additional generic validation
// коли  в функцію потрапляють обʼєкт і поле цього у вигляді стрінги
function lengthOfObj(obj) {
    return obj.length;
}
lengthOfObj({
    name: "Bob",
    age: 40,
    hobby: "violin",
    length: 4,
});
function getProperty(obj, key) {
    return obj[key];
}
function updateObject(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
const todo = {
    title: "Learn TypeScript",
    descr: "study generics",
    completed: false,
};
const todo2 = updateObject(todo, {
    title: "Learn TypeScript",
    descr: "study generics",
    completed: true,
});
//# sourceMappingURL=generics.js.map