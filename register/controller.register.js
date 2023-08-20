import registerService from './service.register.js'

const signUp = async (req, res) => {
    console.log('enter to sign-up for check user');
    try{
    const user = req.body
    const signUpResult = await registerService.signUp(user)
    if (signUpResult === false){
        return res.json({error: 'user has already exist'})
    }
    else{
        return res.json({success: signUpResult})
    }
    }
    catch (err){
        console.log(err.message);
        res.json({error: "server error"})
    }
}

const login = async (req, res) => {
    console.log('enter to log-in for check user');
    try{
    const user = req.body
    const {email, password} = user
    const loginResult = await registerService.login(email, password)
    if (loginResult === false){
        return res.json({error: 'wrong credentials'})
    }
    else{
        return res.json({success: 'User is connected'})
    }
    }
    catch (err){
        console.log(err.message);
        res.json({error: "server error"})
    }
}

const funcs = {login, signUp}
export default funcs
     
    
        