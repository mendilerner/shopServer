import bcrypt from 'bcrypt'
const saltRounds = 10;

function checkUserExist(res, users, userId){
    for (let user of users) {
        if (user.id === userId) {
            return true
        }
    };
    return false
}

function CheckValidUser(res, users, newUser){
    for (let key of Object.keys(newUser)){
        if (!Object.hasOwn(users[0], key)) {
            res.send('user is invalid')
            return false
        }
    }
    return true
}
async function encodedPassword(password){
    const hash = await bcrypt.hash(password, saltRounds);
    return hash
}

async function compareEncodedPassword(password, hash){
    const result = await bcrypt.compare(password, hash); 
    return result
}

const funcs = {checkUserExist , CheckValidUser, encodedPassword, compareEncodedPassword}
export default funcs