'use strict';

require('chai').should();

var pwd       = process.env.PWD,
    path      = require('path'),
    Validator = require(path.join(pwd, 'app/validator'));

describe('Validator', function() {
  describe('Validator methods', function() {
    it('should throw on instanciation', function() {
      (function() {
        new Validator();
      }).should.throw(Error);
    });

    it('should not throw on method validate call (not overidden)', function() {
      class Child extends Validator {}

      let child = new Child();
      
      (function() {
        child.validate();
      }).should.throw(Error);
    });

    it('should not throw on inheritance instanciation', function() {
      class Child extends Validator {
        constructor() {
          super();
        }
      }

      (function() {
        new Child();
      }).should.not.throw(Error);
    });

    it('should not throw on method validate call', function() {
      class Child extends Validator {
        validate() {}
      }

      let child = new Child();
      
      (function() {
        child.validate();
      }).should.not.throw(Error);
    });
  });
});
