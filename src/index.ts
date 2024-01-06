import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

//primitive types

let total: number = 100;
let name: string = "Bob";
let isActive: boolean = false;
let empty: null = null;
let undf: undefined = undefined;

//complex types

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const strings: string[] = ["1", "2", "3"];

const user: {
  name: string;
  age: number;
} = {
  name: "Bob",
  age: 12,
};

type User = {
  name: string;
  age: number;
};

const user2: User = {
  name: "Bobby",
  age: 14,
};

// reserved variables// union type

type eventType = "lesson" | "deadline";

const event: eventType = "lesson";

////
type size = "small" | "medium" | "large";

const weight: size = "medium";

// enum/type

type sizes = "small" | "medium" | "large";
const buttonL: sizes = "large";

enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}
const buttonM: Sizes = Sizes.medium;

// functions

// function add(num1: number, num2: number): string {
//   return num1 + num2;
// }

// if the function doesn't return anything

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// if the function's argument is object

function add(user: User): void {
  console.log(user.name);
}

// if the function returns object

function userConstructor(name: string, age: number): User {
  return {
    name,
    age,
  };
}

// if the object has method as a key

type CarType = {
  color: string;
  price: number;
  start: () => void;
};

const Car: CarType = {
  color: "red",
  price: 1000,
  start() {
    console.log("let's go");
  },
};

// optional fields

type UserVariants = {
  name: string;
  age: number;
  role?: string;
};

const commonUser: UserVariants = {
  name: "Mari",
  age: 24,
};

const admin: UserVariants = {
  name: "Mari",
  age: 27,
  role: "Admin",
};
