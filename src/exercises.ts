//1

let age: number = 50;
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
// let callback = (a: number): number => {
//   return 100 + a;
// };
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

//2
let anything: any = -20;
anything = "Text";
anything = {};

//3

// let some: unknown;
// some = "Text";
// let str: string;
// str = some as string;

//or

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
}

//4

let person: [string, number] = ["Max", 21];

//5

type Union = string | number;

const variable: Union = 12;

type Literal = "enable" | "disable";

const variable2: Literal = "disable";

//6

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//7

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: Days): boolean {
  return day === Days.Sunday || day === Days.Saturday;
}

//8

type Gender = "male" | "female";
const myGender: Gender = "female";

//9

type pageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: {};
    updateAt: {};
  };
};

const page1: pageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: pageType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
