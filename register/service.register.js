import registerDal from './dal.register.js'
import Utils from '../utils/Utils.js'

const signUp = async (_newUser) => {
    _newUser.password = await Utils.encodedPassword(_newUser.password)
    const newUser = await registerDal.signUp(_newUser)
    if (!newUser) {
        return false
    }
    return newUser
}

const login = async (userEmail, userPassword) => {
    const user = await registerDal.login(userEmail, userPassword)
    if (user) {
        const validPassword = await Utils.compareEncodedPassword(userPassword, user.password)
        if (validPassword) {
            return true
        }
    }
    return false
}





const funcs = { login, signUp }
export default funcs