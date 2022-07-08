export default class product {
  constructor(name, price, long, wide, high, type) {
    this.name = name;
    this.price = price;
    this.long = long;
    this.wide = wide;
    this.high = high;
    this.type = type;
  }

  get name() {
    return this.name;
  }

  get price() {
    return this.name;
  }

  get type() {
    return this.type;
  }

  get area() {
    return this.areaCalc();
  }

  areaCalc() {
    return (
      2 * this.long * this.wide +
      2 * this.long * this.high +
      2 * this.wide * this.high
    );
  }
}
