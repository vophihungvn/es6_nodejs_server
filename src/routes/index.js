import fs from 'fs'
import path from 'path'

let versions = fs.readdirSync(__dirname)
let route = express.Router();

_.each(versions, version => {
  let versionDir = path.join(__dirname, version);
  if(fs.lstatSync( versionDir ).isDirectory()){
    let modules = fs.readdirSync( versionDir )
    let subRoute = express.Router();
    _.each( modules, module => {
      let moduleName = module.replace('.route.js', '');
      subRoute.use('/' + moduleName, require( path.join(__dirname, version, module) ))
    })

    route.use('/' + version, subRoute)
  }
})

export default route;