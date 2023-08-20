import validator from "email-validator";

const emailValidator = (req, res, next) => {
    try {
        const email = req.body.email;
        console.log('check email validation');
        if (!validator.validate(email)) {
            throw Error('email is invalid')
        }
    }
    catch (err){
        res.send(err.message)
        return
    }
    
    next();
};
export default emailValidator