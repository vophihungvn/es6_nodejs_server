import UserControler      from 'controllers/user.controller' 

let router = express.Router()

router.post('/login', UserControler.login)

module.exports = router;