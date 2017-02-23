module.exports = {
  server : {
    name: 'Node.JS ES6 Server Example',
    protocol: 'http',
    host: 'localhost',
    port: 9000,
    limit: 100
  },
  auth: {
    encrypt_key: 'es6-server',
    expire: 7*24*60*60*1000 //7 days
  }
}