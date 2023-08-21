import jsonfile from 'jsonfile';
const FILE = './data/users.json';


const signUp = async (newUser) => {
    const users = await jsonfile.readFile(FILE);
    let userExist = users.find((user) => user.email === newUser.email)
    if (userExist) {
        return false
    }
    else {
        newUser.id = getMaxUserId(users) + 1
        if(!newUser.creator){
            newUser.creator = newUser.id
        }
        if(!newUser.isAdmin){
            newUser.isAdmin = false
        }
        users.push(newUser)
        await jsonfile.writeFile(FILE, users)
        return newUser
    }
    
}

const login = async (_email) => {
    const users = await jsonfile.readFile(FILE);
    let user = users.find((user) => user.email === _email)
    if (!user) {
        return false
    }
    return user
}


function getMaxUserId(_elements) {
    let maxId = _elements[0].id; 
    for (const element of _elements) {
        if (element.id > maxId) {
            maxId = element.id;
        }
    }
    return maxId;
}


const funcs = { login , signUp}
export default funcs


