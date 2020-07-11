// class Person {
//   name: string;
//   age: number;
// }

// const a: Partial<Person>;

// const b: { name?: string, age?: number };

// aとbは同様の型として振る舞う
// 参考 https://qiita.com/Tsuyoshi84/items/e74109e2ccc0f4e625aa

// 実際に作ってみる

// class Person {
//   name?: string;
//   age?: number;

//   constructor(init?: Partial<Person>) {
//     Object.assign(this, init);
//   }
// }

// const obj = {
//   name: 'Takashi',
//   age: 70,
// };

// const takashi = new Person(obj);

// console.log(takashi.name); // => 'Takashi'
// console.log(takashi.age); // => 70
