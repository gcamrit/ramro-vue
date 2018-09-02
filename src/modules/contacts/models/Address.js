export class Address {
  constructor({ street = '', city = '', zip = '' } = {}) {
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
}

export function createAddress(data) {
  return Object.freeze(new Address(data));
}
