'use strict';

class Validator {
  constructor() {
    if (this.constructor === Validator) {
      throw new Error('Can\'t instantiate abstract class!');
    }
  }

  validate(data) {
    throw(new Error('The validate method must be defined.'));
  }
}

module.exports = Validator;
