require('./global')

//import response_helper from 'middlewares/response_helper'
import logger          from 'morgan'
import bodyParser      from 'body-parser'
import api from 'routes'

let app = express()

app
  app.use(logger('common'))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
  .use('/api', api)
//  .use(response_helper)


app.listen(config.server.port, () => {
  console.log('%s started at %s://%s:%s', config.server.name, config.server.protocol, config.server.host, config.server.port);
});

export default app;