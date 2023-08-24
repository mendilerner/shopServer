import express from 'express';
import morgan from 'morgan'
import products from './api/products/route.products.js'
import register from './register/router.register.js'
import users from './api/users/route.users.js'
import cors from 'cors';

const port = 3000;
const app = express()
app.use(cors())
app.use(morgan('common'))
app.use(express.json())

app.use('/register', register)

app.use('/api/products', products);

app.use('/api/users', users)

app.use((req, res, next) => {
    const err = new Error('page not found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status | 500)
    res.json({
        error: err.message
    })
})

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);

})