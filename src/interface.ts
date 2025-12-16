interface A {
  value: number;
}
// there is no way to show error when merging interfaces with same properties???
interface B extends A {
  value: number;
}
