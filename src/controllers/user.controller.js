import UserService from 'services/user.service'

export default class {

  static login (req, res, next) {
    let { username, password } = _.pick(req.body, "access_token")
    UserService.login({ username, password })
    .then(  data  => res.send(data))
    .catch( error => res.jsonError(new ApplicationException(ERROR_CODE.ERR_500, error.toString())))
  } 
}

