import UserControler      from 'controllers/user.controller' 

let router = express.Router()

router.get('/login', UserControler.login)

module.exports = router;