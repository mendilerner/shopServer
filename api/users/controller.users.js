import usersService from './service.users.js'

const getUsers = async (req, res) => {
    try {
        console.log('enter to users');
        const users = await usersService.getUsers();
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err.message);
        res.json({ error: "server error" })
    }
};

const getUser = async (req, res) => {
    try {
        const currentId = Number(req.params.id)
        console.log('enter to user/', currentId);
        const user = await usersService.getUser(currentId);
        if (!user) {
            res.send('user does not exist')
        }
        else {
            res.status(200).json(user)
        }
    }
    catch (err) {
        console.log(err.message);
        res.json({ error: "server error" })
    }
};

const updateUser = async (req, res) => {
    console.log('enter to users for update user');
    try {
        const userId = Number(req.params.id);
        const userForUpdate = req.body;
        userForUpdate.id = userId;
        const updatedUser = await usersService.updateUser(userForUpdate);
        if (updatedUser === false) {
            return res.json({ error: 'user has not exist' })
        }
        res.status(200).json(updatedUser)
    }
    catch (err) {
        console.log(err.message);
        res.json({ error: "server error" })
    }
}

const deleteUser = async (req, res) => {
    console.log('enter to delete user');
    try {
        const userId = Number(req.params.id)
        const deletedUser = await usersService.deleteUser(userId)
        if (deletedUser) {
            res.status(200).json({ deletedUser })
        }
        else if (deletedUser === false) {
            res.send('user does not exist')
        }
    }
    catch (err) {
        console.log("ERROR ", err);
        res.status(500).json({ error: "server error" })
    }
}



const funcs = { getUsers, getUser, updateUser, deleteUser }
export default funcs