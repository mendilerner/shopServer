import jsonfile from 'jsonfile';
const FILE = './data/users.json';


const getUsers = async (req, res) => {
    const data = await jsonfile.readFile(FILE);
    return data

}

const getUser = async (_id) => {
    const users = await jsonfile.readFile(FILE);
    const user = users.find((user) => user.id === _id);
    return user
}

const addUser = async (newUser) => {
    try {
        const users = await jsonfile.readFile(FILE);
        users.push(newUser)
        await jsonfile.writeFile(FILE, users)
        return newUser
    }
    catch (err) {
        console.log(err);
    }
}

const updateUser = async (userForUpdate) => {
    const users = await jsonfile.readFile(FILE);
    let userIndex = users.findIndex((user) => user.id === userForUpdate.id)
    console.log("aaaaaaaaaaaaaaa");
    if (userIndex === -1) {
        return false
    }
    users[userIndex] = userForUpdate;
    await jsonfile.writeFile(FILE, users)
    return userForUpdate
}

const deleteUser = async (userId) => {
    try {
        const users = await jsonfile.readFile(FILE);
        let userIndex = users.findIndex((user) => user.id === userId)
        if (userIndex === -1) {
            return false
        }
        const deletedUser = users[userIndex]
        users.splice(userIndex, 1)
        await jsonfile.writeFile(FILE, users)
        console.log(JSON.stringify(deletedUser));
        return deletedUser
    }
    catch (err) {
        console.log(err);
    }
}

const funcs = { getUsers, getUser, updateUser, deleteUser }
export default funcs