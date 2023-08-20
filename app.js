import express from 'express';
//import Utils from './Utils.js';
import morgan from 'morgan'
import users from './api/products/route.products.js'
import register from './register/router.register.js'
const port = 3000;
const app = express()

app.use(morgan('common'))
app.use(express.json())


app.use('/register', register)
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/api/products', users);

// app.use((err, req, res, next) => {
//     console.log(err.message)
//     res.status(500).json({ error: "server error" })
// })

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);

})