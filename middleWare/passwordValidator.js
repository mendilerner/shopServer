//const passwordValidator = require('password-validator');
import passwordValidator from 'password-validator';
// Create a schema
const schema = new passwordValidator();


// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// // Validate against a password string
// console.log(schema.validate('validPASS123'));
// // => true
const passwordValid = (req, res, next) => {
    const password = req.body.password;
    console.log('check password validation');
    if(!schema.validate(password)){
        res.send('password is invalid')
        return
    } 
    next();
    };
export default passwordValid