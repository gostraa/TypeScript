//BASE TYPES

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

//GENERICS
//1

function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

//2

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, B extends AllType>(
  top: T,
  bottom: B
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

//3

function merge<A, B>(objA: A, objB: B): A & B {
  return { ...objA, ...objB };
}

//4
//5
//6
// Виправте тип у аргументі функції так, щоб не було помилок типу.

type Userr = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<Userr>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });

//7

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Records = Record<UserRole, string | string>;

const RoleDescription: Records = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

type User = {
  firstName: string;
  lastName: string;
  age: number;
  isOnline: boolean;
};

type ToUpdate = Partial<User>;

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

type Config = {
  host: string;
  port: number;
  protocol: string;
};

function returnConfig(obj: Config, fieldToUpdate: Partial<Config>) {
  return { ...obj, ...fieldToUpdate };
}
// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

function returnArray<T>(arr: ReadonlyArray<T>): T[] {
  return [...arr];
}

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

const NewConfig: Readonly<Config> = {
  host: "local",
  port: 10,
  protocol: "https",
};

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

type UserObj = {
  name: string;
  lastName: string;
  age: number;
  email: string;
  isOnline: boolean;
};

function returnUserFields(obj: UserObj): Pick<UserObj, "name" | "email"> {
  return {
    name: obj.name,
    email: obj.email,
  };
}

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

type Users = Record<string, number>;

const users: Users = {
  Bob: 20,
  Kivi: 10,
  Mari: 20,
  Anna: 30,
};

// Задача 2: Мапа з іменами місяців до кількості днів у них.

type Mounth = Record<string, number>;

const mounth: Mounth = {
  July: 30,
  May: 31,
  January: 30,
  February: 28,
};

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
type NewUserObj = Omit<UserObj, "password">;

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

type ApiResponse = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
};

type ResponseWithoutDate = Omit<ApiResponse, "createdAt">;
