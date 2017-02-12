require('./global')

let response_helper = require('middlewares/response_helper')
  , logger          = require('morgan')
  , bodyParser      = require('body-parser')
  , RateLimit       = require('express-rate-limit')
  , app             = express()
  , apiLimiter      = new RateLimit({ max: config.server.limit })

if (env != "test")
  app.use(logger('common'))


app
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
  .use(response_helper)


// Applies routes
let versioning_routes = {
    v1: ["users"]
  }
  , path = require('path')


for(let [version, routes] of Object.entries(versioning_routes)) {
  console.time("Loading route " + version);
  routes.map((route) => app.use(
      ["/api", version, route].join("/")
    , requireFromRoot(path.join('routes', version, route + ".route"))
  )) 
  console.timeEnd("Loading route " + version);
}


app.listen(config.server.port, () => {
  console.log('%s started at %s://%s:%s', config.server.name, config.server.protocol, config.server.host, config.server.port);
});

module.exports = app;