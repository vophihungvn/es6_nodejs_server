global.env = process.env.NODE_ENV || 'development';
require('app-module-path/register')

global._        = require('lodash')
global.express  = require('express')
//global.mongoose = require('mongoose')

// global.ERROR_CODE = requireFromRoot('data/error_code')
// global.CONSTANTS  = requireFromRoot('data/constants');
global.config     = require('../config/' + env);

//Error handler
global.ApplicationException = function (code, message) {
  this.message = message || code.message;
  this.code    = code.code;
  this.type    = code.type;
  this.stack   = code.stack;
}


