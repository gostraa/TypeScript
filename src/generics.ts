function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

let numbers = reverse<string>(["a", "b", "c"]);

//extends and key of
//additional generic validation
// коли  в функцію потрапляють обʼєкт і поле цього у вигляді стрінги
function lengthOfObj<T extends { length: number }>(obj: T): number {
  return obj.length;
}

lengthOfObj({
  name: "Bob",
  age: 40,
  hobby: "violin",
  length: 4,
});

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//partial <T>

// коли  в функцію потрапляють обʼєкт і поле яке треба оновити у вигляді обʼєкту
//дозволяє проводити валідацію частини ключів.Тобто тих ключів, які ми передали для оновлення чи являються влни частиною старого об'єкта

type Todo = {
  title: string;
  descr: string;
  completed: boolean;
};

function updateObject(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo: Todo = {
  title: "Learn TypeScript",
  descr: "study generics",
  completed: false,
};

const todo2: Todo = updateObject(todo, {
  title: "Learn TypeScript",
  descr: "study generics",
  completed: true,
});
