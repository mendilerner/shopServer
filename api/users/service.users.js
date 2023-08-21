import userDal from './dal.users.js'
//import Utils from './../../Utils.js'

const getUsers = async (req, res) => {
    const users = await userDal.getUsers();
    return users;
    };

const getUser = async (_id) => {
    const user = await userDal.getUser(_id);
    return user;
    };



const updateUser = async (userForUpdate) =>{
    //userForUpdate.password = await Utils.encodedPassword(userForUpdate.password)
    const updatedUser = await userDal.updateUser(userForUpdate);
    return updatedUser
}

const deleteUser = async (userId) =>{
    const deletedUser = await userDal.deleteUser(userId);
    return deletedUser
}
const funcs = {getUsers, getUser, updateUser, deleteUser}
export default funcs