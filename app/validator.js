'use strict';

var Validator = require('pi-validator'),
    tv4       = require('tv4'),
    _         = require('lodash');

class TV4Validator extends Validator {
  constructor(schema) {
    super(schema);

    if(_.isUndefined(schema)) {
      throw(new Error('The schema need to be defined'));
    }
    if(! _.isObject(schema)) {
      throw(new Error('The schema must be an Object'));
    }
    else {
      this.schema = schema;
    }
  }

  validate(data) {
    let validation;

    if (_.isArray(data)) {
      validation = tv4.validateMultiple(data, this.schema);

      return {
        isValid:     validation.valid,
        validations: validation.errors.map((element) => element.message)
      };
    }
    else {
      return {
        isValid:     tv4.validate(data, this.schema),
        validations: [tv4.error]
      };
    }
  }
}

module.exports = TV4Validator;
