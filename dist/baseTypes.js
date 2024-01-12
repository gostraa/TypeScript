import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
//primitive types
let total = 100;
let name = "Bob";
let isActive = false;
let empty = null;
let undf = undefined;
//complex types
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["1", "2", "3"];
const user = {
    name: "Bob",
    age: 12,
};
const user2 = {
    name: "Bobby",
    age: 14,
};
const event = "lesson";
const weight = "medium";
const buttonL = "large";
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const buttonM = Sizes.medium;
// functions
// function add(num1: number, num2: number): string {
//   return num1 + num2;
// }
// if the function doesn't return anything
// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// if the function's argument is object
function add(user) {
    console.log(user.name);
}
// if the function returns object
function userConstructor(name, age) {
    return {
        name,
        age,
    };
}
const Car = {
    color: "red",
    price: 1000,
    start() {
        console.log("let's go");
    },
};
const commonUser = {
    name: "Mari",
    age: 24,
};
const admin = {
    name: "Mari",
    age: 27,
    role: "Admin",
};
const fruits = {
    apples: 20,
    bananas: 40,
    oranges: 60,
};
const userInfo = {
    name: "Bob",
    age: 23,
    country: "Ukraine",
};
const bookDetails = {
    title: "Bible",
    pageCount: 350,
};
//# sourceMappingURL=baseTypes.js.map