[![NPM version](https://img.shields.io/npm/v/pi-validator.svg?style=flat-square)](https://www.npmjs.com/package/pi-validator)
[![Build Status](https://travis-ci.org/Picta-it/pi-validator.svg?branch=master)](https://travis-ci.org/picta-it/pi-validator)
[![Coverage Status](https://coveralls.io/repos/Picta-it/pi-validator/badge.svg?branch=master&service=github)](https://coveralls.io/github/Picta-it/pi-model?branch=master)
[![Dependency Status](https://david-dm.org/picta-it/pi-validator.svg)](https://david-dm.org/picta-it/pi-validator)

# PiValidator

Abstraction for validators inheritance. Validators are used to validate any data format. This interface allows common use for validation.

The basic implementation of it is [pi-validator-tv4](https://www.npmjs.com/package/pi-validator-tv4) **(on progress)** that validates an Object over a JSON schema.

But validator can be as complex as you wish. You can call remote endpoints to validate your entries. The only current restrictions is that the validation must be synchronous for now.

## Install

```bash
npm install pi-validator
```

## Usage

```javascript
var PiValidator = require('pi-validator');

class CustomValidator extends Validator {
  validate() {
    // Your custom validation
  }
}
```

