//1
let age = 50;
let toggle = true;
let empty = null;
let notInitialize;
// let callback = (a: number): number => {
//   return 100 + a;
// };
let callback = (a) => {
    return 100 + a;
};
//2
let anything = -20;
anything = "Text";
anything = {};
//3
// let some: unknown;
// some = "Text";
// let str: string;
// str = some as string;
//or
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
//4
let person = ["Max", 21];
const variable = 12;
const variable2 = "disable";
//6
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
//7
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
function isWeekend(day) {
    return day === Days.Sunday || day === Days.Saturday;
}
const myGender = "female";
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=exercises.js.map