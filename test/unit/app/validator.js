'use strict';

require('chai').should();

var pwd       = process.env.PWD,
    path      = require('path'),
    Validator = require(path.join(pwd, 'app/validator'));

describe('Validator', function() {
  describe('instanciation', function() {
    it('should throw on empty instanciation', function() {
      (function() {
        new Validator();
      }).should.throw(Error);
    });

    it('should throw on instanciation wih Boolean', function() {
      (function() {
        new Validator(true);
      }).should.throw(Error);
    });

    it('should throw on instanciation wih String', function() {
      (function() {
        new Validator('false');
      }).should.throw(Error);
    });

    it('should not throw on instanciation wih Object', function() {
      (function() {
        new Validator({});
      }).should.not.throw(Error);
    });
  });

  describe('methods - empty instanciation', function() {
    let validator;

    before(function() {
      validator = new Validator({});
    });

    it('should not throw on validate call', function() {
      (function() {
        validator.validate({});
      }).should.not.throw(Error);
    });

    it('should be valid', function() {
      let validation = validator.validate({});
      validation.isValid.should.equal(true);

      validation = validator.validate({
        'fuu': 'bar'
      });
      validation.isValid.should.equal(true);
    });
  });

  describe('methods - instanciation', function() {
    let validator, validatorKO;

    before(function() {
      validator = new Validator({});
      validatorKO = new Validator({
        'items': {
          'type': 'boolean'
        }
      });
    });

    it('should not throw on validate call', function() {
      (function() {
        validator.validate({});
      }).should.not.throw(Error);
    });

    it('should be valid', function() {
      let validation = validator.validate({});
      validation.isValid.should.equal(true);

      validation = validator.validate({
        'fuu': 'bar'
      });
      validation.isValid.should.equal(true);
    });

    it('should be valid', function() {
      let validation = validator.validate([{}, {}]);
      validation.isValid.should.equal(true);

      validation = validator.validate([{
        'fuu': 'bar'
      }, {
        'fuu': 'bar'
      }]);
      validation.isValid.should.equal(true);
    });

    it('should not be valid', function() {
      let validation = validatorKO.validate([{}, {}]);
      validation.isValid.should.equal(false);

      validation = validatorKO.validate([{
        'fuu': 'bar'
      }, {
        'fuu': 'bar'
      }]);
      validation.isValid.should.equal(false);
    });
  });
});
