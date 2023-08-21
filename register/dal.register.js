import jsonfile from 'jsonfile';
const FILE = './data/users.json';


const signUp = async (newUser) => {
    const users = await jsonfile.readFile(FILE);
    let userExist = users.find((user) => user.email === newUser.email)
    if (userExist) {
        return false
    }
    else {
        newUser.id = users[users.length - 1].id + 1
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



const funcs = { login , signUp}
export default funcs


