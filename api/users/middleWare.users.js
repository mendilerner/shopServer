import usersDal from './dal.users.js'
import Utils from '../../utils/Utils.js'

const isAdminCheck = async (password, email) => {
    const users = await usersDal.getUsers()
    let user = users.find((user) => user.email === email)
    if (user && user.isAdmin) {
        const validPassword = await Utils.compareEncodedPassword(password, user.password)
        if (validPassword) {
            return true
        }
    }
    return false
}

const isCreatorCheck = async (password, email, processedUserId) => {
    const users = await usersDal.getUsers()
    const userCreator = users.find((user) => user.email === email)
    const processedUser = users.find((user) => user.id === processedUserId)
    if (userCreator && processedUser.creator === userCreator.id) {
        const validPassword = await Utils.compareEncodedPassword(password, userCreator.password)
        if (validPassword) {
            return true
        }
    }
    return false
}

const isAdminUser = async (req, res, next) => {
    try {
        const { password, email } = req.query
        if (await isAdminCheck(password, email)) {
            next()
        }
        else {
            return res.json({ error: "permission denied" });
        }
    }
    catch (err) {
        console.log(err)
        res.json({ error: "server error" })
    }
}

const isCreator = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const { password, email } = req.query
        if (await isCreatorCheck(password, email, id)) {
            next()
        }
        else {
            return res.json({ error: "permission denied" });
        }
    }
    catch (err) {
        console.log(err.message)
        res.json({ error: err.message || "server error" })
    }
}

const isCreatorOrAdmin = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const { password, email } = req.query
        if (await isAdminCheck(password, email)) {
            next()
        }
        else if (await isCreatorCheck(password, email, id)) {
            next()
        }
        else {
            return res.json({ error: "permission denied" });
        }
    }
    catch (err) {
        console.log(err)
        res.json({ error: "server error" })
    }
}

const funcs = { isAdminUser, isCreator, isCreatorOrAdmin }
export default funcs