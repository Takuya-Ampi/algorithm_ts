function test<T>(arg: T): T {
  return arg;
}
console.log(test<number>(1));
console.log(test<string>("文字列"));
