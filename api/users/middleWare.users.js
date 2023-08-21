import usersDal from './dal.users.js'

const isAdminCheck = async (password, email) => {
    const users = await usersDal.getUsers()
    let user = users.find((user) => user.email === email)
    if (user && password === user.password && user.isAdmin) {
        return true
    }
    return false
}

const isAdminUser = async (req, res, next) => {
    try {
        const { password, email } = req.query
        const users = await usersDal.getUsers()
        let user = users.find((user) => user.email === email)
        if (!user) {
            return res.json({ error: "email does not match" })
        }
        if (password === user.password) {
            if (user.isAdmin) {
                next()
            }
            else {
                return res.json({ error: "user is not admin" })
            }
        }
        else {
            return res.json({ error: "password does not match" })
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
        const creatorPassword = req.query.password
        const creatorEmail = req.query.email
        const users = await usersDal.getUsers()
        let processedUser = users.find((user) => user.id === id)
        if (!processedUser) {
            return res.json({ error: "user does not exist" })
        }
        const userCreator = users.find((user) => user.email === creatorEmail)
        console.log(userCreator);
        if (!userCreator) {
            return res.json({ error: "creator does not exist" })
        }
        if (creatorPassword === userCreator.password) {
            if (processedUser.creator === userCreator.id) {
                next()
            }
            else {
                return res.json({ error: "you are not the creator" })
            }
        } else {
            return res.json({ error: "password does not match" })
        }
    }
    catch (err) {
        console.log(err)
        res.json({ error: "server error" })
    }
}

const isCreatorOrAdmin = async (req, res, next) => {
    try {
        const id = Number(req.params.id)
        const { password, email } = req.query
        const users = await usersDal.getUsers()
        let user = users.find((user) => user.email === email)
        if (!user) {
            return res.json({ error: "email does not match" })
        }
        if (password === user.password) {
            if (user.creator === id || user.isAdmin) {
                next()
            }
            else {
                return res.json({ error: "user does not allowed" })
            }
        }
    }
    catch (err) {
        console.log(err)
        res.json({ error: "server error" })
    }
}

const funcs = { isAdminUser, isCreator, isCreatorOrAdmin }
export default funcs