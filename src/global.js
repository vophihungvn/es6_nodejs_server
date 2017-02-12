global.env = process.env.NODE_ENV || 'development';
if (env != 'test'){
   require('import-export')
   require('app-module-path/register')
}
global._        = require('lodash')
global.express  = require('express')
global.mongoose = require('mongoose')

global.requireFromRoot =  (name) => {
  if (name.charAt(0) != '/') {
    name = '/' + name;
  }
  return require(__dirname + name);
}


global.ERROR_CODE = requireFromRoot('data/error_code')
global.CONSTANTS  = requireFromRoot('data/constants');
global.config     = requireFromRoot('../config/' + env);

//Error handler
global.ApplicationException = function (code, message) {
  this.message = message || code.message;
  this.code    = code.code;
  this.type    = code.type;
  this.stack   = code.stack;
}


