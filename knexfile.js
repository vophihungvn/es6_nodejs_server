const env = process.env.NODE_ENV || 'development';

module.exports[env] = {
  client: 'postgresql',
  connection: require('./config/' + env).database
}