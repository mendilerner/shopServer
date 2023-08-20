import registerDal from './dal.register.js'
//import Utils from '../utils/Utils.js'

const signUp = async (_newUser) => {
    const newUser = await registerDal.signUp(_newUser)
    if (!newUser) {
        return false
    }
    return newUser
}

const login = async (userEmail, userPassword) => {
    const user = await registerDal.login(userEmail, userPassword)
    if (user) {
        if (user.password === userPassword){
            return true
        }
        // const validPassword = await Utils.compareEncodedPassword(password, user.password)
        // if (validPassword) {
        //     return true
        // }
    }
    return false
}





const funcs = { login, signUp }
export default funcs